const http = require('http');
const path = require('path');
const fs = require('fs');

const surveStatic = require('./utils/surveStatic');
const isRequestHandled = require('./utils/isRequestHandled');
const initializeSocketIOServer = require('./utils/initializeSocketIOServer');

const httpServer = http.createServer();

httpServer.on('request', (req, res) => {
	if (isRequestHandled(req)) {
		surveStatic(req, res);
		return;
	}

	res.end('Unhandled request');
});

httpServer.listen(3000, () => {
	console.log('I`m listen 3000 port');

	initializeSocketIOServer(httpServer);
});
