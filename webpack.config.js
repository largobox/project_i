const path = require('path');

module.exports = {
    mode: 'development',
    entry: './client/src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'client/dist'),
    },
};