var React = require('react');
var List = require('./list');

var projectsData = {
		title: 'Projects',
		items: [
			{
				title: 'jonoco.me',
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
	};
var skillsData = {
		title: 'Skills',
		link: 'skills',
		items: [
			{ title: 'HTML', 
				hover: ['canvas', 'video', 'html5'] 
			},
			{ title: 'CSS', 
				hover: ['Sass', 'flex', 'animation'] 
			},
			{ title: 'JavaScript', 
				hover: ['Angular', 'Node', 'React', 'Redux'] 
			},
			{ title: 'Sketch', 
				hover: ['mockups', 'icons'] 
			}
		]
	};
var rolesData = {
		title: 'Roles',
		items: [
			{ title: 'Front-end'},
			{ title: 'Mobile'},
			{ title: 'Full-stack'}
		]
	};
var contactData = {
		title: 'Contact',
		items: [
			{ title: 'joshua.n.cox@gmail.com', 
				email: 'joshua.n.cox@gmail.com' 
			},
			{ title: 'resume',
				href: 'https://docs.google.com/document/d/1RKjQJai5m-H7IeCsR1Mm5GCqIHajO7OfQjUCxk4yYu0/edit?usp=sharing'
			},
			{ socialLinks: true }	
		]
	};

module.exports = React.createClass({
	render: function() {
		return <div className='footer'>
			<List{...skillsData} />
			<List{...rolesData} />
			<List{...contactData} />
		</div>
	}
});
