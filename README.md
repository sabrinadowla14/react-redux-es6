# react-redux-es6
Contents are taken from Plural sight "Building Application with React and Redux in ES6" By Cory House.

Package.Json file is taken from https://github.com/coryhouse/pluralsight-redux-starter

Added script to the given package.json file
"scripts": {
    "prestart": "babel-node tools/startMessage.js",
    "start": "npm-run-all --parallel test:watch open:src lint:watch",
    "open:src": "babel-node tools/srcServer.js",
    "lint": "node_modules/.bin/esw webpack.config.* src tools",
    "lint:watch": "npm run lint -- --watch",
    "test": "mocha --reporter spec tools/testSetup.js \"src/**/*.test.js\"",
    "test:watch": "npm run test -- --watch",
    "clean-dist": "npm run remove-dist && mkdir dist",
    "remove-dist": "node_modules/.bin/rimraf ./dist",
    "build:html": "babel-node tools/buildHtml.js",
    "prebuild": "npm-run-all clean-dist test lint build:html",
    "build": "babel-node tools/build.js",
    "postbuild": "babel-node tools/distServer.js"
  },
  
##Set up ESLint to catch mistakes

go to terminal and type - npm run lint

For Development:
To Run: 
npm install
npm start

For Production:
npm run build

For testing: npm run test -- --watch

