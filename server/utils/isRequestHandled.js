const path = require('path');

function isRequestHandled(req) {
	const { url } = req;
	const extname = String(path.extname(url)).toLowerCase();

	return  (extname === '' || extname === '.js' || extname === '.html');
}

module.exports = isRequestHandled;