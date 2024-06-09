https://github.com/just-jeb/angular-builders/issues/1790
https://github.com/just-jeb/angular-builders/issues/1595
- What is the new application builder? https://github.com/just-jeb/angular-builders/issues/1595#issuecomment-1921830997

Chat GPT says maybe I need to also change serve

"serve": {
  "builder": "@angular-builders/custom-webpack:dev-server",
  "options": {
    "customWebpackConfig": {
      "path": "./webpack.config.js"
    }
  }
}
