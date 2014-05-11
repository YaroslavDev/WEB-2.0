var http = require('http');
var sys = require('sys');
var fs = require('fs');

var streamFile = []

http.createServer(function(req, res) {
  streamFile = fs.readFileSync('sin_day_real.data').toString().split('\n');

  if (req.headers.accept && req.headers.accept == 'text/event-stream') {
    if (req.url == '/events') {
      sendSSE(req, res);
    } else {
      res.writeHead(404);
      res.end();
    }
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(fs.readFileSync(__dirname + '/sse-node.html'));
    res.end();
  }
}).listen(8000);

function sendSSE(req, res, head) {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });

  var id = (new Date()).toLocaleTimeString();
  streamFileHead = 0;

  // Sends a SSE every 2 seconds on a single connection.
  setInterval(function() {
    if (streamFileHead < streamFile.length) {
    	res.write('id: ' + id + '\n');
  		res.write("data: " + streamFile[streamFileHead] + '\n\n');
  		streamFileHead++;
    }
  }, 2000);

}
