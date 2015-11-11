/**
 * Module dependencies
 */

var express = require('express'),
  routes = require('./routes'),
  http = require('http'),
  path = require('path');

var app = module.exports = express();

var mongojs = require('mongojs');
var db = mongojs('test', ['galary','category']);


/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3002);
app.set('views', __dirname + '/views');
app.engine('html', require('jade').renderFile);
app.set('view engine', 'html');
app.use(express.static(__dirname));


/**
 * Routes
 */

// serve index and view partials
app.get('/home', routes.index);
app.get('/partials/:name', routes.partials);
app.get('/getGalary', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET"); //GET, POST
  db.galary.find(function(err, docs) {
    try {
      res.status(200);
      //console.log(docs);
      console.log("hit database for galary");
      res.send(docs);
    } catch (error) {
      console.log(error);
      res.status(404).end();
    }
    // finally {
    //  db.close();
    // }
  })
});

app.get('/getCategory', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET"); //GET, POST
  db.category.find(function(err, docs) {
    try {
      res.status(200);
      console.log("hit database for category");
      res.send(docs);
    } catch (error) {
      console.log(error);
      res.status(404).end();
    }
  })
});

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);


/**
 * Start Server
 */

http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});