# WebkitTutorial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.1.

### Expenses server

Run `npm install -g json-server`, to install json-server globally.  Otherwise you cannot run the local expense server (and expenses will be empty)

Run `npm run rest` to run the expenses localhost json-server.   The app will retrieve the list of expenses.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Steps:

### Update expenses 

don't forget to import the sduimodule if needed in the `expenses.module`

> form
01. use `col-form-label` on labels
02. use `form-control` on inputs
03. use `sb-btn` on buttons

> list
01. upgrade to the bootstrap tables

> expenses home
01. `sd-body-content` with header and inner  (use cards layout)
02. use the webkit `sd-card` tags
