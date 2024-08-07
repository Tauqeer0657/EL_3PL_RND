import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, Paper, TablePagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserCreationData } from "../../../features/userCreation/userCreationSlice";
import UserInfo from "../UserInfo/UserInfo";

const columns = [
  { id: "registrationID", label: "Registration ID", minWidth: 70 },
  { id: "userName", label: "user Name", minWidth: 120 },
];

const UserList = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedUser, setSelectedUser] = useState(null);

  const dispatch = useDispatch();
  const userCreation = useSelector((state) => state.userCreation);

  console.log(userCreation, "userdata");

  useEffect(() => {
    dispatch(fetchUserCreationData());
  }, [dispatch]);

  if (userCreation.status === "loading") {
    return <div>Loading...</div>;
  }

  if (userCreation.status === "failed") {
    return <div>Error: {userCreation.error}</div>;
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleRowClick = (UserData) => {
    setSelectedUser(UserData);
  };

  const UserListWidth = 270; // Example fixed width for UserList

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        background: "#dddddd",
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          width: `${UserListWidth}px`,
          height: "100%",
          background: "white",
          overflowX: "auto",
          padding: "10px",
        }}
      >
        <TableContainer component={Paper} sx={{ width: "100%", maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      fontWeight: "700",
                      padding: "10px",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {userCreation.data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((UserData) => (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={UserData.id}
                    onClick={() => handleRowClick(UserData)}
                    style={{ cursor: "pointer" }}
                  >
                    {columns.map((column) => {
                      const value = UserData[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ padding: "10px" }}
                        >
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={userCreation.data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          height: "100%",
          background: "white",
          overflowX: "auto",
          width: `calc(100% - ${UserListWidth}px)`,
          padding: "10px",
        }}
      >
      <UserInfo user={selectedUser}/>
      </Box>
    </Box>
  );
};

export default UserList;
