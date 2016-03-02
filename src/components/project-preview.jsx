var React = require('react');
var ProjectData = require('../content/portfolio-data');

module.exports = React.createClass({
	render: function () {
		return (
			<div className='project-preview'>
				{this.date()}
				<div className='title'>
					<h1>{this.props.title}</h1> 
					<h2 className='tags'>{this.tags(this.props.tags)}</h2>
					<div className='links'>{this.links(this.props.links)}</div>
				</div>
				<div className='description'>{this.props.description}</div>
			</div>
		)
	},
	date: function () {
		var fromMonth = 'Jan';
		var toMonth = 'Mar';
		var year = 99;
		return (
			<div className='date'>
				<div>{fromMonth}</div>
				<div className='vert-bar'>|</div>
				<div>{toMonth}</div>
				<div className='year'>{year}</div>
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
	}
});