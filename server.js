const http = require("http");
const url = require("url");
const fs = require("fs");
const express = require('express');
const app = express();

app.use(express.static("public"));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// app.get("/", function(req, res, next) {
//   res.sendFile("./index.html");
// });

app.listen(3000, () => console.log("Example app listening on port 3000!"));