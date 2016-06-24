import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<div className='footer'>
				<div className='list'>
					<h2>Contact</h2>
					<ul>
						<li>
							<a href='mailto:joshua.n.cox@gmail.com'>joshua.n.cox@gmail.com</a>
						</li>
						<li>
							<a href='https://docs.google.com/document/d/1RKjQJai5m-H7IeCsR1Mm5GCqIHajO7OfQjUCxk4yYu0/edit?usp=sharing'>resume</a>
						</li>
						<li>
							<div className='social-links'>
								<a className='link github' href='https://github.com/jonoco'>
									<img src='./assets/github.png' />
								</a>
								<div className='link linkedin'>
									<a href='https://www.linkedin.com/in/jonoco'><span className='linkedin-text'>in</span></a>
								</div>
								<div className='link codepen'>
									<a href='http://codepen.io/jonoco/'><img src='./assets/codepen-ras.png' /></a>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		);
	}
};

export default Footer;