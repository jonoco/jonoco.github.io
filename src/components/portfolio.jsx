var React = require('react');
var ProjectData = require('../content/portfolio-data').reverse();
var ProjectPreview = require('./project-preview.jsx');

module.exports = React.createClass({
	componentDidMount: function() {
		window.scroll(0,0);
	},
	render: function () {
		return (
			<div className='portfolio'>
				<h2>What I've made</h2>
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