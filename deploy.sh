#!/bin/bash
prjname="tite-landing-page"

echo "=============================="
echo ${prjname}
echo "=============================="

# task runner
sudo gulp watch

# run on a local server
npm run dev

# build
npm run build

# deploy with firebase cli
firebase deploy

# get commit message
printf "\n"
IFS= read -r -p "Enter commit message: " commitmsg

# if commitmsg empty
if [ -z "$commitmsg" ]
then
    echo "Commit message is empty"
    commitmsg="Add files via upload"
fi

printf "\n"
git add .
git commit -m "$commitmsg"
git push

exit
