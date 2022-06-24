var express = require("express");
var http = require("http");

var app = express();
http.createServer(app);

app.get("/", (req, res) => {
    res.send("Jilo Node JS project");
})

app.get("/end", (req, res) => {
    res.send("Ended ....");
})

app.listen(3030, () => {console.log("Server started at 3030")});