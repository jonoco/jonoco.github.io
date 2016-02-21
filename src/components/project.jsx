var React = require('react');
var Reflux = require('reflux');
var Actions = require('../actions');
var ProjectStore = require('../stores/project-store');

module.exports = React.createClass({
	mixins: [
		Reflux.listenTo(ProjectStore, 'onChange')
	],
	getInitialState: function() {
		return {
			title: '',
			tags: [],
			description: '',
			paragraphs: [],
			links: [],
			images: []
		}
	},
	componentWillMount: function() {
		Actions.getProject(this.props.params.id);
	},
	componentWillReceiveProps: function(nextProps) {
		Actions.getProject(nextProps.params.id);
	},
	componentDidUpdate: function() {
		window.scroll(0,0);
	},
	render: function() {
		return <div className='project'>
			<h1>{this.state.title}</h1>

			<div className='navigation'>
				<button onClick={this.onClickPrev}>&lt;&lt;</button>
				<button onClick={this.onClickNext}>&gt;&gt;</button>
			</div>

			<div className='tags'>
				{this.renderTags()}
			</div>

			<p>{this.state.description}</p>
			
			<div className='buttons'>
				{this.renderLinks()}
			</div>
			
			<div className="paragraphs">
				{this.renderParagraphs(this.state.paragraphs)}
			</div>
			
			<div className='images'>
				{this.renderImages()}
			</div>
		</div>
	},
	renderTags: function() {
		return this.state.tags.map(function(tag) {
			return <span key={tag}>{tag}</span>
		});
	},
	renderLinks: function() {
		return this.state.links.map(function(link) {
			return <a 
				href={link.link} 
				key={link.title}
				className={link.title.replace(' ', '-')}
				>
				{link.title}
			</a>
		})
	},
	renderParagraphs: function(paragraphs) {
		if (!paragraphs) return;

		return paragraphs.map(function(paragraph) {
			return <p key={paragraph.length}>{paragraph}</p>
		});
	},
	renderImages: function() {
		return this.state.images.map(function(image) {
			return <img key={image} src={image} />
		});
	},
	onClickNext: function() {
		Actions.nextProject();
	},
	onClickPrev: function() {
		Actions.prevProject();
	},
	onChange: function() {
		if (!ProjectStore.project) {
			console.log('no project!!');
		}

		this.setState({
			title: ProjectStore.project.title,
			tags: ProjectStore.project.tags,
			description: ProjectStore.project.description,
			paragraphs: ProjectStore.project.paragraphs,
			links: ProjectStore.project.links,
			images: ProjectStore.project.images
		});
	}
});