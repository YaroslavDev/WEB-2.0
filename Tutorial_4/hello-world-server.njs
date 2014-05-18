var http = require('http');
http.createServer(function handler(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain',
						'Access-Control-Allow-Origin' : '*',
						'Access-Control-Allow-Methods:' : 'POST, GET, PUT, DELETE, OPTIONS',
						'Access-Control-Allow-Headers' : 'Content-Type',
						'Access-Control-Max-Age' : '3600'});
    if (req.method == 'OPTIONS') {
    	console.log("OPTIONS received!");
    }
    if (req.method == 'GET') {
    	console.log("GET received!");
    }
    if (req.method == 'PUT') {
    	console.log("PUT received!");
    }
    if (req.method == 'POST') {
    	console.log("POST received!");
    }
    if (req.method == 'DELETE') {
    	console.log("DELETE received!");
    }
    res.end('Hello World\n');
}).listen(8080, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8080/');
