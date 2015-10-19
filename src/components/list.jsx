var React = require('react');
var Links = require('./links');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
	render: function() {
		return <div className='list'>
			<div className='title'>{this.props.title}</div>
			<ul>
				{this.renderItems()}
			</ul>
		</div>
	},
	renderItems: function() {
		return this.props.items.map(function(item) {

			if (item.link) {

				return <li key={item.title}>
					<Link to={item.link}>
						{item.title}
					</Link>
				</li>

			} else if (item.email) {
				
				return <li key={item.title}>
					<a href={'mailto:' + item.email}>
						{item.title}
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
			} else if (item.social) {
				
				return <li>
					<Links />
				</li>

			} else {

				return <li key={item.title}>{item.title}</li>	
			}
		}.bind(this));
	},
	renderTooltips: function(items) {
		return items.map(function(item) {
			return <span>
				{item}
			</span>
		});
	}
});