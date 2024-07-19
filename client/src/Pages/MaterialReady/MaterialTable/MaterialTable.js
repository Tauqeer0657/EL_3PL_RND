import * as React from "react";
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
import { fetchPoDetails } from "../../../features/POdetails/PoAction";
import { selectPoDetails } from "../../../features/POdetails/PoSlice";

const columns = [
  { id: "vendorCode", label: "VENDOR CODE", minWidth: 150 },
  { id: "vendorLocationCode", label: "VENDOR LOCATION CODE", minWidth: 150 },
  { id: "isActive", label: "IS ACTIVE", minWidth: 100 },
  { id: "matDoc", label: "MAT DOC", minWidth: 150 },
  { id: "material", label: "MATERIAL", minWidth: 150 },
  { id: "materialDescription", label: "MATERIAL DESCRIPTION", minWidth: 200 },
  { id: "mvt", label: "MVT", minWidth: 100 },
  { id: "planning", label: "PLANNING", minWidth: 150 },
  { id: "plantCode", label: "PLANT CODE", minWidth: 150 },
  { id: "poConfirmationDate", label: "PO CONFIRM. DATE", minWidth: 150 },
  { id: "poDate", label: "PO DATE", minWidth: 150 },
  { id: "poNumber", label: "PO NUMBER", minWidth: 150 },
  { id: "poRegistrationDate", label: "PO REGIST. DATE", minWidth: 150 },
  { id: "qty", label: "QTY", minWidth: 50 },
  { id: "unitOfEntry", label: "UOM", minWidth: 50 },
  { id: "createdBy", label: "CREATE BY", minWidth: 150 },
  { id: "createdDate", label: "CREATED DATE", minWidth: 150 },
  { id: "actions", label: "ACTIONS", minWidth: 200 },
];

export default function MaterialTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const dispatch = useDispatch();
  const poDetails = useSelector(selectPoDetails);

  console.log(poDetails);

  React.useEffect(() => {
    dispatch(fetchPoDetails());
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
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: "15px",
      }}
    >
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer
          sx={{ maxHeight: 440, maxWidth: "77vw", overflowX: "auto" }}
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
              {poDetails
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.poNumber}
                    >
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
                            ) : column.id === "isActive" ? (
                              value ? (
                                "Active"
                              ) : (
                                "Inactive"
                              )
                            ) : column.format && typeof value === "number" ? (
                              column.format(value)
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
          count={poDetails.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
