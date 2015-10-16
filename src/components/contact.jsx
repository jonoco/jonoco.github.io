var React = require('react');
var Links = require('./links');
var Bar = require('./bar');

module.exports = React.createClass({
	render: function() {
		return <div className='contact'>
			<h2>Contact me</h2>
			<Bar />
			<a href="mailto:joshua.n.cox@gmail.com">joshua.n.cox@gmail.com</a>
			<Links />
		</div>
	}
});