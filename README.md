# CarDealer

CarDealer is a Tech Demo of an implementation of Angular (formally known as Angular2). Not to be confused with AngularJS, usually refered to as Angular 1.

It is developed using [Angular CLI](https://cli.angular.io/) for scaffolding and general management, [Bootstrap 3](http://getbootstrap.com/) for it's UX elements, as well as [Toastr](http://codeseven.github.io/toastr/) for popup notifications.

## Installation

### Installation Summary

1. Install required tools (`npm, @angular/cli`)
2. Clone the Repository
3. Download Dependencies (`npm install`)
4. Run Dev Server (`ng serve`)

### 1. Install Required tools

Car Dealer requires you to have Node Package Manager (`npm`) installed. You can head to [NodeJS.org](https://nodejs.org) to download and install Node.js along with `npm`, or you may download npm independently from [Npmjs.org](https://www.npmjs.com/).

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

## Key files and folders

The following list of files are key, you may want to keep track of them:

- `src/app` Application source code root
- `src/app/modules` Application submodules
- `src/app/config.ts` Compare settings
- `src/app/toastr.ts` Toastr settings
- `src/assets/jsons/car-list.json` List of available cars.
- `src/assets/cars` Car images

## Car structure

Each car entity contains the following fields:

- **id**: unique identifier, numeric.
- **slug** *: url-safe code that contextualizes the car.
- **brand**: car brand.
- **year**: year for the model.
- **model**: name of the model.
- **price**: sale price.

(*) see [Car slug field](#car_slug_field) section to find out more about the slug field and it's pourpose.

## Modular design

CarDealer is an Angular application: a root module containing two additional submodules. The source code for the submodules is inside the `src/app/modules` folder, and they are:

- `menu`: The top menu bar.
- `cars`: Cars module, which contains query, list and detail components for cars.

Angular documentation encourages developers to modularize application as much as it is conveniently possible, since it increases performance and improves memory usage by not loading all modules at once. I chose to separate the menu only as an excersise, but since the menu is visible throughout the whole application, leaving it as a component within the root would have been fine.

The car components, on the other hand, were strategically placed into their own module. This is as to not load the cars module unless the user navigates to any of its components. It may seem unnecesarry within this execrise, but in a large application, with many components, modularizing them in terms of entities or functionality is a good idea, since only the modules that the user navigates to will be loaded.

## Vehicle Sorting

The car list screen displays cars sorted in ascending order by **model, brand and year**, in that order. However, due to popular convention, the composite reference of each vehicle is **Year Brand Model**, so it may appear that the cars are not sorted propperly, but they are. Keep that in mind as to not be confused.

## Vehicle Filtering

Vehicles are filtered by model, brand and year. Any part of the query string that matches any of those attributes by characters is considered a match. For example, typing **`ch`** into the query box will match two **`Chevrolet`** cars as well as the **`Bugatti Chiron`**. Also, typing **`20`** will match all car models, due to the year (all models are post year 2000).

## Car slug field

You may have noticed that cars have a **slug** field. The slug value is intended to be a unique url-safe code that references the car. This means that, by reading the slug under certain contexts, you get a since of what the entity is. Think of it as a descriptive username for the car, a **carname**, if you will. Since it's url-safe, then the code can be rendered within a url. This is helpfull when you want your users to be able to determine more or less what data is being presented just by reading the url, in case they want to share the url with a friend. It is also usefull for the images, which is something I am taking advantage of in the app. I find implementing slug attribute on a variety of entities to be a very usefull practice with many advantages.

For example, in the following url

`http://localhost:4200/car/compare/2016_roborace_formula_e/2015_mercedes-benz_iaa`

It is somewhat clear that it refers to a page where two cars will be compared and those cars are the 2016 Roborace Formula E and the 2015 Mercedes-Benz IAA.

### How are slugs generated?

In a real setting, the slug for each car, or any entity, for that matter, can be either generated automatically by the server, provided by the client app, or a combination of both. It's similar to a username in that it can be provided by the user, but must be unique, and obviously, url-safe. Those two are really the most important rules.

Beyond that, it is up to the developer to determine if and how to generate them, or how to allow users to provide them and at the same time, ensure that they are unique per entity.

Note that even though you can generate a unique hash or a guid for a slug if you like (it's quite feasable), doing this misses the point. Remember: you want to be able to tell what the entity is just by reading the slug, and a jumbled mess of letters and numbers does not tell you that that string or code is refering to a car.

### Do slugs need context?

Short answer: it is up to you, to add as much context as you want.

Long answer: In this example (CarDealer), the context of each of the slugs for each car requires you to know that these are cars. In other words, if you read a slug without knowing that it is a car, you may not know what it is refering to. It sounds like a car, but it also could be a toy, or a lego set. But this is fine, since we can add more context when we use the slug in a url.

For example, can you guess what this fake url is refering to, just by reading it?

`http://www.carsforsale.fake/car/2014_maserati_model-b` (Fake URL)

Well you may not be an expert in cars, or the internet, and you may not even be a salesman, but just by reading the web address, you can probably tell that navigating to that url will take to the a details page for a **car**, probably for sale. The car is likely a **2014** model, and you may guess that the name of that model is **model-b** and that the brand may well be **maserati**. Or maybe the brand is **model-b** and the model is called **maserati**? That is debateable, but either way, you are in the right direction, and you have not even navigated to that address.

In summary, my slugs do not have enough context to work by themselves, but you can add as much context as you want, if you have the means to. So, like I said, it is up to you.

## Compare Settings

### Dynamic routes

As mentioned above, the compare uses the slug of each vehicle to render the compare url, where each car is referenced within the url, making it more readable and convinient to share with friends. car id's can also be used, but are not favored for readability.

But another interesting aspect of the compare url, or compare route, is the fact that it is not a single route, but rather multiple dynamically generated routes. Historically, Angular recommends to establish routes statically, by typing them into the source code, which is fine for most implementations.

In this case, however, I wanted to allow the developer to establish the amount of cars that are allowed to be compared. Also, I wanted to allow the users to compare cars and allow them to share the url of any set of comparisons. So in order to achieve this, it was decided to create the routes for the compare screen dynamically.

So, ¿How do routes vary according to the amount of cars allowed to compare? well, essentially, if we are going to compare 5 cars, then each of the 5 cars has to be referenced in the url. And that's it! That is the magic. Each car is captured from the url, acquired independently and added to the compare table.

The app is limited to compare 2 to 3 cars. However, the app can be set to allow comparisons of any number of cars, provided, of course, your screen is wide enough to allow them to fit comfortably.

### The compare settings file (config.ts) - EXPERIMENTAL!

**Keep in mind, this is an experiment and is out of the scope of the application requirements.** Inside the source file `src/app/config.ts`, you will find the settings for the maximun and minimum allowed to be compared in a single screen. Changing these settings and refreshing the application should work fine, albeit your screen size may be an issue if it's too narrow, like on a mobile phone for example. Usually 3 cars looks fine on mobile devices, 4 or 5 can work on laptops or widescreen pc's. Anything larger than 5 is probably overkill.

If you want to change the settings, just change the values in that file. Do so at your own peril.

## Images and Thumbnails

As mentioned before, since each car has a unique code called **slug**, the app uses that attribute as means to determine the image of the car.

First of all, The images are stored in the **`/src/assets/cars`** folder. For each car, two images are available: the image itself and a thumbnail. Each image filename contains the slug of the matching car, save for some charaters at the end of the file name. These are **`c`**, which represents the image in high quality, and **`th`**,which is the thimbnail.

For example, the futuristic slick-looking 2015 Mercedes-Benz IAA car, has the appropriate slug **`2015_mercedes-benz_iaa`**, so the images associated to that car are:

- `2015_mercedes-benz_iaa.c.jpg` (**Full size image**)
- `2015_mercedes-benz_iaa.th.jpg` (**Thumbnail image**)

In a real setting, images would either be stored in a database and accesed through the same car slug, or would be stored in specific folders in the server's filesystem, again, using the slug as a reference to the file or part of the filename. It is ideal that the images are stored in full size in every occation, but that it would be resampled or resize for use as a single thumbnail or multiple thumbnails depending on the requirements. It is also good practice to save or cache those thumbnails, as to not resample them every time. These compound of practices are done usually to increase application performance as well as save bandwith, as images are usually many kilobytes (if not megabytes) in size, and may stress the client application too much if these images are too big (old mobile phones usually have a hard time processing large images).

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
