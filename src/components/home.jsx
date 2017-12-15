import React, { Component } from 'react';
import Splash from './splash';
import Portfolio from './portfolio';
import Footer from './footer';

class Home extends Component {
	render() {
		return(
			<div className="home">
				<Splash />
				<Portfolio />
				<Footer />
			</div>
		);
	}
}

export default Home;