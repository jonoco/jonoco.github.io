var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
	render: function() {
		return <div className='logo'>
			<Link to='/'>
				<p>Jo<span className='hidden'>shua</span></p>
				<p>No<span className='hidden'>koi</span></p>
				<p>Co<span className='hidden'>x</span></p>
			</Link>
		</div>
	}
});
