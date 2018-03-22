// modules laden (express als framework)
var express = require('express');
var app = express();

// view engine setup > templates weergeven
app.set('views', 'views');
app.set('view engine', 'ejs');

//de routes defineren (zelfde structuur als mappen)
var indexRouter = require('./routes/index');
var detailRouter = require('./routes/detail');

// connect routers to routes, weblinkjes
app.use('/', indexRouter);
app.use('/', detailRouter);


// Tell express which static files to serve
app.use(express.static('public'));

//run
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
