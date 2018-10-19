var express = require('express');
var path = require('path');
var serverStatic = require('serve-static');

app = express();
app.use(serverStatic(__dirname));
var port = process.env.PORT || 5000;
app.listen(port);

console.log('server started ' + port);