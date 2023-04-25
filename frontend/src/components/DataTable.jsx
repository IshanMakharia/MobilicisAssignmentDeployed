import "./dataTable.css"
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useState } from "react";

export default function DataTable({rows, headers}) {
    
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    // console.log(rows.length);
    return (
        <div className="dataTableContainer">
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 550 }}>
                <Table stickyHeader aria-label="sticky table">

                    <TableHead >
                        <TableRow>
                            {headers.map(header => (
                                    header !== "_id" ? <TableCell sx={{
                                        backgroundColor: '#D0D0D0',
                                      }}align="center" key={header}>{header}</TableCell> : ""
                            ))}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                                        {headers.map((header) => {
                                            return (
                                                header !== "_id" ? <TableCell key={header} align="center">
                                                    {row[header]}
                                                </TableCell> : ""
                                            );
                                        })}
                                    </TableRow>
                                );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 50, 100, 200, 500, 1000]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={(page > 0 && rows.length <= page*rowsPerPage) ? setPage(0) && page : page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            </Paper>
            </div>
    )
}