var React = require('react');

module.exports = React.createClass({
	render: function() {
		return <div className='project'>
			<div className='title'>
				<h3>{this.props.title}</h3>
				<h4>- {this.props.subtitle}</h4>
			</div>
			<div className='image'>
				<img src={this.props.img} />
			</div>
			<div className='tags'>
				{this.renderTags()}
			</div>
			<p>{this.props.description}</p>
			<div className='buttons'>
				{this.renderLinks()}
			</div>
		</div>
	},
	renderTags: function() {
		return this.props.tags.map(function(tag) {
			return <span key={tag}>{tag}</span>
		});
	},
	renderLinks: function() {
		return this.props.links.map(function(link) {
			return <a 
				href={link.href} 
				key={link.title}
				className={link.title.replace(' ', '-')}
				>
				{link.title}</a>
		})
	}
});