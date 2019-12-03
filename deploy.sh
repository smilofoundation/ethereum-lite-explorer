##!/bin/sh
#
#if [ "`git status -s`" ]
#then
#    echo "The working directory is dirty. Please commit any pending changes."
#    exit 1;
#fi
#
#echo "Deleting old publication"
#rm -rf public
#mkdir public
#git worktree prune
#rm -rf .git/worktrees/public/
#
#echo "Checking out gh-pages branch into public"
#git worktree add -B gh-pages public origin/gh-pages
#
#echo "Removing existing files"
#rm -rf public/*
#
acp install \
    @alethio/explorer-plugin-eth-common@3.0.0 \
    @alethio/explorer-plugin-eth-lite@4.0.0 \
    @alethio/explorer-plugin-eth-memento@1.1.0 \
    @alethio/explorer-plugin-eth-ibft2@2.0.0 \
    @alethio/explorer-plugin-3box@1.1.0

cd ../explorer-core-plugins && npm run build-js-prod && ../ethereum-lite-explorer
rm -rf dist/plugins/aleth.io/eth-lite/4.0.0
cp -r ../explorer-core-plugins/packages/eth-lite/dist dist/plugins/aleth.io/eth-lite/4.0.0

mkdir -p public/config
node_modules/.bin/webpack --config=./webpack.config.prod.js && cp -r dist/* public
cp CNAME public/CNAME
cp config.prod.json public/config/config.json
cp 404.html public

echo "Updating gh-pages branch"
cd public && git pull && git add --all && git commit -m "Publishing to gh-pages (publish.sh)"

#echo "Pushing to github"
git push --all
