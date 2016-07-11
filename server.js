require('babel-register')({
	presets: ['react']
});

var express = require('express');
var path = require('path');
var app = express();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Index = require('./src/jsx/pages/Index.jsx');

module.exports = {
	app: function() {
		app.use(express.static(path.join(__dirname, '/web')));

		app.get('/', function(req, res) {
			var html = ReactDOMServer.renderToString(
				React.createElement(Index)
			);
			res.send(html);
		});

		return app;
	}
};
