## Restaurant Finder app

This demo app helps you find local restaurants. It uses your browser GeoLocation to find your location and serve you a restaurant list. The default search query is pizza and if GeoLocation is disabled, it will use the zip code 95014 as the default.

You can search cuisine and sort the restaurant list results by distance and ratings ( default sort order ).
This app uses the Yahoo YQL API for restaurant data and Google Maps API to find your zip code according to Lat and Long obtained from Geo Location.

* [Demo Here](https://letseatapp.herokuapp.com)


## Install the app:
`npm install`

## Run the app locally with Heroku (on Development server):
### (You may need to run npm build)
`heroku local web`

## Run the app locally (on Development server):
`npm run start`
Then point browser to : http://localhost:8080/

## Run build for production:
`npm run build`

## App testing (not yet working):
`npm test`

## Developer Information:

### Author : Iwan Ruslani
This app currently uses the following:

- React for the UI
- whatwg-fetch for API requests.
- Twitter bootstrap for a little bit of CSS styling.


### Example Foursquare request:

With Near params:
https://api.foursquare.com/v2/venues/explore/?near=daly city&venuePhotos=1&client_id=E3YQN5PP3UJR4CYKYFWBOPCFTYIJVEEYWBPGBEK5DOZ5UZJQ&client_secret=TBCUJQ5Q5Q2XBMDQ40K4LLZFIKSUFLRUCYP4M1PFTXMS5JM4&v=20131124&query=sushi

With ll params:
https://api.foursquare.com/v2/venues/explore/?venuePhotos=1&client_id=E3YQN5PP3UJR4CYKYFWBOPCFTYIJVEEYWBPGBEK5DOZ5UZJQ&client_secret=TBCUJQ5Q5Q2XBMDQ40K4LLZFIKSUFLRUCYP4M1PFTXMS5JM4&v=20131124&query=sushi&ll=37.6536938,-122.46565609999999

image:

https://irs1.4sqi.net/img/general/300x500/51685216_gAf9hcl55MbEQfLglel0kgSh0MZmN6yw756s3pdZtvQ.jpg

prefix + 300x500 + suffix

https://irs2.4sqi.net/img/general/300x500/153924980_GhqskPty2IJw_buW6qys--VGdgVLGc20bBApvuqFdrM.jpg
