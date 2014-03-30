/**
 * New node file
 */

var crypto = require("crypto");

var customers = [
                 	{
                 		id : 1,
                 		name : "aaa",
                 		orders : []
                 	},
                 	{
                        id : 2,
                        name: "bbb",
                        orders : []
                    }
                 ];

function computeWeakETag(customers) {
	var content = "";
	for (var i = 0; i < customers.length; i++) {
		content += customers[i].id + customers[i].name;
	}
	return crypto.createHash('md5').update(content).digest("hex");
}

function computeStrongETag(customers) {
	var content = "";
	for (var i = 0; i < customers.length; i++) {
			var orders_content = "";
			for (var j = 0; j < customers[i].orders; j++) {
				orders_content += customers[i].orders[j];
			}
			content += customers[i].id + customers[i].name + orders_content;
	}
	return crypto.createHash('md5').update(content).digest("hex");
}

var lastModified = new Date();
var weakETag = computeWeakETag(customers);

exports.getCustomer = function(req, res){
	var ETag = req.header('If-None-Match');
	if (ETag) {
		res.setHeader('ETag', weakETag);
		if (weakETag == ETag) {
			res.send(304, "");
		} else {
			res.send(200, customers);
		}
	} else {
		var ifModifiedSince = req.header('If-Modified-Since');
		if (ifModifiedSince) {
			var ifModifiedSinceDate = new Date(ifModifiedSince);
			res.setHeader('Last-Modified', lastModified);
			if (lastModified <= ifModifiedSinceDate) {
				res.send(304, "");
			} else {
				res.send(200, customers);
			}
		} else {
			res.send(200, customers);
		}
	}
};

exports.putCustomer = function(req, res) {
	var index = req.params.id;
	customers[index].id = req.body.id;
	customers[index].name = req.body.name;
	lastModified = new Date();
	weakETag = computeWeakETag(customers);
	console.log(customers);
	res.send(200, "Updated");
}