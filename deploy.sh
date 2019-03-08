#!/bin/bash

sudo gulp watch


npm run dev

# build
npm run build

# deploy with firebase cli
firebase deploy

# commit
git add .
git commit -m 'Deploy'
git push


exit
