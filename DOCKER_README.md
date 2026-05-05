# WordPress Local Stack (Official Image + Mapped Source)

## Current Setup
We now use the official image `wordpress:6.5.3-php8.2-apache` and map the repository's `docroot/` into the container at `/var/www/html` so core, themes, plugins, and uploads are versioned locally.

## Services
- wordpress (Apache + PHP + WP core)
- mariadb (MariaDB 11.3) with persistent bind mount `db_data/`

## Compose Summary
```
wordpress:
  image: wordpress:6.5.3-php8.2-apache
  ports: 8088 -> 80
  volumes:
    - ./docroot:/var/www/html
    - ./config/php.ini:/usr/local/etc/php/conf.d/custom.ini:ro
  env: WORDPRESS_DB_* (from .env)
```

## First Run
Visit http://localhost:8088/ and you'll be redirected to `/wp-admin/install.php` (HTTP 302) if `wp-config.php` is not yet finalized.

If you haven't created `wp-config.php`:
```
cp docroot/wp-config-sample.php docroot/wp-config.php
```
Then edit DB constants or let the installer write them.

## Environment Variables
Values taken from `.env`:
- WP_DB_NAME
- WP_DB_USER
- WP_DB_PASSWORD
- WP_DB_ROOT_PASSWORD

These are injected as `WORDPRESS_DB_*` which the entrypoint script uses automatically (no manual edit needed unless you want custom salts or non-default table prefix now).

## Custom php.ini
`config/php.ini` is mounted read-only. We disabled host-specific extensions (xdebug/imagick) to avoid startup failures. Add minimal overrides only; large production tuning should use a custom image instead.

## Persistence
- Database: `./db_data` (bind mount)
- WordPress core/plugins/themes/uploads: in your working tree under `docroot/`

To reset database:
```
docker compose down -v
rm -rf db_data/*
docker compose up -d
```

## Common Tasks
Inspect logs:
```
docker compose logs -f wordpress
```
Check installed PHP extensions:
```
docker compose exec wordpress php -m
```
Run WP-CLI (temporarily):
```
docker compose exec wordpress bash -c "php /var/www/html/wp-admin/includes/upgrade.php || true"
```
(For regular WP-CLI usage you may add the `wordpress:cli` image or install wp-cli.phar inside a throwaway container.)

## Pull-Based Deployment
For production rollout on a server that can reach GitHub over outbound SSH/HTTPS, use `scripts/pull-deploy.sh`.

The script:
- fetches `origin/wordpress`
- deploys only fast-forward changes
- refuses to run if the checkout has tracked local edits
- optionally runs `docker compose up -d` when runtime config changes
- can run a post-deploy hook and HTTP healthcheck

Example:
```
chmod +x scripts/pull-deploy.sh
DEPLOY_BRANCH=wordpress \
DEPLOY_REPO_DIR=/srv/rook-site/repo \
DEPLOY_HEALTHCHECK_URL=https://example.com/ \
DEPLOY_POST_PULL_HOOK='docker compose exec -T wordpress php -r "if (function_exists(\"opcache_reset\")) { opcache_reset(); }"' \
./scripts/pull-deploy.sh
```

Suggested systemd service:
```ini
[Unit]
Description=Pull and deploy RooK WordPress updates
After=docker.service network-online.target
Wants=network-online.target

[Service]
Type=oneshot
WorkingDirectory=/srv/rook-site/repo
Environment=DEPLOY_BRANCH=wordpress
Environment=DEPLOY_REPO_DIR=/srv/rook-site/repo
ExecStart=/srv/rook-site/repo/scripts/pull-deploy.sh
```

Suggested timer:
```ini
[Unit]
Description=Check for RooK WordPress updates

[Timer]
OnBootSec=2min
OnUnitActiveSec=2min
Unit=rook-wordpress-deploy.service

[Install]
WantedBy=timers.target
```

Keep `docroot/wp-content/uploads`, database storage, and secrets outside git-controlled state on the server so pulls stay fast-forwardable.

## Notes
- Using the official image simplifies extension management (mysqli, pdo_mysql already present).
- If you need Xdebug, you'll have to allow either a custom Dockerfile or a sidecar container proxy pattern.
- Port 8088 chosen due to 8080 conflict earlier.

## Troubleshooting
403 or 404 after start: ensure `./docroot` contains WordPress core (index.php present) and permissions allow read (on macOS usually fine). 500 errors often come from invalid custom php.ini directives—comment them out incrementally.

Enjoy your local WP stack!
