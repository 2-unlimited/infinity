rm -rf ./clone
rm -rf ./deploy
npm run build
git clone https://github.com/2-unlimited/2-unlimited.github.io clone
mkdir deploy
cp -R ./clone/.git ./deploy
cp -R ./clone/README.md ./deploy
cp -R ./clone/LICENSE ./deploy
rm -rf clone
cp -R ./public/* ./deploy
cd deploy
git add .
git commit -m "deploy"
git push
rm -rf ./deploy