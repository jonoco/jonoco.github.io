import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<div className='footer'>
				<div className='list'>
					<h2>Contact</h2>
					<ul>
						<li>
							<a href='mailto:hello@jonoco.me'>hello@jonoco.me</a>
						</li>
						<li>
							<a href='https://docs.google.com/document/d/1RKjQJai5m-H7IeCsR1Mm5GCqIHajO7OfQjUCxk4yYu0/edit?usp=sharing'>resume</a>
						</li>
						<li>
							<div className='social-links'>
								<a className='link' href='https://github.com/jonoco'>
									<img src='./assets/github.png' alt='github' />
								</a>
								<a className='link' href='https://www.linkedin.com/in/jonoco'>
									<img src='./assets/linkedin.png' alt='linkedin' />
								</a>
								<a className='link' href='http://codepen.io/jonoco'>
									<img src='./assets/codepen.png' alt='codepen' />
								</a>
							</div>
						</li>
					</ul>
				</div>
			</div>
		);
	}
};

export default Footer;