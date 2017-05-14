#!/usr/bin/env bash
# https://gist.github.com/heiswayi/350e2afda8cece810c0f6116dadbe651
# Check out to a temporary branch:
# git config credential.helper store
git config --global credential.helper 'cache --timeout 7200'

git checkout --orphan temp

# Add all the files:
git add -A

# Commit the changes:
git commit -am "auto update"

# Delete the old branch:
git branch -D master

# Rename the temporary branch to master:
git branch -m master

# Finally, force update to our repository:
git push -f origin master