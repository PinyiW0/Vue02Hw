#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
# git checkout -b main
git checkout main
git add -A
git commit -m 'deploy'

# if you are deploying to https://PinyiW0.github.io
# git push -f git@github.com:PinyiW0/PinyiW0.github.io.git main

# if you are deploying to https://PinyiW0.github.io/Vue02Hw
git push -f git@github.com:PinyiW0/Vue02Hw.git main:gh-pages

cd -