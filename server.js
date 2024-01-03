var express = require('express');
var app = express();

require('./routes/user.js')(app);

var server = app.listen(8081, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('App listening at http://%s:%s', host, port);
});
