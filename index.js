const http = require('http');
const sunjs = require('./sunjs');

http.createServer(sunjs).listen(80);

console.log('Server running at http://127.0.0.1:80/');

