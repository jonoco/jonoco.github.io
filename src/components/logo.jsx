import React, { Component } from 'react';
import { Link } from 'react-router';

class Logo extends Component {
	render() {
		return(
			<div className='logo'>
				<Link to='/'>
					<p>Jo<span className='hidden'>shua</span></p>
					<p>No<span className='hidden'>koi</span></p>
					<p>Co<span className='hidden'>x</span></p>
				</Link>
			</div>
		);
	}
}

export default Logo;
