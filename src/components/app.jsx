import React, { Component } from 'react';
import TitleBar from './TitleBar/titleBar';
import Footer from './Footer/footer';
import APIConnect from './APIConnect/APIConnect';

class App extends Component {
	constructor(props) {
		super(props);
		this.music = [];
	}

	render() {
		return (
			<div className="container-fluid">
				<TitleBar />
					<APIConnect />
				<Footer />
			</div>
		)
	}
}

export default App;