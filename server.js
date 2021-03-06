var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = process.env.PORT ||3000;



// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//****Brings in the routes.js files****///
require('./App/Routing/htmlRoutes.js')(app);
require('./App/Routing/apiRoutes.js')(app);


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

