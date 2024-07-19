import React from 'react'
import CreatePlant from './CreatePlant'
import Box from "@mui/material/Box";
import SideBar from "../../component/SideBar";
import PlantTable from './PlantTable';

const Plants = () => {
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
        
       <CreatePlant/>
       <PlantTable/>
      </Box>
    </Box>
  )
}

export default Plants