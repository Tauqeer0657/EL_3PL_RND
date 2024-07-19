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


const columns = [
  { id: "Item", label: "Vendor", minWidth: 50 },
  { id: "Item", label: "Item", minWidth: 50 },
  { id: "Material", label: "Material", minWidth: 100 },
  { id: "ShortDesc", label: "Short Desc", minWidth: 150 },
  { id: "QOH", label: "QOH", minWidth: 50 },
  { id: "Qty", label: "Qty", minWidth: 50 },
  { id: "DelDate", label: "Del.Date", minWidth: 100 },
  
];

export default function PurchaseDocumentTable({ purchaseDetails }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);


  console.log(purchaseDetails, "data show using purchaseDetails");




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
                    align="center"
                    style={{ minWidth: column.minWidth, fontWeight: "700" }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {purchaseDetails
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                   <TableCell align="center">{row.vendor_SupplyingPlant} -- {row.companyName}</TableCell>
                    <TableCell align="center">{row.item}</TableCell>
                    <TableCell align="center">{row.material}</TableCell>
                    <TableCell align="center">{row.shortText}</TableCell>
                    <TableCell align="center">{row.qtyOnHand}</TableCell>
                    <TableCell align="center">{row.quantity}</TableCell>
                    <TableCell align="center">{row.delDate}</TableCell>
              
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={purchaseDetails.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
