import React, { Component } from 'react';
import axios from 'axios';
import TitleBar from './TitleBar/titleBar';
import Footer from './Footer/footer';
import BuildTable from './BuildTable/buildTable';
import './app.css';
const $ = require("jquery");


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			music: [],
			dataReady: false
		}
	}

	componentDidMount() {
		axios.get('http://www.devcodecampmusiclibrary.com/api/music').then(data =>
		this.setState({ music: data.data,
		dataReady: true})
		)}

	render() {
		return (
			this.state.dataReady ? 
			<div className="container-fluid">
				<TitleBar />
					{/* <h1>{this.state.music[2].title}</h1> */}
					<BuildTable music={this.state.music}/>
				<Footer />
			</div>
			: null
		)
	}
}

export default App;