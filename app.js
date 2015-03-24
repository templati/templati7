// Module dependencies
var express = require('express');

// Express settings
var app = express();
app.use(express.static(__dirname + '/public'));

// Template settings
app.set('view engine', 'jade');
app.set('views', './views');

// Routes
app.get('/', function (req,res,next){
	res.render('partials/landing');
});

// Start the server
app.listen(3000);
console.log('Running on 3000');
