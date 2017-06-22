# CarDealer

CarDealer is a Tech Demo of an implementation of Angular (formally known as Angular2)

## Installation

### Installation Summary

1. Install required tools (`npm, @angular/cli`)
2. Clone the Repository
3. Download Dependencies (`npm install`)
4. Run Dev Server (`ng serve`)

### 1. Install Required tools

Car Dealer requires you to have Node Package Manager (`npm`) installed. You can head to `https://nodejs.org` to download and install Node.js along with `npm`, or you may download npm independently from `https://www.npmjs.com/`.

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

## Vehicle Sorting

The car list screen displays cars sorted in ascending order by model, brand and year, in that order. However, due to popular convention, the composite reference of each vehicle is `Year Brand Model`, so it may appear that the cars are not sorted propperly, but they are. Keep that in mind as to not be confused.

## Vehicle Filtering

Vehicles are filtered by model, brand and year. Any part of the query string that matches any of those attributes by characters is considered a match. For example, typing `ch` into the query box will match two `Chevrolet` cars as well as the `Bugatti Chiron`. Also, typing `20` will match all car models, due to the year (all models are post year 2000).

## Car slug attribute

You may have noticed that cars have a `slug` field. The `slug` field is intended to be a unique url-safe code that references the car. That is, by reading the slug under certain contexts, you get a since of what the entity is. This is helpfull when you want your users to be able to determine more or less what data is being presented just by reading the url, in case they want to share the url with a friend. It is also usefull for the images, which is something I am taking advantage of in the app. I find implementing `slug` attribute on a variety of entities to be a very usefull practice with many advantages.

For example, in the following url

`http://localhost:4200/car/compare/2016_roborace_formula_e/2015_mercedes-benz_iaa`

It is somewhat clear that it refers to a page where two cars will be compared and those cars are the 2016 Roborace Formula E and the 2015 Mercedes-Benz IAA.

## Tests

### What is being tested

Car Dealer has a number of Unit tests and E2E tests. Unit tests are scattered on all components in order to comply with their successfull execution. However, the Car List component (the page that displays the list of cars) has the most test implemented upon.

### Running Unit Tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running E2E Tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
