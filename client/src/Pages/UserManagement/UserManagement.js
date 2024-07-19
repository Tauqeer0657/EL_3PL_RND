// import { Box } from "@mui/material";
// import React from "react";
// import SideBar from "../../component/SideBar";
// import PurchaseDocument from "./PurchaseDocument/PurchaseDocument";
// import ShipmentDetails from "./ShipmentDetails/ShipmentDetails";
// import PurchaseDocumentTable from "./PurchaseDocument/PurchaseDocumentTable";

// const UserManagement = () => {
//   return (
//     <Box sx={{ display: "flex" }}>
//       <SideBar />
//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           p: 3,
//           width:"100%",
//           height: "91.5vh",
//           marginTop: "55px",
//           background: "red",
//           display: "flex",
//         }}
//       >
//         <Box
//           sx={{
//             width:"80%",
//             background: "blue",
//           }}
//         >
//           <PurchaseDocument />
//           <PurchaseDocumentTable />
//         </Box>
//         <Box
//           sx={{
//             width:"20%",
//             background: "yellow",
//           }}
//         >
//           <ShipmentDetails />
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default UserManagement;

import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import SideBar from "../../component/SideBar";
import PurchaseDocument from "./PurchaseDocument/PurchaseDocument";
import ShipmentDetails from "./ShipmentDetails/ShipmentDetails";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

export default function UserManagement() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };



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
        <div style={{ display: "flex", justifyContent: "space-between", alignItems:"center" }}>
          <Button
            variant="contained"
            onClick={toggleDrawer(true)}
            sx={{ background: "orange", color: "white", margin: "10px 0px" }}
          >
            Open Shipment Details
          </Button>
          <Link to="/TrackingHome">
            <Button  variant="contained" sx={{ background: "orange", color: "white", margin: "10px 0px" }}>
              TRACK NEXT...
            </Button>
          </Link>
        </div>

        <Box
        >
          <PurchaseDocument />
        </Box>
      </Box>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 350 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <ShipmentDetails />
        </Box>
      </Drawer>
    </Box>
  );
}
