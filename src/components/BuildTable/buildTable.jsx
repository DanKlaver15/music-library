import React from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';
import './buildTable.css';

function RenderColumns(props) {
	let header = Object.keys(props[0])
	header.shift()
      return header.map((key, index) => {
         return (		
				<AgGridColumn key={index} field={key} sortable={true} floatingFilter={true} filter='agTextColumnFilter' suppressMenu={true} flex={1} ></AgGridColumn>
			)
      })
}

function renderTable(props) {
	return (
		<div className="ag-theme-alpine-dark">
			<AgGridReact rowData={props.music}>
				<AgGridColumn headerName='ID' field='id' sortable={true} width={75} ></AgGridColumn>
				{RenderColumns(props.music)}
			</AgGridReact>
		</div>
	)
}

export default renderTable; 