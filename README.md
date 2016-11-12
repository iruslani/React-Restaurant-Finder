## Restaurant Finder app

This demo app helps you find local restaurants. It uses your browser GeoLocation to find your location and serve you a restaurant list. The default search query is pizza and if GeoLocation is disabled, it will use the zip code 95014 as the default.

You can search cuisine and sort the restaurant list results by distance and ratings ( default sort order ).
This app uses the Yahoo YQL API for restaurant data and Google Maps API to find your zip code according to Lat and Long obtained from Geo Location.

## Install the app:
`npm install`

## Run the app locally with Heroku (on Development server):
### (You may need to run npm build)
`heroku local web`

## Run the app locally (on Development server):
`npm start`
Then point browser to : http://localhost:8080/

## Run build for production:
`npm build`

## App testing (not yet working):
`npm test`

## Developer Information:

### Author : Iwan Ruslani
This app currently uses the following:

- React for the UI
- whatwg-fetch for API requests.
- Twitter bootstrap for a little bit of CSS styling.
