var express = require('express'),
  path = require('path'),
  favicon = require('serve-favicon'),

  logger = require('morgan'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'),
  routes = require('./server/routes'),
  app = express(),
  session = require('express-session'),
  models = require('./server/models');

// the models variable must be somehow singleton-esque
// http://bit.ly/1S9cnn5
app.set('models', models);

// load env variables from .env file in development environment
// view engine setup
app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, './public')));

// app.use(session({
//   secret: config.expressSessionKey,
//   // store: sessionStore, // connect-mongo session store
//   proxy: true,
//   resave: true,
//   saveUninitialized: true
// }));

// routes(app, config);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

var server = app.listen(3000, function() {
  console.log('Express server listening on %d, in %s' +
    ' mode');
});

process.on('SIGINT', function() {
  console.log("Exiting...");
  process.exit();
});

module.exports = app;
