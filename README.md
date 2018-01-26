# ng-ext-config-example

Simple Angular5 project that reads a external file with properties before the bootstrap.

## Motivation

There are not many examples of reading external files before the bootstrap, much less using version 5 of Angular.

## Description

Usually people are content with reading the properties of `environment.ts` and `environment.prod.ts` but, once the project is built, these files are integrated into the generated `.js` files.
If you want to change a property you have to rebuild the project.

That's why this example shows how to get a property from an external file, located in the server but decoupled from the rest of the code.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
