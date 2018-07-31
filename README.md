# Diox Website

![Build Status](https://gitlab.com/djdiox/diox-website/badges/master/build.svg)
![Coverage](https://gitlab.com/djdiox/diox-website/badges/master/coverage.svg)

Currently the page ist hosted on [GitHub](https://djdiox.github.io/diox-website). 
It will be soon available on a Web Server with an domain.

Documentation for this app is found [here](https://djdiox.github.io/diox-website/doc/)

## Hosting

Hosting of the code powered by [GitLab](https://gitlab.com/djdiox/diox-website) and for pages on [GitHub](https://github.com/djdiox/diox-website)

## Build / Patch

Running `yarn version --new-version patch / minor / major` will create the semver version in the package.json and the tag in git

Execute `yarn build` for a normal build into dist folder.

Performing `yarn build:docs` will create a new version for GitHub Pages in the `docs` folder.

## Development

As a developer you need following tools are necessary to develop this project:

- [Node.JS LTS v8.11.1](https://nodejs.org)
- *preferred* installing Node.JS via nvm for more details see [nvm for unix/osx](https://github.com/creationix/nvm) or [nvm for windows](https://github.com/coreybutler/nvm-windows)
- [Yarn v1.7.0](https://yarnpkg.com/lang/en/)
- [Angular CLI v6.1.0](https://github.com/angular/angular-cli)
- [Git](https://git-scm.com/)

1. Install all required dependencies with `yarn install`
2. Copy `src/environments/environment.example.ts` to `environment.ts`
3. Fill out needed informations in the environment.ts file
4. Running `yarn start` wil start up development server on [http://localhost:4200](http://localhost:4200)

*Hint:* If you want to access the project on a mobile device in your network run `ng serve --host=0.0.0.0`

## Documentation

The Documentation is powered by compodoc! 

Just hit `yarn generate:documentation` and it will create the folder based on Code, Comments etc.

It will also show the documentation level (currently low, will be up in some time). 

Unit Test Coverage will follow as well.

## Changelog

A Changelog is provided in the project root under the filename `CHANGELOG.md`

## CI / CD

Continous Integration will be available over [GitLab Jobs](https://gitlab.com/djdiox/diox-website/-/jobs). 
Currently the automatic build is configured via `gitlab-ci.yml`.

First we use a pre configured karma docker image. Then install yarn, and the dependencies of the Project.
If that is done sucessfully, the unit & e2e will run. 

Finally it builds all necessary files into `docs/` folder and delivers it as artifcats.
GitLab will store the artifacts for 14 days.

## Firebase

As database is Firebase from Google used. The credentials for it are stored in the environment.prod.env
More Informations follows soon, the code will be updated, in order to make the blog work.

## Authentication

Will be available through firebase.
Login Function currently works if you press anywhere on the webpage `l`.

# Angular CLI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8. And updated to 6.1.0.
Running `ng -v` in the Project root after having installed Angular CLI will print out both the installed global and local package version.

Running `ng update` in the Project root will show any available Updates for angular

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `docs/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# About the developer

Stuttgart-Based developer running a dj/producer project. Love music, coding & peace

(c) 2018 Markus Wagner
