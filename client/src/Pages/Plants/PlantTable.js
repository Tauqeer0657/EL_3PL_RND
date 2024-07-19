// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import { Box } from '@mui/material';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import ForwardIcon from '@mui/icons-material/Forward';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectPlant } from '../../features/plants/plantSlice';
// import { fetchPlantData } from '../../features/plants/plantAction';

// const columns = [
//   { id: 'plantCode', label: 'PLANT CODE', minWidth: 100 },
//   { id: 'createdBy', label: 'CREATED BY', minWidth: 100 },
//   { id: 'createdDate', label: 'CREATED DATE', minWidth: 150 },
//   { id: 'contactPersonName', label: 'CONTACT PERSON NAME', minWidth: 150 },
//   { id: 'contactPersonTitle', label: 'CONTACT PERSON TITLE', minWidth: 150 },
//   { id: 'emailAddress', label: 'EMAIL', minWidth: 100 },
//   { id: 'phoneNumber', label: 'PHONE NUMBER', minWidth: 100 },
//   { id: 'companyWebsite', label: 'COMPANY WEBSITE', minWidth: 100 },
//   { id: 'mailingAddress', label: 'MAIL ADDRESS', minWidth: 100 },
//   { id: 'city', label: 'CITY', minWidth: 100 },
//   { id: 'state_province', label: 'STATE', minWidth: 50 },
//   { id: 'country', label: 'COUNTRY', minWidth: 50 },
//   { id: 'isActive', label: 'ACTIVE', minWidth: 100 },
//   { id: 'actions', label: 'ACTION', minWidth: 170 },
// ];

// export default function PlantTable() {
//   const dispatch = useDispatch();
//   const plantData = useSelector(selectPlant);

//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);

//   React.useEffect(() => {
//     dispatch(fetchPlantData());
//   }, [dispatch]);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   return (
//     <Box
//       component="main"
//       sx={{
//         background: "#dddddd",
//         width: "100%",
//         p: 1.2,
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         marginTop: "15px",
//       }}
//     >
//       <Paper sx={{ width: '100%', overflow: 'hidden' }}>
//         <TableContainer sx={{ maxHeight: 440, maxWidth: '80vw', overflowX: 'auto' }}>
//           <Table stickyHeader aria-label="sticky table">
//             <TableHead>
//               <TableRow>
//                 {columns.map((column) => (
//                   <TableCell
//                     key={column.id}
//                     align={column.align}
//                     style={{ minWidth: column.minWidth, fontWeight: "700" }}
//                   >
//                     {column.label}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {plantData
//                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map((row) => {
//                   return (
//                     <TableRow hover role="checkbox" tabIndex={-1} key={row.plantCode}>
//                       {columns.map((column) => {
//                         const value = row[column.id];
//                         return (
//                           <TableCell key={column.id} align={column.align}>
//                             {column.id === 'actions' ? (
//                               <React.Fragment key={row.plantCode}>
//                                 <AddCircleIcon style={{ cursor: 'pointer', marginRight: 10, color: "green" }} />
//                                 <EditIcon style={{ cursor: 'pointer', marginRight: 10, color: "blue" }} />
//                                 <DeleteIcon style={{ cursor: 'pointer', marginRight: 10, color: "red" }} />
//                                 <ForwardIcon style={{ cursor: 'pointer', color: "purple" }} />
//                               </React.Fragment>
//                             ) : column.format && typeof value === "number" ? (
//                               column.format(value)
//                             ) : (
//                               value
//                             )}
//                           </TableCell>
//                         );
//                       })}
//                     </TableRow>
//                   );
//                 })}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <TablePagination
//           rowsPerPageOptions={[10, 25, 100]}
//           component="div"
//           count={plantData.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </Paper>
//     </Box>
//   );
// }













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
import { useDispatch, useSelector } from 'react-redux';
import { selectPlant } from '../../features/plants/plantSlice';
import { fetchPlantData } from '../../features/plants/plantAction';

const columns = [
  { id: 'plantCode', label: 'PLANT CODE', minWidth: 100 },
  { id: 'createdBy', label: 'CREATED BY', minWidth: 100 },
  { id: 'createdDate', label: 'CREATED DATE', minWidth: 150 },
  { id: 'contactPersonName', label: 'CONTACT PERSON NAME', minWidth: 150 },
  { id: 'contactPersonTitle', label: 'CONTACT PERSON TITLE', minWidth: 150 },
  { id: 'emailAddress', label: 'EMAIL', minWidth: 100 },
  { id: 'phoneNumber', label: 'PHONE NUMBER', minWidth: 100 },
  { id: 'companyWebsite', label: 'COMPANY WEBSITE', minWidth: 100 },
  { id: 'mailingAddress', label: 'MAIL ADDRESS', minWidth: 100 },
  { id: 'city', label: 'CITY', minWidth: 100 },
  { id: 'state_province', label: 'STATE', minWidth: 50 },
  { id: 'country', label: 'COUNTRY', minWidth: 50 },
  { id: 'isActive', label: 'ACTIVE', minWidth: 100 },
  { id: 'actions', label: 'ACTION', minWidth: 170 },
];

export default function PlantTable() {
  const dispatch = useDispatch();
  const plantData = useSelector(selectPlant);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  React.useEffect(() => {
    dispatch(fetchPlantData());
  }, [dispatch]);

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
        <TableContainer sx={{ maxHeight: 440, maxWidth: '77vw', overflowX: 'auto' }}>
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
              {plantData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.plantCode}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.id === 'actions' ? (
                              <React.Fragment key={row.plantCode}>
                                <AddCircleIcon style={{ cursor: 'pointer', marginRight: 10, color: "green" }} />
                                <EditIcon style={{ cursor: 'pointer', marginRight: 10, color: "blue" }} />
                                <DeleteIcon style={{ cursor: 'pointer', marginRight: 10, color: "red" }} />
                                <ForwardIcon style={{ cursor: 'pointer', color: "purple" }} />
                              </React.Fragment>
                            ) : (
                              String(value)
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
          count={plantData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
