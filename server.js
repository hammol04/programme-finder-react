require('babel-register')({
	presets: ['react']
});

var express = require('express');
var app = express();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Index = require('./src/jsx/pages/Index.jsx');

app.use(express.static('web'));

app.get('/', function(req, res) {
	var html = ReactDOMServer.renderToString(
		React.createElement(Index)
	);
	res.send(html);
});

var PORT = 3000;
app.listen(PORT, function() {
	console.log('server running');
});
