// import React from "react";

// import Box from "@mui/material/Box";

// import "./TrackingHome.css";
// import truckgif from "../../assets/logo/sun.gif";
// import elLogo from "../../assets/logo/el_short_logo.png";

// import TextField from "@mui/material/TextField";
// import { Button } from "@mui/material";

// const TrackingHome = () => {
//   return (
//     <Box
//       className="TrackingHomepage"
//       component="main"
//       sx={{
//         flexGrow: 1,
//         px: 2,
//       }}
//     >
//       <div className="TrackingHome-upperpage">
//         <div className="upperpage-header">
//           <div className="upperpage-header-logo">
//             <img
//               src={elLogo}
//               alt="logo"
//               style={{ width: "100%", height: "auto" }}
//             />
//           </div>
//         </div>
//         <div className="upperpage-main">
//           <div className="upperpage-main-card">
//             <div className="main-card-upper">
//               <h4 style={{ margin: "10px" }}>TRACK YOUR SHIPMENT</h4>
//               <div className="main-card-upper-gif">
//                 <img
//                   src={truckgif}
//                   alt="truck"
//                   style={{ width: "100%", height: "auto" }}
//                 />
//               </div>
//             </div>
//             <Box
//               component="form"
//               className="main-card-lowerform"
//               sx={{
//                 "& > :not(style)": { m: 1, width: "25ch" },
//               }}
//               noValidate
//               autoComplete="off"
//             >
//               <TextField
//                 id="outlined-basic"
//                 label="Enter your PO No"
//                 variant="outlined"
//                 size="small"
//                 sx={{ background: "white" }}
//               />
//               <Button variant="contained" sx={{ background: "orange" }}>
//                 Track
//               </Button>
//             </Box>
//           </div>
//         </div>
//       </div>
//       <div className="TrackingHome-lowerpage">
//         <div className="lowerpage-rightside">
//           <ul className="lowerpage-rightside-ul">
//             <li>TRACK YOUR SHIPMENT</li>
//             <li>FEEDBACK</li>
//             <li>LOGIN</li>
//           </ul>
//         </div>
//       </div>
//     </Box>
//   );
// };

// export default TrackingHome;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./TrackingHome.css";
import truckgif from "../../assets/logo/sun.gif";
import elLogo from "../../assets/logo/el_short_logo.png";

const TrackingHome = () => {
  const [purchDoc, setPurchDoc] = useState("");
  const navigate = useNavigate();

  const handleTrackClick = async () => {
    if (!purchDoc) {
      alert("Please enter a PO Number");
      return;
    }

    try {
      const response = await fetch(
        `/api/poDetails/getVendorSupplyPlant/${purchDoc}`
      );
      const data = await response.json();
      

      if (response.ok) {
        navigate(`/UserManagement/purchDoc/${purchDoc}`);
      } else {
        alert("Error fetching PO details. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching PO details:", error);
      alert("Error fetching PO details. Please try again.");
    }
  };

  return (
    <Box
      className="TrackingHomepage"
      component="main"
      sx={{
        flexGrow: 1,
        px: 2,
      }}
    >
      <div className="TrackingHome-upperpage">
        <div className="upperpage-header">
          <div className="upperpage-header-logo">
            <img
              src={elLogo}
              alt="logo"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
        <div className="upperpage-main">
          <div className="upperpage-main-card">
            <div className="main-card-upper">
              <h4 style={{ margin: "10px" }}>TRACK YOUR SHIPMENT</h4>
              <div className="main-card-upper-gif">
                <img
                  src={truckgif}
                  alt="truck"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
            <Box
              component="form"
              className="main-card-lowerform"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Enter your PO No"
                variant="outlined"
                size="small"
                sx={{ background: "white" }}
                value={purchDoc}
                onChange={(e) => setPurchDoc(e.target.value)}
              />
              <Button
                variant="contained"
                sx={{ background: "orange" }}
                onClick={handleTrackClick}
              >
                Track
              </Button>
            </Box>
          </div>
        </div>
      </div>
      <div className="TrackingHome-lowerpage">
       
          <ul className="lowerpage-rightside-ul">
            <li>TRACK YOUR SHIPMENT</li>
            <li>FEEDBACK</li>
            <li>LOGIN</li>
          </ul>
     
      </div>
    </Box>
  );
};

export default TrackingHome;
