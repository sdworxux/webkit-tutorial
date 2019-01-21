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
Start `npm install -g @angular/cli`  to install angular if not done so already

01. >Start `npm set registry http://proget/npm/SDWorxNpm/`<br>

02. >Run  `npm install --save @ng-bootstrap/ng-bootstrap @sdworx/webkit @sdworx/sd-components` to install sdworx related libraries
   Check your package.json to see the differences

03. >Optional: run `npm install --save oidc-client ngx-toastr @ngx-loading-bar/core`

04. >Include CSS in your project by updateing angular.json

```"styles": [
  "node_modules/@sdworx/webkit/dist/css/app.css", 
  "node_modules/@sdworx/webkit/dist/css/icons.css", 
  "styles.css"
], 
```

05. >Add Modules to your root component
```
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SdUiModule } from '@sdworx/sd-components';

 imports: [
    NgbModule, SdUiModule.forRoot()
  ],
```
