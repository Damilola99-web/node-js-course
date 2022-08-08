const http = require('http');
const fs = require('fs');
const path = require('path');
const _ = require('lodash')


const server = http.createServer((req, res) => {
	console.log(req.url, req.method);

    const random = _.random(0, 20)
    console.log(random);

	res.setHeader('content-Type', 'text/html');
	let path = '';
	switch (req.url) {
		case '/':
			path = './frontEnd/index.html';
            res.statusCode = 200
			break;
		case '/login':
			path = './frontEnd/login.html';
            res.statusCode = 200
			break;
		case '/login-us':
            res.statusCode = 301
            res.setHeader('Location', '/login')
			break;
		default:
			path = './frontEnd/404.html';
            res.statusCode = 400
			break;
	}
	fs.readFile(path, (err, data) => {
		if (err) {
			console.log(err);
			res.end();
		}
		else {
			res.end(data);
		}
	});
});

server.listen(3000, 'localhost', () => {
	console.log('listening for request');
});
