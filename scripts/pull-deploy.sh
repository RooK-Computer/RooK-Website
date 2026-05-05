#!/usr/bin/env bash

set -Eeuo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="${DEPLOY_REPO_DIR:-$(cd -- "$SCRIPT_DIR/.." && pwd)}"
DEPLOY_REMOTE="${DEPLOY_REMOTE:-origin}"
DEPLOY_BRANCH="${DEPLOY_BRANCH:-wordpress}"
DEPLOY_LOCK_FILE="${DEPLOY_LOCK_FILE:-$REPO_DIR/.deploy.lock}"
COMPOSE_COMMAND="${COMPOSE_COMMAND:-docker compose}"
COMPOSE_RELOAD_ON_CHANGE="${COMPOSE_RELOAD_ON_CHANGE:-1}"
COMPOSE_RELOAD_PATTERNS="${COMPOSE_RELOAD_PATTERNS:-^(docker-compose\.ya?ml$|config/|docroot/wp-config\.php$)}"
DEPLOY_POST_PULL_HOOK="${DEPLOY_POST_PULL_HOOK:-}"
DEPLOY_HEALTHCHECK_URL="${DEPLOY_HEALTHCHECK_URL:-}"
DEPLOY_UPDATE_SUBMODULES="${DEPLOY_UPDATE_SUBMODULES:-0}"

timestamp() {
  date '+%Y-%m-%d %H:%M:%S'
}

log() {
  printf '[%s] %s\n' "$(timestamp)" "$*"
}

fail() {
  log "ERROR: $*"
  exit 1
}

cleanup() {
  local exit_code=$?
  if [[ $exit_code -ne 0 ]]; then
    log "Deployment failed with exit code $exit_code"
  fi
}

run_hook() {
  local hook_name=$1
  local hook_command=$2

  [[ -n $hook_command ]] || return 0

  log "Running ${hook_name}"
  bash -lc "$hook_command"
}

should_reload_compose() {
  local file

  [[ $COMPOSE_RELOAD_ON_CHANGE == "1" ]] || return 1
  [[ -f "$REPO_DIR/docker-compose.yml" ]] || return 1

  for file in "${CHANGED_FILES[@]}"; do
    if [[ $file =~ $COMPOSE_RELOAD_PATTERNS ]]; then
      return 0
    fi
  done

  return 1
}

run_healthcheck() {
  [[ -n $DEPLOY_HEALTHCHECK_URL ]] || return 0

  local attempt
  for attempt in 1 2 3 4 5; do
    if curl --fail --silent --show-error --max-time 10 "$DEPLOY_HEALTHCHECK_URL" > /dev/null; then
      log "Healthcheck passed"
      return 0
    fi
    sleep 3
  done

  fail "Healthcheck failed for $DEPLOY_HEALTHCHECK_URL"
}

trap cleanup EXIT

exec 9>"$DEPLOY_LOCK_FILE"
if ! flock -n 9; then
  log "Another deployment is already running"
  exit 0
fi

cd "$REPO_DIR"

git rev-parse --is-inside-work-tree > /dev/null 2>&1 || fail "$REPO_DIR is not a git repository"

if [[ -n $(git status --porcelain --untracked-files=no) ]]; then
  fail "Refusing to deploy with tracked changes in the working tree"
fi

CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD)"
if [[ $CURRENT_BRANCH != "$DEPLOY_BRANCH" ]]; then
  fail "Checked out branch is '$CURRENT_BRANCH', expected '$DEPLOY_BRANCH'"
fi

OLD_REV="$(git rev-parse HEAD)"
REMOTE_REF="refs/remotes/$DEPLOY_REMOTE/$DEPLOY_BRANCH"

log "Fetching $DEPLOY_REMOTE/$DEPLOY_BRANCH"
git fetch --prune "$DEPLOY_REMOTE" "$DEPLOY_BRANCH"

NEW_REV="$(git rev-parse "$REMOTE_REF")"

if [[ $OLD_REV == "$NEW_REV" ]]; then
  log "No changes to deploy"
  exit 0
fi

if ! git merge-base --is-ancestor "$OLD_REV" "$NEW_REV"; then
  fail "Remote history is not a fast-forward from $OLD_REV to $NEW_REV"
fi

mapfile -t CHANGED_FILES < <(git diff --name-only "$OLD_REV" "$NEW_REV")

log "Deploying $(git rev-parse --short "$NEW_REV")"
git merge --ff-only "$NEW_REV"

if [[ $DEPLOY_UPDATE_SUBMODULES == "1" ]]; then
  log "Updating submodules"
  git submodule update --init --recursive
fi

if should_reload_compose; then
  log "Reloading Docker Compose services"
  bash -lc "$COMPOSE_COMMAND up -d"
fi

run_hook "post-deploy hook" "$DEPLOY_POST_PULL_HOOK"
run_healthcheck

log "Deployment completed: $(git rev-parse --short "$OLD_REV") -> $(git rev-parse --short "$NEW_REV")"
