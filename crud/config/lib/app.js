var express = require('./express');

function start(){
	express.init();
}

module.exports = {
	start: start
};