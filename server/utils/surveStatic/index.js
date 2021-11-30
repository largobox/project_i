const fs = require('fs');
const path = require('path');

function surveStatic (request, response) {
	const { url } = request;
	let filePath;

	if (url === '/') {
		filePath = path.join(__dirname, './index.html');
	} else {
		filePath = path.join(__dirname, `./${url}`);
	}

	if (url === '/bundle.js') {
		// ToDo. Need cleaner path
		filePath = path.join(__dirname, '..', '..', '..', 'client/dist', url);
	}

	const extname = String(path.extname(filePath)).toLowerCase();
	let contentType = 'text/html';
	const mimeTypes = {
		'.html': 'text/html',
		'.js': 'text/javascript',
		// '.css': 'text/css',
		// '.json': 'application/json',
		// '.png': 'image/png',
		// '.jpg': 'image/jpg',
		// '.svg': 'application/image/svg+xml'
	};

	contentType = mimeTypes[extname] || 'application/octet-stream';

	fs.readFile(filePath, function(error, content) {
		if (error) {
			if(error.code == 'ENOENT') {
				response.writeHead(404);
				response.end();
			} else {
				response.writeHead(500);
				response.end('Server error: ' + error.code + ' ..\n');
			}
		} else {
			response.writeHead(200, { 'Content-Type': contentType });
			response.end(content, 'utf-8');
		}
	});
}

module.exports = surveStatic;