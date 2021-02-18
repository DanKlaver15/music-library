import React from 'react';
import './buildTable.css';
import 'bootstrap/dist/css/bootstrap.css';

function RenderTableData(props) {
	return props.map((song, index) => {
		const { id, title, album, artist, genre, releaseDate } = song
		return (
			<tr key={id}>
				<td>{id}</td>
				<td>{title}</td>
				<td>{album}</td>
				<td>{artist}</td>
				<td>{genre}</td>
				<td>{releaseDate}</td>
			</tr>
		)
	})
}

function RenderTableHeader(props) {
	let header = Object.keys(props[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
}

function BuildTable(props) {
	return (
		<table className="table">
			<thead>
				<tr>
					{RenderTableHeader(props.music)}
				</tr>
			</thead>
			<body>
				{RenderTableData(props.music)}
			</body>
		</table>
	)
}

export default BuildTable;