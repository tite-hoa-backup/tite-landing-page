#!/bin/bash]
echo "=============================="
echo "${PWD##*/}"
echo "=============================="

# task runner
sudo gulp watch

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
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
