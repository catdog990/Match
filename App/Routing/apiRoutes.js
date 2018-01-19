var path = require("path");
var friends = require("../Data/friends.js")

module.exports = function(app){

	app.get('/api/power', function(req, res){
		res.json(friends);
	});
  
}


