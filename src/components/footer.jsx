var React = require('react');
var List = require('./list');

var listsData = [
	{
		title: 'Projects',
		items: [
			{
				title: 'Chirp',
				link: '#'
			},
			{
				title: 'Kyra',
				link: '#'
			},
			{
				title: 'Orb Orbital',
				link: '#'
			}
		]
	},
	{
		title: 'Skills',
		items: [
			{ title: 'HTML', 
				hover: ['canvas', 'video'] 
			},
			{ title: 'CSS', 
				hover: ['flex', 'animation'] 
			},
			{ title: 'JavaScript', 
				hover: ['Angular', 'Node', 'React', 'Reflux'] 
			},
			{ title: 'Swift', 
				hover: ['SpriteKit'] 
			},
			{ title: 'Sketch', 
				hover: ['mockups', 'icons'] 
			}
		]
	},
	{
		title: 'Roles',
		items: [
			{ title: 'Front-end Development'},
			{ title: 'UX/UI'},
			{ title: 'Mobile Development'}
		]
	},
	{
		title: 'Contact',
		items: [
			{ title: 'joshua.n.cox@gmail.com', email: 'joshua.n.cox@gmail.com' },
			{ title: '123.456.7890' }	
		]
	}
];

module.exports = React.createClass({
	render: function() {
		return <div className='footer'>
			{this.renderLists()}
		</div>
	},
	renderLists: function() {
		return listsData.map(function(list) {
			return <List {...list} />
		});
	}
});
