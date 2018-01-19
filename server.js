var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = process.env.PORT ||3000;



// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./App/Routing/htmlRoutes.js');
require('./App/Routing/apiRoutes.js');

//***********Just in Case I can't get the Requiring right***/////
// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "./App/Public/home.html"));
// });

// app.get("/survey", function(req, res) {
//   res.sendFile(path.join(__dirname, "./App/Public/survey.html"));
// });




app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});