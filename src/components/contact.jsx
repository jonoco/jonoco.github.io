var React = require('react');
var Links = require('./links');

module.exports = React.createClass({
	render: function() {
		return <div className='contact'>
			<h2>Contact me</h2>
			<p>joshua.n.cox@gmail.com</p>
			<Links />
		</div>
	}
});