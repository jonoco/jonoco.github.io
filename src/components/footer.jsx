var React = require('react');
var List = require('./list');

var listsData = [
	{
		title: 'Projects',
		items: [
			{
				title: 'jonoco.io',
				link: 'project/jonoco'
			},
			{
				title: 'Chirp',
				link: 'project/chirp'
			},
			{
				title: 'Kyra',
				link: 'project/kyra'
			},
			{
				title: 'Orb Orbital',
				link: 'project/orborbital'
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
			{ title: 'joshua.n.cox@gmail.com', 
				email: 'joshua.n.cox@gmail.com' 
			},
			{ title: '123.456.7890' },
			{ social: true }	
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
