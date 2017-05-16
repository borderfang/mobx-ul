var MongoClient = require("mongodb").MongoClient;
var setting = require("../setting.js");

function _connectDB(callback) {
	var url = setting.dburl;
	MongoClient.connect(url, function(err, db) {
		if(err) {
			callback(err, null);
			return;
		}else{
			callback(err, db);
		}
	});
}

module.exports = {
	//添加数据；
	insertOne: function(collectionName, json, callback) {
		_connectDB( function(err, db) {
			if(err) {
				callback(err, null);
			}
			db.collection(collectionName).insertOne(json, function(err, result) {
				callback(err, result);
				db.close();
			})
		})
	},
	//查找数据、分页；
	find: function(collectionName, json, C, D) {
		var result = [];
		if (arguments.length == 3){
			var callback = C;
			var skipnumbers = 0;
			var limit = 0;
			return;
		}else if (arguments.length == 4){
			var callback = D;
			var args = C;
			var skipnumbers = args.pageamount*args.page || 0;
			var limit = args.pageamount || 0;
			var sort = args.sort || {};
		}else{
			throw new Error("find的参数必须是3个或者4个");
			return;
		}
		_connectDB( function(err, db) {
			if (err){
				callback(err, null);
			}
			var cursor = db.collection(collectionName).find(json).skip(skipnumbers).limit(limit).sort(sort);
			cursor.each(function (err, doc){
				if (err){
					callback(err, null);
				}
				if (doc != null){
					result.push(doc);
				}else{
					callback(null, result);
					db.close();
				}
			})
		})
	}
}