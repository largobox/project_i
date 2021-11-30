const socketArr = [];
const maxDelayMilliseconds = 500;
const maxSocketsCount = 300;
let socketCounter = 0;
let direction = 'increase'; // 'decrease' or 'increase'

function decreaseConnection() {
	const lastSocket = socketArr.pop();

	lastSocket.disconnect();	
}

function increaseConnection() {
	const socket = io();

	socket.on('connect', () => {
		throw new Error('Maow error!');
		console.log(`Connected socket: ${socketCounter}`);
	});

	socketArr.push(socket);
}

function recursiveSetTimeout(delay) {
	setTimeout(() => {
		const nextDelay = Math.floor(Math.random() * maxDelayMilliseconds) + 100;

		recursiveSetTimeout(nextDelay);
		
		if (socketArr.length === 0) {
			direction = 'increase'
		}
		
		if (socketArr.length >= maxSocketsCount) {
			direction = 'decrease'
		}

		if (direction === 'increase') {
			socketCounter++;

			increaseConnection();
		}

		if (direction === 'decrease') {
			socketCounter--;

			decreaseConnection();
		}

		console.log('socketArr length', socketArr.length)
	}, delay);
}

recursiveSetTimeout(maxDelayMilliseconds);

// function runSimpleSocket(socketNumber) {
// 	const socket = io();

// 	socket.on('connect', () => {
// 		socket.emit('clientTrigger', 'MAOW');
// 	});
// }

// runSimpleSocket(1);
// runSimpleSocket(2);

// function startTest(iterationCount) {
// 	let counter = 0;

// 	setInterval(() => {
// 		counter++;

// 		if (counter >= iterationCount) {
// 			console.log('Connections established')
// 			return
// 		}

// 		const socket = io();

// 		socket.on('connect', () => {
// 			console.log(socket.id);
// 		});

// 		socket.on('chat message', (msg) => {
// 			console.log('Message: ' + msg);
// 		});
// 	}, 1000);
// }

// startTest(400);