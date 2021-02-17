import React, { Component } from 'react';
import TitleBar from './TitleBar/titleBar';
import Footer from './Footer/footer';

class App extends Component {
	constructor(props) {
		super(props);
		this.music = [];
	}

	render() {
		return (
			<div className="container-fluid">
				<TitleBar />
				<Footer />
			</div>
		)
	}
}

export default App;