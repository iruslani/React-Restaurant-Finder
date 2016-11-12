// const express = require('express');
// const app = express();
// const path = require('path');
//
// app.set('port', (process.env.PORT || 5000));
//
// app.use('/', express.static(path.join(__dirname, 'public')));
//
// app.listen(app.get('port'), function() {
//   console.log('Node app is running on port', app.get('port'));
// });



const path = require('path')
const express = require('express')

module.exports = {
  app: function () {
    const app = express()
    const indexPath = path.join(__dirname, 'index.html')
    const publicPath = express.static(path.join(__dirname, 'public'))

    app.use('/public', publicPath)
    app.get('/', function (_, res) { res.sendFile(indexPath) })

    return app
  }
}
