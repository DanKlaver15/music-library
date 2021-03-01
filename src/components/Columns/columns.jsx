import React from 'react';
import { AgGridColumn } from 'ag-grid-react';

function RenderColumns(props) {
	let header = Object.keys(props[0])
      return header.map((key, index) => {
			if (index === 0) {
				return (
					<AgGridColumn key={index} field={key} hide={true}></AgGridColumn>
				)
			} else if (index ===1) {
				return (
					<AgGridColumn key={index} field={key} sortable={true} floatingFilter={true} filter='agTextColumnFilter' suppressMenu={true} cellEditor="simpleEditor" editable={true}></AgGridColumn>
				)
			} else {
				return (
					<AgGridColumn key={index} field={key} sortable={true} floatingFilter={true} filter='agTextColumnFilter' suppressMenu={true} cellEditor="simpleEditor" editable={true}></AgGridColumn>
				)
			} 
      })
}

export default RenderColumns