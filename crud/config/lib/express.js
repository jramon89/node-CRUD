var express = require('express'),
	path = require('path'),
	exphbs = require('express-handlebars'),
	bodyParser = require('body-parser'),
	app = express(),
	config = require('../config');

function init(){

	app.engine('handlebars', exphbs({defaultLayout:'layout'}));
	app.set('view engine', 'handlebars');
	
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));

	config.server.users(app)
	app.listen(7000);
}

module.exports = {
	init: init
};



