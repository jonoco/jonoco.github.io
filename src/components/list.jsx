var React = require('react');

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
			if (item.email) {
				return <li key={item.title}>
					<a href={'mailto:' + item.email}>
						{item.title}
					</a>
				</li>

			} else if (item.hover) {
				return <li key={item.title} className='hover'>
					{item.title}
					<div className='tooltip'>
						{this.renderTooltips(item.hover)}
					</div>
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