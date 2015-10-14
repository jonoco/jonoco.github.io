var React = require('react');
var Arrow = require('./arrow');

module.exports = React.createClass({
	render: function() {
		return <div className='splash'>
			<h1>Joshua Cox</h1>
			<div className="bar"></div>
			<p>Front-end <span className='highlight'>&</span> mobile developer</p>
			<div className='links'>
				<div className='link github'>
					<a href='https://github.com/jonoco'><img src='https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png' /></a>
				</div>
				<div className='link linkedin'>
					<a href='https://www.linkedin.com/in/jncox'><span className='linkedin-text'>in</span></a>
				</div>
				<div className='link codepen'>
					<a href='http://codepen.io/jonoco/'><img src='http://www.van-vlymen.com/img/codepen.png' /></a>
				</div>
			</div>
			<Arrow />
		</div>
	}
});