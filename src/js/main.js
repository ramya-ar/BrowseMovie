var App = require('./components/App');
var React = require('react');
var ReactDOM = require('react-dom');4
var AppAPI = require('./utils/appAPI.js');

ReactDOM.render(
	<App />,
	document.getElementById('app');
);