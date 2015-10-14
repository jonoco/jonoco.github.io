var React = require('react');
var Project = require('./project');

var projectData = [
	{
		title: 'Kyra',
		subtitle: 'Kyrandia remake',
		description: 'A Kyrandia remake, blah blah westwood blah blah kyrandia blah blah westwood blah blah kyrandia blah blah westwood blah blah kyrandia ',
		tags: ['JavaScript', 'Phaser'],
		links: [
			{
				title: 'github',
				href: 'https://github.com/jonoco/Kyra'
			},
			{
				title: 'live',
				href: 'http://jonoco.github.io/Kyra/'
			}
		],
		img: 'http://www.abandonia.com/files/games/88/Legend%20of%20Kyrandia%201,%20The_2.png'
	},
	{
		title: 'Chirp',
		subtitle: 'Chatroom web app',
		description: 'designed for absolute simplicity, allowing users to easily create a chatroom for others to join.',
		tags: ['JavaScript', 'Angular', 'Firebase'],
		links: [
			{
				title: 'github',
				href: 'https://github.com/jonoco/chirp'
			},
			{
				title: 'live',
				href: 'https://chirpapp.firebaseapp.com/'
			}
		],
		img: 'http://i.imgur.com/x16DFOA.png'
	},
	{
		title: 'Orb Orbital',
		subtitle: 'Timing puzzle game',
		description: 'Users try to collect orbs as quickly as possible without touching certain blocks.',
		tags: ['Swift', 'SpriteKit'],
		links: [
			{
				title: 'apple',
				href: 'https://appsto.re/i6SH3xx'
			}
		],
		img: 'http://i.imgur.com/Hfl6pf8.png'
	}
];

module.exports = React.createClass({
	render: function() {
		return <div className='portfolio'>
			<h2 className='title'>Things I've Made</h2>
			<div>
				{this.renderProjects()}
			</div>
		</div>
	},
	renderProjects: function() {
		return projectData.map(function(project) {
			return <Project {...project} key={project.title} />
		});
	}
});