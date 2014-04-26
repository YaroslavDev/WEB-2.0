
/*
 * GET users listing.
 */

var users = ['John', 'Nick', 'Jack', 'Peter', 'William', 'Tom'];

exports.list = function(req, res){
	var page = req.query.page;
	var size = req.query.size;
	var length = users.length;
	var total_pages = Math.ceil(length / size);
	if (page > total_pages || page < 1) {
		res.send("Wrong page", 404);
	}
	console.log("Page=" + page);
	console.log("Size=" + size);
	console.log("Total_users=" + length);
	console.log("Total_pages=" + total_pages);
	output = [];
	for (var i = (page - 1) * size; i < page * size && i < length; i++) {
		output.push(users[i]);
	}
	if (page < total_pages) {
		var next_page = parseInt(page) + 1;
		res.links({
			next: 'localhost:3000/users?page=' + next_page + "&size=" + size,
			last: 'localhost:3000/users?page=' + total_pages + "&size=" + size
		});
	} else {
		res.links({
			last: 'localhost:3000/users?page=' + total_pages + "&size=" + size
		});
	}
	res.send(output, 200);
};