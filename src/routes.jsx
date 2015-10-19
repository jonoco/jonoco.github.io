var React = require('react');
var	ReactRouter = require('react-router');
var	HashHistory = require('react-router/lib/hashhistory'); // keeps track of url history
var	Router = ReactRouter.Router; // decides what content to show
var	Route = ReactRouter.Route;   // object with route info for router
var	Main = require('./components/main');
var Blog = require('./components/blog');
var Project = require('./components/project');

module.exports = (
	<Router history={new HashHistory}>
		<Route path='/' component={Main}>
			<Route path='project/:id' component={Project} />
			<Route path='blog' component={Blog} />
		</Route>
	</Router>
);