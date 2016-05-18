var express = require('express');
var app = express();
var middleware = require('./config/middleware.js');
var routes = require('./config/routes.js');

middleware(app, express);
routes(app, express);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
