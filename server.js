const express = require('express');
const app = express();
const path = require('path');

app.set('port', (process.env.PORT || 5000));

app.use('/', express.static(path.join(__dirname, 'build')));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
