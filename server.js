const path = require('path')
const express = require('express')
const querystring = require('querystring')
const fetch = require('isomorphic-fetch');

module.exports = {
  app: function () {
    const app = express()
    const indexPath = path.join(__dirname, 'index.html')
    const publicPath = express.static(path.join(__dirname, 'public'))

    app.use('/public', publicPath)
    app.get('/', function (_, res) { res.sendFile(indexPath) })
    app.get('/api/foursquare', function (req, res) {
      // let test = req.query
      // Object.assigned used to merge default parameters with query request.
      var qparams = Object.assign({
        client_id : 'E3YQN5PP3UJR4CYKYFWBOPCFTYIJVEEYWBPGBEK5DOZ5UZJQ',
        client_secret : 'TBCUJQ5Q5Q2XBMDQ40K4LLZFIKSUFLRUCYP4M1PFTXMS5JM4',
        v : '20131124',
        venuePhotos : 1
      }, req.query)
      // res.send(querystring.stringify(qparams))
      fetch(
        'https://api.foursquare.com/v2/venues/explore/?' + querystring.stringify(qparams)
        // ,
        // {
        //   headers: {
        //     'Authorization': 'Bearer tKeiIGfocQbuxjbVBtt_cXsACMe-KVitWRo6n0s1DUIJdsa-lf227h3TEHHUD4QgRxwoQexg8Xz05ijqKMXPrz1to_3sLr7FpzZ-bCevKEvCWE4UKe0dsUdEqiYoWHYx'
        //   }
        // }
      )
      .then(function(response) {
          if (response.status >= 400) {
              throw new Error("Bad response from server");
          }
          return response.json();
      })
      .then(function(data) {
          res.send(data)
      });

    })
    return app
  }
}
