var express = require('express');
var app = express();

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
    console.log("There is GET request for the hompage!");
    res.send('Here is the GET method');
})

// This responds a POST request for the homepage
app.post('/', function (req, res) {
    console.log("There is POST request for the hompage is accessed.");
    res.send('Here is the POST Method')
})

// This responds a GET request for the homepage
app.get('/list_user', function (req, res) {
    console.log("Got a GET request for /list_user");
    res.send('This is Page Listing')
})

// This responds a GET request for abcd, abxcd, ab123cd, and so in
app.get('/ab*cd', function (req, res) {
    console.log("Got a GET request for /ac*cd");
    res.send('Pattern Match Page')
})

var server = app.listen(4000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})