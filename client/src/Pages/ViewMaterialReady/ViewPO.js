import React from "react";

import Box from "@mui/material/Box";
import SideBar from "../../component/SideBar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import "./ViewMaterial.css";
import MaterialCard from "../MaterialReady/MaterialCard/MaterailCard";
import MaterialTable from "../MaterialReady/MaterialTable/MaterialTable";

export const ViewMaterialReady = () => {
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
        <div style={{ display: "flex", alignItems: "center" }}>
          <DashboardIcon
            sx={{ fontSize: "20px", marginRight: "5px", color: "orange" }}
          />
          <h4 style={{ margin: "10px 0px" }}>Overview</h4>
        </div>

   <MaterialCard/>
   <MaterialTable/>
      </Box>
    </Box>
  );
};

export default ViewMaterialReady;
