var Reflux = require('reflux');
var Actions = require('../actions');

var navi = ['jonoco','chirp','kyra','orborbital']; // which projects to show on footer

var projects = {
	kyra: {
		title: 'Kyra',
		description: 'A Kyrandia remake using the Phaser framework.',
		paragraphs: [
			'This was one of my longest projects, at around 250 hours by the time I decided to finish it. Though it was grueling at times (particularly cleaning up the animations), working day and night, in cars and in bed, to implement concepts I had come up, it was very satisfying seeing it come together.',
			'The project came with a large variety of firsts. One challenge was how to structure a large amount of data scalably, such as the grid data, used for path finding, or the room data, used to hold an ever expanding amount references to animations, background sprites, items, and events.',
			'Another major challenge was working with the 24 year old art assets. I was lucky enough to locate a program that could decode the old proprietary packages that held original source artwork, but due to some problem, much of the art was corrupted. Entire animation sequences had to be recolored by hand, frame-by-frame. I had to carefully consider which animations were necessary, and which I could go without. Lucky some were less than a dozen frames, cleverly repeated and rearranged. Others weren\'t so simple, such as a 120 frame introduction of one of the characters. After cleaning, the animations were packaged into texture atlases, then carefully placed within a scene maddeningly pixel-perfect.'
			],
		tags: ['JavaScript', 'Phaser'],
		links: [
			{
				title: 'github',
				link: 'https://github.com/jonoco/Kyra'
			},
			{
				title: 'live',
				link: 'http://jonoco.github.io/Kyra/'
			}
		],
		images: [
			'assets/kyra0.png',
			'assets/kyra1.png',
			'assets/kyra2.png',
			'assets/kyra3.png',
			'assets/kyra4.png'
		]
	},
	chirp: {
		title: 'Chirp',
		description: 'An extremely simple chat room web app.',
		tags: ['JavaScript', 'Angular', 'Firebase'],
		links: [
			{
				title: 'github',
				link: 'https://github.com/jonoco/chirp'
			},
			{
				title: 'live',
				link: 'https://chirpapp.firebaseapp.com/'
			}
		],
		images: [
			'http://i.imgur.com/3dhZTlm.png',
			'http://i.imgur.com/IfqxZXA.png'
		]
	},
	orborbital: {
		title: 'Orb Orbital',
		description: 'A puzzle game based around timing your shots.',
		tags: ['Swift', 'SpriteKit'],
		links: [
			{
				title: 'app store',
				link: 'https://itunes.apple.com/us/app/orb-orbital/id1025409624?mt=8'
			}
		],
		images: [
			'http://i.imgur.com/4nHocnU.png',
			'http://i.imgur.com/6LQsGD5.png',
		]
	},
	jonoco: {
		title: 'jonoco.me',
		description: 'Using recent knowledge of React, I put together the latest iteration of my online portfolio.',
		tags: ['JavaScript', 'React', 'Reflux'],
		links: [
			{
				title: 'github',
				link: 'https://github.com/jonoco/portfolio'
			}
		],
		images: [
			'./assets/jonoco@3x.png'
		]
	},
	fightfighter: {
		title: 'Fight Fighter',
		description: 'Registration and tournament management app. Allows participants to register for an event, and for an organizer to create participant divisions.',
		tags: ['JavaScript', 'Angular', 'Firebase'],
		links: [
			{
				title: 'github',
				link: 'https://github.com/jonoco/FightFighters'
			},
			{
				title: 'live',
				link: 'https://fightfighter.firebaseapp.com/'
			}
		]
	}
};

module.exports = Reflux.createStore({
	listenables: [Actions],
	getProject: function(id) {
		this.project = projects[id] || null;
		this.index = navi.indexOf(id);
		this.triggerChange();
	},
	nextProject: function() {
		this.index++;
		this.index = (this.index == navi.length ? 0 : this.index);
		this.getProject(navi[this.index]);
	},
	prevProject: function() {
		this.index--;
		this.index = (this.index < 0 ? navi.length-1 : this.index );
		this.getProject(navi[this.index]);
	},
	triggerChange: function() {
		this.trigger('change', this.project);
	}
});

