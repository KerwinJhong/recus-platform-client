set -e

npm run build

cp index.pages.html dist/index.html

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:KerwinJhong/recus-platform-client.git master:gh-pages

cd -