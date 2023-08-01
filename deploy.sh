#!/usr/bin/env bash

DEPLOY_ENV=$1

# Load global environment variables
if [ -f .env ]
then
  export $(grep -v "^#" .env | xargs)
  echo "Loaded global environment variables from .env"
fi

# Load current environment variables
if [ -f .env.$DEPLOY_ENV ]
then
  export $(grep -v "^#" .env.$DEPLOY_ENV | xargs)
  echo "Loaded environment variables from .env.$DEPLOY_ENV"
fi

if [[ ! -z "$DEPLOY_THEME_URL" ]]
then
  cd src
  echo "Cleaning..."
  npm run clean
  echo "Building assets..."
  npm run build
  # echo "Sync plugins..."
  # rsync -rP --delete ../docker-volumes/plugins/ $DEPLOY_THEME_URL/../../plugins
  echo "Deploying to $DEPLOY_THEME_URL"
  rsync -rP --delete --exclude={'node_modules','*.log','.*'} ./ $DEPLOY_THEME_URL
  rsync -rP --delete --relative ./node_modules/hd-components/ $DEPLOY_THEME_URL
  echo "Deployment finished"
else
  echo "Please provide DEPLOY_THEME_URL variable for syncing. e.g.: user@host:path/to/theme in .env (or .env.{environment}) file."
fi
