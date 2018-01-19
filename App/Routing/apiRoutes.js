var path = require("path");

module.exports = function(app){
	app.get("/api/power", function(req, res) {
  res.sendFile(path.join(__dirname, "/../Data/friends.js"));
});

}