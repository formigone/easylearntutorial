mkdir -p app/{lib,img,css,js/app}
mkdir -p dist/js
mkdir lib

git clone http://code.google.com/p/closure-library app/lib/closure-library

wget http://dl.google.com/closure-compiler/compiler-latest.zip
unzip compiler-latest.zip -d lib
rm compiler-latest.zip

