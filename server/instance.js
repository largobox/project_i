const http = require('http');
const path = require('path');
const fs = require('fs');
const surveStatic = require('./utils/surveStatic');

const server = http.createServer();

server.on('request', (req, res) => {
	const { url } = req;
	const extname = String(path.extname(url)).toLowerCase();
	const isStaticFilesRequest = '.js' || '.html' === extname;

	if (isStaticFilesRequest) {
		surveStatic(req, res);
		return;
	}

	res.end('Unhandled request');
});

server.listen(3000, () => {
	console.log('I`m listen 3000 port')
});