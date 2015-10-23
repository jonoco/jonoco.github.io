var Reflux = require('reflux');
var Actions = require('../actions');

var navi = ['jonoco','chirp','kyra','orborbital'];

var projects = {
	kyra: {
		title: 'Kyra',
		description: 'A Kyrandia remake using the Phaser framework.',
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
			description: '',
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
		}
}

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

