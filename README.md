# CarDealer

CarDealer is a Tech Demo of an implementation of Angular (formally known as Angular2)

## Installation

### Installation Summary

1. Install required tools (`npm, @angular/cli`)
2. Clone the Repository
3. Download Dependencies (`npm install`)
4. Run Dev Server (`ng serve`)

### 1. Install Required tools

Car Dealer requires you to have Node Paclage Manager (`npm`) installed. You can head to `https://nodejs.org` to download and install Node.js along with `npm`, or you may download npm independently from `https://www.npmjs.com/`.

You may also need Angular CLI. Install it through npm if you don't have it allready.

`npm install -g @angular/cli`

### 2. Clone the Repostory

To install CarDealer, first clone the repository with the following command.

`git clone https://github.com/marcohern/car-dealer.git ./my/local/car-dealer/path`

You may use GitHub Desktop or any other git client that you prefer.

### 3. Download Dependencies

Next you must download dependencies by running `npm install`:

`npm install`

That should download all dependencies for the source code.

### 3. Run Dev server

Run `ng serve` to run the dev server. To run the app, just navigate to `http://localhost:4200/` using your favorite browser. The app will automatically reload if you change any of the source files.

## Running tests

Car Dealer has a number of Unit tests and E2E tests.

### Running Unit Tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running E2E Tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Vehicle Sorting

The vars screen displays cars sorted by model, brand and year, in that order. However, due to popular convention, the composite name of each vehicle is `Year Brand Model`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
