import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ForwardIcon from '@mui/icons-material/Forward';

const columns = [
  { id: 'UserTypeID', label: 'USER TYPE ID', minWidth: 100 },
  { id: 'UserType', label: 'USER TYPE', minWidth: 100 },
  { id: 'CompanyType', label: 'COMPANY TYPE', minWidth: 150 },
  { id: 'CompanyCode', label: 'COMPANY CODE', minWidth: 150 },
  { id: 'CreatedBy', label: 'CREATED BY', minWidth: 100 },
  { id: 'CreatedDate', label: 'CREATED DATE', minWidth: 150 },
  { id: 'IsActive', label: 'ACTIVE', minWidth: 100 },
  { id: 'actions', label: 'ACTION', minWidth: 170 },
];

function createData(UserTypeID, UserType, CompanyType,  CompanyCode, CreatedBy, CreatedDate, IsActive) {
  return { UserTypeID, UserType, CompanyType, CompanyCode, CreatedBy, CreatedDate,IsActive };
}

const rows = [
  createData('UID001','Admin','EL' , 'C001','ABCD', '2024-06-10', 'Active'),
  createData('UID002','Supervisor','EL' ,'C001', 'ABCD', '2024-06-10', 'Active'),
  createData('UID003','Manager','EGA' ,'C002', 'ABCD', '2024-06-10', 'Active'),
  createData('UID004','User','Vendor' ,'C003','ABCD','2024-06-10', 'In-Active'),
];

export default function UserTypeTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box
      component="main"
      sx={{
        background: "#dddddd",
        width: "100%",
        p: 1.2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "15px",
      }}
    >
       <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440, maxWidth: '80vw', overflowX: 'auto' }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth, fontWeight: "700" }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.PlantCode}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.id === 'actions' ? (
                              <>
                                <AddCircleIcon style={{ cursor: 'pointer', marginRight: 10, color: "green" }} />
                                <EditIcon style={{ cursor: 'pointer', marginRight: 10, color: "blue" }} />
                                <DeleteIcon style={{ cursor: 'pointer', marginRight: 10, color: "red" }} />
                                <ForwardIcon style={{ cursor: 'pointer', color: "purple" }} />
                              </>
                            ) : (
                              column.format && typeof value === 'number'
                                ? column.format(value)
                                : value
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
