
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
	res.send("Request sent!");
	deleteCustomer(cust_id, function (index) {
		var stop = new Date().getTime();
		while (new Date().getTime() < stop + 3000) {}
		customers[index] = null;
		res.send("Deleted!");
	})
}

function deleteCustomer(index, callback) {
	callback(index);
}