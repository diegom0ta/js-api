var fs = require('fs');

module.exports = function (app) {
	app.get('/listUsers', function (req, res) {
		fs.readFile(
			__dirname + '/' + '../users.json',
			'utf8',
			function (err, data) {
				console.log(data);
				res.end(data);
			}
		);
	});

	app.post('/addUser', function (req, res) {
		fs.readFile(
			__dirname + '/' + '../users.json',
			'utf8',
			function (err, data) {
				data = JSON.parse(data);
				data['user4'] = user['user4'];
				console.log(data);
				res.end(JSON.stringify(data));
			}
		);
	});

	app.get('/:id', function (req, res) {
		fs.readFile(
			__dirname + '/' + '../users.json',
			'utf8',
			function (err, data) {
				var users = JSON.parse(data);
				var user = users['user' + req.params.id];
				console.log(user);
				res.end(JSON.stringify(user));
			}
		);
	});

	app.delete('/deleteUser/:id', function (req, res) {
		fs.readFile(__dirname + '/' + 'users.json', 'utf8', function (err, data) {
			data = JSON.parse(data);
			delete data['user' + req.params.id];

			console.log(data);
			res.end(JSON.stringify(data));
		});
	});
};
