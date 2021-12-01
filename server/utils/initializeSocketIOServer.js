const ioServerCreate = require('socket.io');

const bytesToMB = (bytes) => Math.round(bytes / 1000, 2) / 1000;
const memoryLog = [];

function initializeSocketIOServer(httpServer) {
	const io = ioServerCreate(httpServer, {
		serveClient: false
	});

	io.on('connection', (socket) => {
		// console.log('IO CONNECTION', socket.id);
	});

	// io.engine.on('connection_error', (err) => {
	// 	console.log('--------------------------------------------------------');
	// 	// console.log(err.req);      // the request object
	// 	console.log(err.code);     // the error code, for example 1
	// 	console.log(err.message);  // the error message, for example "Session ID unknown"
	// 	// console.log(err.context);  // some additional error context
	// 	console.log('--------------------------------------------------------');
	// });

	let tickNumber = 0

	setInterval(() => {
		tickNumber++
		// console.log(tickNumber, 'Statistic "allSockets": ', io.allSockets());
		console.log(tickNumber, 'Statistic "clientsCount": ', io.engine.clientsCount);

		const usage = process.memoryUsage();

		const row = {
			rss: 		  bytesToMB(usage.rss),
			heapTotal: 	  bytesToMB(usage.heapTotal),
			heapUsed: 	  bytesToMB(usage.heapUsed),
			external: 	  bytesToMB(usage.external)
		}

		memoryLog.push(row);

		console.table(memoryLog);
	}, 5000);
}

module.exports = initializeSocketIOServer;