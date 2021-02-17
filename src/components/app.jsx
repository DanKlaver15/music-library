import React, { Component } from 'react';
import TitleBar from './TitleBar/titleBar';
import Footer from './Footer/footer';
import DisplayMusic from './DisplayMusic/displayMusic';
const $ = require("jquery");


class App extends Component {
	constructor(props) {
		super(props);
		this.music = [];
	}

	getMusic() {
		var music = [];
		var settings = {
			"url": "http://www.devcodecampmusiclibrary.com/api/music",
			"method": "GET",
			"timeout": 0,
			};
		$.ajax(settings).done(function (response) {
			console.log(response);
			music.push(response);
		});
	}

	render() {
		return (
			<div className="container-fluid">
				<TitleBar />
					<DisplayMusic />
				<Footer />
			</div>
		)
	}
}

export default App;