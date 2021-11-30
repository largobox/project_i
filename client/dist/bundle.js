/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./client/src/index.js":
/*!*****************************!*\
  !*** ./client/src/index.js ***!
  \*****************************/
/***/ (() => {

eval("const socketArr = [];\nconst maxDelayMilliseconds = 500;\nconst maxSocketsCount = 300;\nlet socketCounter = 0;\nlet direction = 'increase'; // 'decrease' or 'increase'\n\nfunction decreaseConnection() {\n\tconst lastSocket = socketArr.pop();\n\n\tlastSocket.disconnect();\t\n}\n\nfunction increaseConnection() {\n\tconst socket = io();\n\n\tsocket.on('connect', () => {\n\t\tthrow new Error('Maow error!');\n\t\tconsole.log(`Connected socket: ${socketCounter}`);\n\t});\n\n\tsocketArr.push(socket);\n}\n\nfunction recursiveSetTimeout(delay) {\n\tsetTimeout(() => {\n\t\tconst nextDelay = Math.floor(Math.random() * maxDelayMilliseconds) + 100;\n\n\t\trecursiveSetTimeout(nextDelay);\n\t\t\n\t\tif (socketArr.length === 0) {\n\t\t\tdirection = 'increase'\n\t\t}\n\t\t\n\t\tif (socketArr.length >= maxSocketsCount) {\n\t\t\tdirection = 'decrease'\n\t\t}\n\n\t\tif (direction === 'increase') {\n\t\t\tsocketCounter++;\n\n\t\t\tincreaseConnection();\n\t\t}\n\n\t\tif (direction === 'decrease') {\n\t\t\tsocketCounter--;\n\n\t\t\tdecreaseConnection();\n\t\t}\n\n\t\tconsole.log('socketArr length', socketArr.length)\n\t}, delay);\n}\n\nrecursiveSetTimeout(maxDelayMilliseconds);\n\n// function runSimpleSocket(socketNumber) {\n// \tconst socket = io();\n\n// \tsocket.on('connect', () => {\n// \t\tsocket.emit('clientTrigger', 'MAOW');\n// \t});\n// }\n\n// runSimpleSocket(1);\n// runSimpleSocket(2);\n\n// function startTest(iterationCount) {\n// \tlet counter = 0;\n\n// \tsetInterval(() => {\n// \t\tcounter++;\n\n// \t\tif (counter >= iterationCount) {\n// \t\t\tconsole.log('Connections established')\n// \t\t\treturn\n// \t\t}\n\n// \t\tconst socket = io();\n\n// \t\tsocket.on('connect', () => {\n// \t\t\tconsole.log(socket.id);\n// \t\t});\n\n// \t\tsocket.on('chat message', (msg) => {\n// \t\t\tconsole.log('Message: ' + msg);\n// \t\t});\n// \t}, 1000);\n// }\n\n// startTest(400);\n\n//# sourceURL=webpack://project_i/./client/src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./client/src/index.js"]();
/******/ 	
/******/ })()
;