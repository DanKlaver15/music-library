import React, { Component } from 'react';
import { Modal, Button, Form } from "react-bootstrap";
import './songCreator.css';

class SongCreator extends Component { 
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			album: '',
			artist: '',
			genre: '',
			releaseDate: '',
			showModal: false
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	handleShow() {
		this.setState({
			showModal: true
		});
	}
	
	handleClose() {
		this.setState({
			showModal: false
		});
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

  	handleSubmit(event) {
		event.preventDefault();
		const song = {
			title: this.state.title,
			album: this.state.album,
			artist: this.state.artist,
			genre: this.state.genre,
			releaseDate: this.state.releaseDate
		}
		this.props.addNewSong(song);
		this.setState({
			title: '',
			album: '',
			artist: '',
			genre: '',
			releaseDate: '',
		});
		this.handleClose();
	}

	render() {
		return (
			<div>
				<br></br>
				<div className="justify-content-center" style={{ height: "10vh" }}>
					<br></br><Button variant="primary" onClick={this.handleShow}>Add Song</Button>
				</div>
				<Modal show={this.state.showModal} onHide={this.handleClose}>
					<Modal.Header closeButton onClick={this.handleClose}>
					</Modal.Header>
					<Modal.Body>
						<Form>
							<Form.Label>Title:</Form.Label>
							<Form.Control name="title" value={this.state.title} onChange={this.handleChange}></Form.Control>
							<Form.Label>Album:</Form.Label>
							<Form.Control name="album" value={this.state.album} onChange={this.handleChange}></Form.Control>
							<Form.Label>Artist:</Form.Label>
							<Form.Control name="artist" value={this.state.artist} onChange={this.handleChange}></Form.Control>
							<Form.Label>Genre:</Form.Label>
							<Form.Control name="genre" value={this.state.genre} onChange={this.handleChange}></Form.Control>
							<Form.Label>Release Date:</Form.Label>
							<Form.Control name="releaseDate" value={this.state.releaseDate} onChange={this.handleChange}></Form.Control>
						</Form>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={this.handleSubmit}>Submit</Button>
					</Modal.Footer>
				</Modal>
			</div>
		)
	}
}

export default SongCreator;