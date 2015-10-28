var React = require('react');

module.exports = React.createClass({
	render: function() {
		return <div className='splash'>
			<div className='description'>
				<h1>- Hello</h1>
				<p>I'm <span className='emphasis'>Joshua Cox</span> a 
				<span className='emphasis'> front-end</span> & <span className='emphasis'>mobile developer </span>
				with years of experience in <span className='emphasis'>application development</span>.
				I graduated from UCLA and am currently working towards a career as a front-end developer.
				</p>
			</div>
		</div>
	}
});
