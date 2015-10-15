var React = require('react');
var Arrow = require('./arrow');
var Links = require('./links');

module.exports = React.createClass({
	render: function() {
		return <div className='splash'>
			<h1>Joshua Cox</h1>
			<div className="bar"></div>
			<p>Front-end <span className='highlight'>&</span> mobile developer</p>
			<Links />
			<Arrow />
		</div>
	}
});