
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

exports.getCustomer = function(req, res) {
	var cust_id = req.params.id;
	var customer = customers[cust_id];
	if (customer == null) {
		res.statusCode = 404;
		res.send("Not found!");
	}
	res.send(customers[cust_id]);
};

exports.delCustomer = function(req, res) {
	var cust_id = req.params.id;
	var customer = customers[cust_id];
	if (customer == null) {
		res.statusCode = 404;
		res.send("Not found!");
	}
	var stop = new Date().getTime();
	while (new Date().getTime() < stop + 3000) {}
	customers[cust_id] = null;
	res.send("Deleted!");
}