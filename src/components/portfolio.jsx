var React = require('react');
var ProjectData = require('../content/portfolio-data');
var ProjectPreview = require('./project-preview.jsx');

module.exports = React.createClass({
	render: function () {
		return (
			<div className='portfolio'>
				{this.renderPortfolioItems(ProjectData)}
			</div>
		)
	},
	renderPortfolioItems: function(projects) {
		return projects.map(function(project) {
			return <ProjectPreview {...project}/>
		});
	}
});