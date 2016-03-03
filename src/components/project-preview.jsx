var React = require('react');
var ProjectData = require('../content/portfolio-data');

module.exports = React.createClass({
	render: function () {
		return (
			<div className='project-preview'>
				{this.date(this.props.date)}
				<div className='details'>
					<h3 className='title'>{this.props.title}</h3> 
					<h4 className='tags'>{this.tags(this.props.tags)}</h4>
					<div className='links'>{this.links(this.props.links)}</div>
				</div>
				<div className='description'>{this.props.description}</div>
			</div>
		)
	},
	date: function (date) {
		var fromMonth = date.from.slice(0, 3); 
		var fromYear = date.from.slice(-2);
		var toMonth = date.to.slice(0, 3);
		var toYear = date.to.slice(-2);

		return (
			<div className='date'>
				<div>{fromMonth} {fromYear}</div>
				<div className='vert-bar'>|</div>
				<div>{toMonth} {toYear}</div>
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