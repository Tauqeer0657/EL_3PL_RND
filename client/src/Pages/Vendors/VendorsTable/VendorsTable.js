import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, Alert } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ForwardIcon from "@mui/icons-material/Forward";
import { useSelector, useDispatch } from "react-redux";
import { fetchVendorData, deleteVendorData } from "../../../features/vendors/vendorAction";
import { selectVendor, selectVendorLoading, selectVendorError } from "../../../features/vendors/vendorSlice";

const columns = [
  { id: "vendorCode", label: "VENDOR CODE", minWidth: 100 },
  { id: "createdBy", label: "CREATED BY", minWidth: 100 },
  { id: "createdDate", label: "CREATED DATE", minWidth: 150 },
  { id: "companyName", label: "COMPANY NAME", minWidth: 200 },
  { id: "contactPersonName", label: "CONTACT PERSON NAME", minWidth: 150 },
  { id: "contactPersonTitle", label: "CONTACT PERSON TITLE", minWidth: 150 },
  { id: "emailAddress", label: "EMAIL", minWidth: 150 },
  { id: "phoneNumber", label: "PHONE NUMBER", minWidth: 100 },
  { id: "companyWebsite", label: "COMPANY WEBSITE", minWidth: 150 },
  { id: "taxIdentificationNumber", label: "TIN", minWidth: 100 },
  { id: "dunsNumber", label: "DUNS NUMBER", minWidth: 100 },
  { id: "mailingAddress", label: "MAIL ADDRESS", minWidth: 150 },
  { id: "headQuartersAddress", label: "HEADQUARTERS ADDRESS", minWidth: 150 },
  { id: "city", label: "CITY", minWidth: 100 },
  { id: "state_province", label: "STATE", minWidth: 100 },
  { id: "country", label: "COUNTRY", minWidth: 100 },
  { id: "isActive", label: "ACTIVE", minWidth: 100 },
  { id: "actions", label: "ACTION", minWidth: 170 },
];

export default function VendorsTable() {
  const dispatch = useDispatch();
  const vendorData = useSelector(selectVendor);
  const loading = useSelector(selectVendorLoading);
  const error = useSelector(selectVendorError);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  const [selectedVendorCode, setSelectedVendorCode] = React.useState(null);
  const [success, setSuccess] = React.useState(false);
  const [errorAlert, setErrorAlert] = React.useState(null);

  React.useEffect(() => {
    dispatch(fetchVendorData());
  }, [dispatch]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClickOpen = (vendorCode) => {
    setSelectedVendorCode(vendorCode);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    try {
      await dispatch(deleteVendorData(selectedVendorCode)).unwrap();
      setSuccess(true);
    } catch (error) {
      setErrorAlert(typeof error === "object" && error.message ? error.message : "An error occurred");
    } finally {
      setOpen(false);
      setSelectedVendorCode(null);
    }
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
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        {loading && <Alert severity="info">Loading...</Alert>}
        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success" onClose={() => setSuccess(false)}>Successfully deleted</Alert>}
        {errorAlert && <Alert severity="error" onClose={() => setErrorAlert(null)}>{errorAlert}</Alert>}
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
              {vendorData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.vendorCode}
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
                                  onClick={() => handleClickOpen(row.vendorCode)}
                                />
                                <ForwardIcon
                                  style={{ cursor: "pointer", color: "purple" }}
                                />
                              </>
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
          sx={{ maxHeight: 440, maxWidth: "100vw", overflowX: "auto" }}
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={vendorData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Delete"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this vendor?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDelete} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
