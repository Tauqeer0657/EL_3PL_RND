import React from 'react'
import Box from "@mui/material/Box";
import SideBar from "../../component/SideBar";
import CreateUserType from './CreateUserType/CreateUserType';
import UserTypeTable from './UserTypeTable/UserTypeTable';
import "./UserType.css"
const  UserType = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginTop: "55px",
         
        }}
      >
        
     <CreateUserType/>
     <UserTypeTable/>
      </Box>
    </Box>
  )
}

export default UserType