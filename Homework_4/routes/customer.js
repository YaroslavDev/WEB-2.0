
/*
 * GET users listing.
 */

var customers = [
		 { id : "0", name : "Josef" },
		 { id : "1", name : "Jan" },
		 { id : "2", name : "Jiri" },
		 { id : "3", name : "Tomas" },
		 { id : "4", name : "Milan" },
		 { id : "5", name : "Pavel" },
];

var monitor = [];
var request_id = 0;

exports.getMonitor = function(req, res) {
	var req_id = req.params.id;
	if (monitor[req_id] == null) {
		res.send(404, "Not found!");
	}
	res.send(monitor[req_id]);
}

exports.getCustomer = function(req, res) {
	var cust_id = req.params.id;
	var customer = customers[cust_id];
	if (customer == null) {
		res.send(404, "Not found!");
	}
	res.send(customers[cust_id]);
};

exports.delCustomer = function(req, res) {
	var cust_id = req.params.id;
	var customer = customers[cust_id];
	if (customer == null) {
		res.send(404, "Not found!");
	}
	var this_request_id = request_id++;
	monitor[this_request_id] = "Processing...";
	res.send(202, "Request sent! Your request id = " + this_request_id);
	setTimeout(function() {
  	  	customers[cust_id] = null;
  	  	monitor[this_request_id] = "Done!";
	}, 10000);
}