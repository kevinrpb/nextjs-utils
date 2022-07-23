#!/usr/bin/env bash

rush rebuild # Build
git add -u # Stage files

rush check # Add changes
rush version --bump
git add -u

git commit -m ""

rush publish --publish --include-all
