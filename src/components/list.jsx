var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
	render: function() {
		return <div className='list'>
			{this.renderTitle()}
			<ul>
				{this.renderItems()}
			</ul>
		</div>
	},
	renderTitle: function() {
		// Returns a linked title if a link is provided

		if (this.props.link) {
			return <Link className='title' to={this.props.link}>
				{this.props.title}
				<span className='extra'></span>
			</Link>
		} else {
			return <div className='title'>{this.props.title}</div>	
		}
	},
	renderItems: function() {
		// Return a list item formatted to the type provided

		return this.props.items.map(function(item) {

			if (item.link) {

				return <li key={item.title}>
					<Link to={item.link}>
						{item.title}
						<span className='extra'></span>
					</Link>
				</li>

			} else if (item.email) {
				
				return <li key={item.title}>
					<a href={'mailto:' + item.email}>
						{item.title}
						<span className='extra'></span>
					</a>
				</li>

			} else if (item.phone) {

				return <li key={item.title}>
					<a href={'tel:' + item.phone}>
						{item.title}
						<span className='extra'></span>
					</a>
				</li>

			} else if (item.href) {
					return <li key={item.title}>
						<a href={item.href}>
							{item.title}
							<span className='extra'></span>
						</a>
					</li>
			} else if (item.hover) {

				return <li key={item.title} className='hover'>
					{item.title}
					<span className='caret'></span>
					<div className='tooltip'>
						{this.renderTooltips(item.hover)}
					</div>
				</li>	
			} else if (item.socialLinks) {

				return <li>
					{this.renderSocialLinks()}
				</li>

			} else {
				return <li key={item.title}>{item.title}</li>	
			}
		}.bind(this));
	},
	renderSocialLinks: function() {
		// Returns buttons for GitHub, Linkedin, and Codepen

		return <div className='social-links'>
				<a className='link github'
				href='https://github.com/jonoco'>
					<img src='./assets/github.png' />
				</a>
				<div className='link linkedin'>
					<a href='https://www.linkedin.com/in/jonoco'><span className='linkedin-text'>in</span></a>
				</div>
				<div className='link codepen'>
					<a href='http://codepen.io/jonoco/'><img src='./assets/codepen-ras.png' /></a>
				</div>
			</div>
	},
	renderTooltips: function(items) {
		return items.map(function(item) {
			return <span>
				{item}
			</span>
		});
	}
});