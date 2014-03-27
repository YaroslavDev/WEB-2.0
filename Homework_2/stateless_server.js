var net = require('net');

var orders = []
var next_order_id = 0

var server = net.createServer(function(c) {
    console.log('Connection established!');
    c.setEncoding('utf8');
    c.on('end', function() {
        console.log('Connection closed!');
    });
    c.on('data', function(data) {
    	data = data.toString('utf-8').trim();
        response = process_request(data);
        console.log('Received request: ' + data);
        c.write('Answer: ' + response + '\n');
        });
});

server.listen(8124, function() {
    console.log('server started');
});

function process_request(req) {
    var request = req.split(' ');
    if (request[0] == 'open') {
        return open_order();
    }
    if (request[0] == 'add') {
        return add_item(parseInt(request[1]), request[2]);
    }
    if (request[0] == 'process') {
        return process_order(parseInt(request[1]));
    }
}

function open_order() {
    console.log('next_order_id = ' + next_order_id);
    orders[next_order_id] = [];
    return next_order_id++;
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
