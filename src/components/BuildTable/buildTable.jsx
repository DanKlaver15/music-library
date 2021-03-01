import React, { useState } from "react";
import { AgGridReact, AgGridColumn } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";

import RenderColumns from "../Columns/columns";
import GridComponents from "../Editors/indexEditors";

function CreateTable(props) {
  const [gridApi, setGridApi] = useState(null);
  const [columnApi, setColumnApi] = useState(null);

  const [rowData, setRowData] = useState(null);

  const frameworkComponents = {
    simpleEditor: GridComponents.SimpleEditor,
    actionsRenderer: GridComponents.ActionsRenderer
  };

  function onGridReady(params) {
    setGridApi(params.api);
    setColumnApi(params.columnApi);
    params.api.sizeColumnsToFit();
  }

  return (
      <div
        id="myGrid"
        style={{ height: "100%", width: "100%" }}
        className="ag-theme-alpine-dark"
      >
        <AgGridReact
          rowData={props.music}
        //   getRowNodeId={data => data.id}
          onGridReady={onGridReady}
          frameworkComponents={frameworkComponents}
          editType="fullRow"
          suppressClickEdit>
			{RenderColumns(props.music)}
			<AgGridColumn headerName='' colId='actions' cellRenderer="actionsRenderer" editable={false} filter={false} minWidth={220}></AgGridColumn>
		</AgGridReact>
      </div>
  );
}

export default CreateTable;