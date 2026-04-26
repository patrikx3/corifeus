#!/usr/bin/env bash
git clone https://github.com/patrikx3/corifeus.git
pushd corifeus
git checkout main
git submodule update --init --recursive --remote
git submodule foreach --recursive git checkout main

npm install
git submodule foreach --recursive npm install
