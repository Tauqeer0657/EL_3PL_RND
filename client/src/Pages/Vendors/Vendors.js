import React from 'react'
import Box from "@mui/material/Box";
import SideBar from "../../component/SideBar";
import CreateVendor from './CreateVendors/CreateVendor';
import VendorsTable from './VendorsTable/VendorsTable';
import "./Vendors.css";


const Vendors = () => {
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
       <CreateVendor/>
       <VendorsTable/>
      </Box>
    </Box>
  )
}

export default Vendors