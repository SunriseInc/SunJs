module.exports = function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('SunJs: Hello World\n');
}