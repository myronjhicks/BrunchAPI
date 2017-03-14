var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var obj = require("./featured.json");

mongoose.connect('mongodb://heroku_lz766k77:ekdru3r5pcaei83512lu96aetm@ds131340.mlab.com:31340/heroku_lz766k77');

var Category = require('./app/models/category');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

app.listen(port);

console.log('Magic happens on port ' + port);



var router = express.Router();

router.use(function(req,res,next){
	console.log("Something is happening");
	next();
});

router.get("/", function(req,res){
	res.json(obj);
});

app.use('/api', router);




