const express = require('express');
const request = require('request');
const bodyParser = require("body-parser");


const app = express();
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/"));


app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/home", function(req, res){
    res.sendFile(__dirname + "/home.html");
});


app.listen(3000, function(){
    console.log("Server running on port 3000");
})

