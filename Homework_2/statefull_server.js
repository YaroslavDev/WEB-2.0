var net = require('net');

var orders = []
var next_order_id = 0

var server = net.createServer(function(c) {
    console.log('Connection established!');
    var session_id = next_order_id++;
    c.setEncoding('utf-8');
    c.on('end', function() {
        console.log('Connection closed!');
    });
    c.on('data', function(data) {
    	data = data.toString('utf-8').trim();
        response = process_request(session_id, data);
        console.log('Received request: ' + data);
        c.write('Answer: ' + response + '\n');
        });
});

server.listen(8124, function() {
    console.log('server started');
});

function process_request(session_id, req) {
    var request = req.split(' ');
    if (request[0] == "open") {
        return open_order(session_id);
    }
    if (request[0] == "add") {
        return add_item(session_id, request[1]);
    }
    if (request[0] == "process") {
        return process_order(session_id);
    }
}

function open_order(order_id) {
    console.log('next_order_id = ' + order_id);
    if (!orders[order_id]) {
    	orders[order_id] = [];
    	return 'success';
    } else {
    	return 'failure: order already opened';
    }
}

function add_item(order_id, item) {
    console.log('adding item to order ' + order_id);
    if (!orders[order_id]) {
        console.log('Wrong order index!');
        return 'failure: order not opened';
    }
    orders[order_id].push(item);
    return 'success';
}

function process_order(order_id) {
    console.log('processing order ' + order_id);
    if (!orders[order_id]) {
        console.log('Wrong order index!');
        return 'failure: order not opened';
    }
    output = orders[order_id].join(" ");
    console.log("Output = " + output);
    orders[order_id] = null;
    return output;
}
