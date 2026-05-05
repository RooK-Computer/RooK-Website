#!/usr/bin/env bash

set -Eeuo pipefail
umask 077

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="${DUMP_REPO_DIR:-$(cd -- "$SCRIPT_DIR/.." && pwd)}"
COMPOSE_COMMAND="${COMPOSE_COMMAND:-docker compose}"
DB_SERVICE_NAME="${DB_SERVICE_NAME:-db}"
OUTPUT_BASE_DIR="${DUMP_OUTPUT_DIR:-$(cd -- "$REPO_DIR/.." && pwd)/dumps}"
DUMP_PREFIX="${DUMP_PREFIX:-wordpress-db}"
DUMP_LOCK_FILE="${DUMP_LOCK_FILE:-$OUTPUT_BASE_DIR/.create-db-dump.lock}"
GZIP_LEVEL="${GZIP_LEVEL:-6}"

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
    if [[ -n "${TMP_DUMP_PATH:-}" && -f "${TMP_DUMP_PATH:-}" ]]; then
      rm -f "$TMP_DUMP_PATH"
    fi
    log "Dump creation failed with exit code $exit_code"
  fi
}

trap cleanup EXIT

mkdir -p "$OUTPUT_BASE_DIR"

exec 9>"$DUMP_LOCK_FILE"
if ! flock -n 9; then
  fail "Another dump creation is already running"
fi

cd "$REPO_DIR"

[[ -f "$REPO_DIR/docker-compose.yml" ]] || fail "docker-compose.yml not found in $REPO_DIR"
git rev-parse --is-inside-work-tree > /dev/null 2>&1 || fail "$REPO_DIR is not a git repository"

DB_CONTAINER_ID="$(bash -lc "$COMPOSE_COMMAND ps -q $DB_SERVICE_NAME")"
[[ -n "$DB_CONTAINER_ID" ]] || fail "Database service '$DB_SERVICE_NAME' is not running"

DUMP_BASENAME="${DUMP_PREFIX}-$(date '+%Y%m%d-%H%M%S').sql.gz"
DUMP_PATH="$OUTPUT_BASE_DIR/$DUMP_BASENAME"
TMP_DUMP_PATH="$DUMP_PATH.tmp"

log "Creating database dump at $DUMP_PATH"

bash -lc "$COMPOSE_COMMAND exec -T $DB_SERVICE_NAME sh -lc 'exec mariadb-dump --single-transaction --quick --lock-tables=false -u\"\$MARIADB_USER\" -p\"\$MARIADB_PASSWORD\" \"\$MARIADB_DATABASE\"'" \
  | gzip "-$GZIP_LEVEL" > "$TMP_DUMP_PATH"

mv "$TMP_DUMP_PATH" "$DUMP_PATH"

log "Database dump ready"
printf '%s\n' "$DUMP_PATH"
