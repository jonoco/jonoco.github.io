var React = require('react');
var Portfolio = require('./portfolio');
var Splash = require('./splash');
var Contact = require('./contact');
var Footer = require('./footer');
var Logo = require('./logo');

module.exports = React.createClass({
	render: function() {
		return <div className='main'>
			<Logo />
			{this.content()}
			<Footer />
		</div>
	},
	content: function() {
		if (this.props.children) {
			return this.props.children
		} else {
			return this.renderMain()
		}
	},
	renderMain: function() {
		return <div>
			<Splash />
		</div>
	}
});