#!/usr/bin/env bash
git clone https://git.patrikx3.tk/corifeus.git
pushd corifeus
git checkout master
git submodule update --init --recursive
git submodule foreach --recursive git checkout master

yarn install
git submodule foreach --recursive yarn install
