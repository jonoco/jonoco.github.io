var React = require('react');

module.exports = React.createClass({
	render: function () {
		return (
			<div className='project-preview'>
				{this.date(this.props.date)}
				<div className='details'>
					<h3 className='title'>{this.props.title}</h3> 
					<h4 className='tags'>{this.renderTags(this.props)}</h4>
					<div className='links'>{this.renderLinks(this.props.links)}</div>
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
				<div>{toMonth} {toYear}</div>
				<div className='vert-bar'>|</div>
				<div>{fromMonth} {fromYear}</div>
			</div>
		)
	},
	renderLinks: function(links) {
		return links.map(function(link) {
			return <a className='btn btn-primary-outline' href={link.link} key={link.link}>{link.title}</a>	
		});
	},
	renderTags: function(props) {
		return props.tags.map(function(tag) {
			return <div key={props.title.concat(tag)}>{tag}</div>
		});
	}
});