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
git add .

# commit
if [ -z "$commitmsg" ]
then
    echo "commit message is empty"
    git commit -m "Add files via upload"
else
    git commit -m "$commitmsg"
fi

git push

exit
