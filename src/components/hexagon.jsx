var React = require('react');
var Svg = require('./svg');

module.exports = React.createClass({
	render: function() {
		return <div className='hexagon'>
			<figure><Svg size='1rem' icon='post-github' /></figure>
		</div>
	}
});