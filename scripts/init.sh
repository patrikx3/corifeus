#!/usr/bin/env bash
git clone https://github.com/patrikx3/corifeus.git
pushd corifeus
git checkout master
git submodule update --init --recursive --remote
git submodule foreach --recursive git checkout master

yarn install
git submodule foreach --recursive yarn install
