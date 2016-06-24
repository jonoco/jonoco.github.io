import React, { Component } from 'react';
import ProjectData from '../content/portfolio-data';
import ProjectPreview from './project-preview.jsx';

class Portfolio extends Component {
	render() {
		return(
			<div className='portfolio'>
				<h2>What I've made</h2>
				{this.renderPortfolioItems()}
			</div>
		);
	}

	renderPortfolioItems() {
		let i = 0;
		const projects = ProjectData.reverse();
		return projects.map(function(project) {
			return <ProjectPreview {...project} key={i++}/>
		});
	}
}

export default Portfolio;



