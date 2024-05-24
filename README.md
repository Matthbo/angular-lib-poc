# AngularLibPoc

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.7.

A POC as an example on how to make a proper library as an angular project

## Repo structure

This repository exists of 2 angular projects which split the responsibility of developing vs publishing only what's needed:
  - The main project (angular-lib-poc in this case)
    - Lives in `<root>/src` like any other normal angular project
    - Is just a regular angular project used for testing the library project
    - Uses all the default configs & files setup in the root
    - This project won't be any part of what is published to NPM
  - The library project (example-lib in this case)
    - Lives in `projects/example-lib` and is the actual library you can put on NPM
    - Is defined as project type `library` in the `angular.json`
    - Has its own `package.json` & `tsconfig` that extends the main one
    - Has an `ng-package.json`  for ng-packagr to use

Pay attention to `/package.json`, `/angular.json` & `projects/example-lib/package.json` since they define how the development environment will be set up compared to what will be published onto NPM.

The biggest upside of splitting the library code and testing the implementation through the main project is that you can test exactly as how it'll be used in other projects.

If you see any improvements or additions that could benefit this POC, please open an issue.
My goal with this POC is to setup a tempate that can be used in the future for all angular libraries.
