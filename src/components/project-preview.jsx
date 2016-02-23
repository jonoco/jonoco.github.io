var React = require('react');
var ProjectData = require('../content/portfolio-data');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			hover: false
		}
	},
	render: function () {
		return (
			<div 
				className='project-preview'
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}
			>
				{this.state.hover ? this.inset() : this.image() }
			</div>
		)
	},
	inset: function() {
		return (
			<div className='project'>
				<h1 className='title'>{this.props.title}</h1> 
				<h2 className='tags'>{this.tags(this.props.tags)}</h2>
				<p className='description'>{this.props.description}</p>
				<div className='links'>{this.links(this.props.links)}</div>
			</div>
		)
	},
	links: function(links) {
		return links.map(function(link) {
			return <a href={link.link}>{link.title}</a>	
		});
	},
	tags: function(tags) {
		return tags.map(function(tag) {
			return <span>{tag}</span>
		});
	},
	image: function(image) {
		var placeholder = {src:'assets/placeholder.png', alt:'placeholder image'};
		var thumbnail = image || placeholder;
		return <img src={thumbnail.src} alt={thumbnail.alt}/>
	},
	handleMouseEnter: function() {
		this.setState({ hover: true });
	},
	handleMouseLeave: function() {
		this.setState({ hover: false });
	}
});