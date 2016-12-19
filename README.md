# Products

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.22-1.

## installation
`git clone https://github.com/kiokotzu/products.git`

`cd products`

In MAC or LINUX
`sudo npm install`

In WINDOWS
`npm install`

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Compile SASS
Sass is configured with gulp, consider it appropriate for the reason that angular cli places the css left and in ocaciones by seconds the page is left without styles and apart all the images placed by background make them base64.

So I decided to configure sass with gulp

In new console
`gulp`

Or if you want to compile at the same time ng serves and gulp can do so

`npm start` -- compile `ng serve & gulp`


## Change url JSON

You can change the json url in the `app.settings.ts` file

`src/app/app.settings.ts`


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

