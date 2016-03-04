var React = require('react');
var SkillData = require('../content/skill-data.js');

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
		return SkillData.map(function(category) {
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


