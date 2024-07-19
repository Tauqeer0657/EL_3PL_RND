import React from "react";

import Box from "@mui/material/Box";
import SideBar from "../../component/SideBar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import "./MaterialReady.css";
import MaterialCard from "./MaterialCard/MaterailCard";
import CreateMaterial from "./CreateMaterial/CreateMaterial";
import MaterialTable from "./MaterialTable/MaterialTable";

export const MaterailReady = () => {
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
        <Box style={{display:"flex", alignItems:"center"}}>
          <DashboardIcon sx={{fontSize:"20px" , marginRight:"5px", color:"orange"}} />
          <h4 style={{ margin: "10px 0px" }}>Material Ready</h4>
        </Box >

        <MaterialCard/>
        <CreateMaterial/>
       <MaterialTable/>
      </Box>
    </Box>
  );
};
