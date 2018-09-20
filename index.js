// imports
var express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
let route = require('./registration');

// declartion
var app = express();
app.use(function(req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Tableau-Auth"); 
  // res.header("Access-Control-Request-Headers", "accept, content-type, currentuserid , currentRole");
  
  next();
});

app.use(bodyParser.urlencoded({limit: '50mb',extended: true, parameterLimit:50000}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(express.static('public'));
var uri = "mongodb://rutu:rutu123@cluster0-shard-00-00-tksfd.mongodb.net:27017/Demo?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";
mongoose.connect(uri);
var db = mongoose.connection;

//events
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected");
});

//api
app.all('/*',route);

//server start
app.listen(3000, () => console.log('Example app listening on port 3000!'))