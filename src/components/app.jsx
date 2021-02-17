import React, { Component } from 'react';
import TitleBar from './TitleBar/titlebar';

class App extends Component {
	constructor(props) {
		super(props);
		this.music = [];
	}

	render() {
		return (
			<div className="container-fluid">
				<TitleBar />
			</div>
		)
	}
}