var React = require('react');

module.exports = React.createClass({
	render: function() {
		return <div className='links'>
			<a className='link github'
			href='https://github.com/jonoco'>
				<img src='./assets/github.png' />
			</a>
			<div className='link linkedin'>
				<a href='https://www.linkedin.com/in/jncox'><span className='linkedin-text'>in</span></a>
			</div>
			<div className='link codepen'>
				<a href='http://codepen.io/jonoco/'><img src='./assets/codepen-ras.png' /></a>
			</div>
		</div>
	}

});