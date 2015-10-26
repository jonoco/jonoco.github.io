var React = require('react');
var Links = require('./links');
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