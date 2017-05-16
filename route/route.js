var db = require("../models/db.js");
module.exports = {
	showIndex: function(req, res, next) {
		res.render("index");
		next();
	},
	addstudent: function(req, res, next) {
		var name = req.query.name;
		var myclass = req.query.myclass;
		var address = req.query.address;
		db.insertOne("students", {name: name, myclass: myclass, address: address}, function(err, result) {
			if(err) {
				res.send("-1");
			}
			res.send("1");
		})
	},
	allstudent: function(req, res, next) {
		db.find("students", {}, {}, function(err, result) {
			if(err) {
				console.log(err);
			}
			res.send(result);
		})
	}
}