#!/usr/bin/env bash
. ~/.nvm/nvm.sh

# jump into project dir
cd $(dirname $0)

# use correct node version and install dependencies
nvm install
nvm use
npm i -g yarn
yarn install
