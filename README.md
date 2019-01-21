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

### Update app.component.html 
> header
01. update header to `sd-header` with an applicationName
02. update welcome message to a `sd-header-navbar-item`
03. add extra`sd-header-navbar-item` with icon
04. add extra `sd-header-navbar-item` with bootstrap dropdown
05. add `sd-header-navbar-divider`

> body
01. add the `sd-body` container
02. put the `sd-body` tag in other components if you have a differnent layout for each page. (in the example home is different than the expenses)

> sidebar

01. transform items to sd-sidebar-items (do not forget to add this inside of the `sd-body` tag
02. extra elements `sd-sidebar-header-item`,`sd-sidebar-divider`

>> sidebar properties explained

| name | description |
|------|-------------|
|**sidebarFolded**|Sidebar will always be folded|
|**sidebarFoldedMdDown**|Sidebar will be folded when the screen gets smaller than the Md width (see bootstrap widths) |
|**sidebarFoldedLgDown**|Sidebar will be folded when the screen size gets smaller than the Lg width|
|**overrideIsActive**|When you want to override the default routing behavior|

>> sidebar-item properties explained

| name | description |
|------|-------------|
|**name**|name of the item|
|**routerlink**|where to navigate to when clicked  |
|**navCaret**|use when toggle is needed|
|**navIcon**|name of the icon (ex. icons8-inbox)  |
|**navBadgeValue**|the text you want on the badge  |
|**navBadgeClass**|Override the badge design eg. no-bg, primary,... |
|**isDisabled**| |
|**appIsActive**||
|**name**||

> body-content

01. add header
02. add inner content
