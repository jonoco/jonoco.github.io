var React = require('react');

var skillCategories = [
	{
		title: 'languages',
		list: [
			{ title: 'JavaScript', score: 74 },
			{ title: 'HTML', score: 69 },
			{ title: 'Swift', score: 51 },
			{ title: 'PHP', score: 9 },
			{ title: 'C', score: 8 },
			{ title: 'SQL', score: 25 }
		]
	},
	{
		title: 'frameworks',
		list: [
			{ title: 'Angular', score: 35 },
			{ title: 'React', score: 15 }
		]
	},
	{
		title: 'libraries',
		list: [
			{ title: 'Reflux', score: 29 },
			{ title: 'Lodash', score: 11 },
			{ title: 'Alamofire', score: 5 }
		]
	},
	{
		title: 'software',
		list: [
			{ title: 'XCode', score: 72 },
			{ title: 'Eclipse', score: 41 },
			{ title: 'Sublime Text', score: 93 },
			{ title: 'Sketch', score: 45 },
			{ title: 'Photoshop', score: 35 }
		]
	},
	{
		title: 'tools',
		list: [
			{ title: 'Gulp', score: 81 },
			{ title: 'Browserify', score: 29 },
			{ title: 'Sass', score: 85 }
		]
	},
	{
		title: 'databases',
		list: [
			{ title: 'MySQL', score: 19 },
			{ title: 'Parse', score: 31 },
			{ title: 'Firebase', score: 31 },
			{ title: 'SQLite', score: 13 }
		]
	}
];

module.exports = React.createClass({
	componentDidUpdate: function() {
		window.scroll(0,0);
	},
	render: function() {
		return <div className='skills'>
			<h1>Skills</h1>
			{this.renderCategories()}
		</div>
	},
	renderCategories: function() {
		return skillCategories.map(function(category) {
			return <div className='category'>
				<h2>{category.title}</h2>
				<hr />
				{this.renderSkills(category.list)}
			</div>
		}.bind(this));
	},
	renderSkills: function(category) {
		return category.map(function(skill) {
			var skillStyle = {
				width: skill.score + '%'
			};
			return <div className='skill' style={skillStyle}>
				<h3>{skill.title}</h3>
			</div>
		});
	}
});


