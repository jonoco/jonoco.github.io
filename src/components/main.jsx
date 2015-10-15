var React = require('react');
var Portfolio = require('./portfolio');
var Splash = require('./splash');
var Contact = require('./contact');
var Footer = require('./footer');

module.exports = React.createClass({
	render: function() {
		return <div>
			{this.content()}
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
		return ( <div>
				<Splash />
				<Portfolio />
				<Contact />
				<Footer />
			</div>
		);
	}
});