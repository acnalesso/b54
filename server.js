var express = require('express'),
    app = express(),
    server;

app.set('port', process.env.VCAP_APP_PORT || 3000);

app.use( express.static(__dirname + '/app') );

server = app.listen(app.get('port'), function() {
  console.log('Listening on: '+ app.get('port'));
});

