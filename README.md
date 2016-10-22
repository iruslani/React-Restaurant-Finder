## Restaurant Finder app

This demo app helps you find local restaurants. It uses your browser GeoLocation to find your location and serve you a restaurant list. The default search query is pizza and if GeoLocation is disabled, it will use the zip code 95014 as the default.

You can search cuisine and sort the restaurant list results by distance and ratings ( default sort order ).
This app uses the Yahoo YQL API for restaurant data and Google Maps API to find your zip code according to Lat and Long obtained from Geo Location.

## Install the app:

### `npm install`

## Run the app locally:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Run build for production:

### `npm build`

This will create a build folder ready for production.

To test production build locally just go to the build folder and run :

`python -m SimpleHTTPServer 8000`

## Developer Information:

### Author : Iwan Ruslani
This app uses the following:

- React for the UI
- whatwg-fetch for API requests.
- Twitter bootstrap for a little bit of CSS styling.
