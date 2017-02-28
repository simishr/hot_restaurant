var bodyParser = require("body-parser");
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

// pase application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}))

// parse application/json
app.use(bodyParser.json())

require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app); //includes the html-routes in the server file and the app uses express..

app.listen(PORT, function () {
	console.log("App listening on PORT: " + PORT); //to know when ever the server is listening
});