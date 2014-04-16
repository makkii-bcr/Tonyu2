var express = require('express'), http = require('http');

var app = express();
var server = http.createServer(app);

/*var express = require('express');
var app = express.createServer();*/
var LSFile= require("./LSFile");
var dumpScript= require("./dumpScript");
var bp=require("body-parser");

//app.configure(function () {
app.use(express.static(__dirname+"/../../" ,{maxAge:864000000}));
    //app.use(express.staticCache());
app.use(bp());
//    app.use(express.bodyParser());
//    app.use(express.methodOverride());
//});

app.get('/genShim', dumpScript.genShim );
app.get('/concat', dumpScript.concat );
app.get('/File2LS', LSFile.File2LS);
app.post('/LS2File', LSFile.LS2File);

var http = require('http');
//var server = http.createServer(app);
server.listen(3000);
