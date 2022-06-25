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

app.listen(33455, () => {console.log("Server started at 33455")});
