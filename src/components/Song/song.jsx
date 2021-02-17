import React from 'react';
import './song.css';

function Song(props) {
	return (
		<div className="song">
			<p className="id">{props.song[0]}</p>
			<p className="title">{props.song[1]}</p>
			<p className="album">{props.song[2]}</p>
			<p className="artist">{props.song[3]}</p>
			<p className="genre">{props.song[4]}</p>
			<p className="releaseDate">{props.song[5]}</p>
		</div>
	)
}

export default Song;