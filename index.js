const express = require('express');
const http = require('http');
const path = require('path');

var app = express();
var server = http.Server(app);
var PORT = process.env.PORT || 3000;

const publicPath = path.join(__dirname,'/public');
app.use(express.static(publicPath));

server.listen(PORT,()=>{console.log('SERVER IS UP ON PORT 3000');});