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

	addNewSong (song) {
		this.music.push(song);
		this.setState({
			music: this.music,
			dataReady: true
		})
	}

	componentDidMount() {
		axios.get('http://localhost:5000/api/music').then(data =>
		this.setState({ music: data.data,
		dataReady: true})
		)}

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