import "./dataTable.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';
import { forwardRef, useEffect, useState } from "react";


let columns = [];


const VirtuosoTableComponents = {
  Scroller: forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
  ),
  TableHead,
  TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
  TableBody: forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
};

function fixedHeaderContent() {
  return (
    <TableRow 
    sx={{
      backgroundColor: '#D0D0D0',
    }}>
      {columns.map((column) => (
          column !== "_id" ? <TableCell align="center" key={column} variant="head">{column}</TableCell> : ""
      ))}
    </TableRow>
  );
}

function rowContent(_index, row) {
  return (
    <>
      {columns.map((column) => (
        column !== "_id" ? <TableCell key={column} align="center">
        {row[column]}
        </TableCell> : ""
      ))}   
    </>
  );
}

export default function VirtuosoTable({rows, headers}) {
    console.log(headers);
    //const [col, setColumns] = useState(headers);
    // useEffect(()=>{
    //     setColumns(headers);
        
    // }, [headers]);
    columns = headers;
    
    console.log(columns);
  return (
    <div className="dataTableContainer">

    <Paper style={{ height: 600, width: '100%' }}>
      <TableVirtuoso
        data={rows}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={(rowContent)}
        />
    </Paper>
    </div>
  );
}