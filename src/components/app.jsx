import React, { Component } from 'react';
import axios from 'axios';
import TitleBar from './TitleBar/titleBar';
import Footer from './Footer/footer';
import RenderTable from './BuildTable/buildTable';
import SongCreator from './SongCreator/songCreator';

import './app.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			music: [],
			dataReady: false
		}
	}

	getAllSongs() {
		axios.get('http://localhost:5000/api/music')
		.then(data =>
			this.setState({
				music: data.data,
				dataReady: true
			})
		)
	}

	async addNewSong(song) {
		try {
			await axios.post('http://localhost:5000/api/music', song);
			this.getAllSongs();
		} catch(error) {
			console.log("error", error);
		}
	}

	componentDidMount() {
		this.getAllSongs()
	}

	render() {
		return (
			this.state.dataReady ? 
				<div className="container-fluid">
					<TitleBar />
					<RenderTable music={this.state.music}/>
					<SongCreator addNewSong={this.addNewSong.bind(this)}/>
					<Footer />
				</div>
			: null
		)
	}
}

export default App;