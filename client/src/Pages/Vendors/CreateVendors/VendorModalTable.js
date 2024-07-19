import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ForwardIcon from "@mui/icons-material/Forward";
import { useDispatch, useSelector } from "react-redux";
import { selectVendorLocation } from "../../../features/vendorLocation/vendorLocationSlice";
import { fetchVendorLocationData } from "../../../features/vendorLocation/vendorLocationAction";

const columns = [
  { id: "vendorLocationCode", label: "Vendor Location Code", minWidth: 100 },
  { id: "vendorCode", label: "Vendor Code", minWidth: 100 },
  { id: "address", label: "Address", minWidth: 250 },
  { id: "city", label: "City", minWidth: 100 },
  { id: "state_province", label: "State/Province", minWidth: 100 },
  { id: "postal_zipCode", label: "Postal/ZIP Code", minWidth: 100 },
  { id: "country", label: "Country", minWidth: 100 },
  { id: "actions", label: "Actions", minWidth: 170, align: "center" },
];


export default function VendorModalTable() {
  const dispatch = useDispatch();
  const vendorLocationData = useSelector(selectVendorLocation);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  React.useEffect(() => {
    dispatch(fetchVendorLocationData());
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
       height:"100%",
        overflow:"auto",
        width: "100%",
        p: 1.2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "15px",
      }}
    >
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer
          sx={{ maxHeight: 440, maxWidth: "80vw", overflowX: "auto" }}
        >
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
              {vendorLocationData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.id === "actions" ? (
                              <>
                                <AddCircleIcon
                                  style={{
                                    cursor: "pointer",
                                    marginRight: 10,
                                    color: "green",
                                  }}
                                />
                                <EditIcon
                                  style={{
                                    cursor: "pointer",
                                    marginRight: 10,
                                    color: "blue",
                                  }}
                                />
                                <DeleteIcon
                                  style={{
                                    cursor: "pointer",
                                    marginRight: 10,
                                    color: "red",
                                  }}
                                  
                                />
                                <ForwardIcon
                                  style={{ cursor: "pointer", color: "purple" }}
                                />
                              </>
                            ) : (
                              value
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
          count={vendorLocationData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
