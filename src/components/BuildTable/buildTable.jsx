import React from 'react';
import Table from 'react-bootstrap/Table'
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
		<Table striped bordered hover variant="dark">
			<thead>
				<tr>
					{RenderTableHeader(props.music)}
				</tr>
			</thead>
			<tbody>
				{RenderTableData(props.music)}
			</tbody>
		</Table>
	)
}

export default BuildTable;