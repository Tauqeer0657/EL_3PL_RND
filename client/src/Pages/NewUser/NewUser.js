import React from "react";

import Box from "@mui/material/Box";
import elLogo from "../../assets/logo/emirateslogo.jpg";
import bgImg from "../../assets/logo/login-bg.png";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
} from "@mui/material";

import CssBaseline from "@mui/material/CssBaseline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import "./NewUser.css";

const NewUser = () => {
  return (
    <Box
      className="NewUser"
      component="main"
      sx={{
        flexGrow: 1,
      }}
    >
      {/* header  */}
      <Box className="NewUser-header">
        <Box className="NewUser-header-logo">
          <img
            src={elLogo}
            alt="logo"
            style={{ height: "50px", width: "436px" }}
          />
        </Box>
      </Box>

      {/* login page  */}
      <div
        className="login-bg"
        style={{
          width: "100%",
          height: "90%",
          background: "#031f63",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "50%",
            height: "100%",
            // background: "yellow",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={bgImg}
            alt="backgroundImg"
            style={{ width: "60%", height: "60%" }}
          />
        </div>
        <div
          style={{
            width: "50%",
            height: "100%",
            // background: "red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Container
            sx={{
              width: "80%",
              height: "80%",
              // background: "pink",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CssBaseline />

            <Card sx={{ height: "70%", width: "70%" }}>
              <CardContent>
                <span style={{ display: "flex", justifyContent: "center" }}>
                  <Avatar sx={{ m: 1, bgcolor: "#222b48", color: "white" }}>
                    <LockOutlinedIcon />
                  </Avatar>
                </span>
                <Typography
                  style={{ display: "flex", justifyContent: "center" }}
                  component="h1"
                  variant="h6"
                >
                  NEW USER
                </Typography>
                <form>
                  <Box noValidate sx={{ mt: 1 }}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="code"
                      label="Enter your Company or Vendor Code"
                      name="code"
                      autoFocus
                    />

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 2, mb: 2, bgcolor: "orange" }}
                    >
                      NEXT
                    </Button>
                  </Box>
                </form>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "14px",
                    color: "grey",
                    mt: 2,
                  }}
                >
                  LOGIN
                </Typography>
              </CardContent>
            </Card>
          </Container>
        </div>
      </div>
    </Box>
  );
};

export default NewUser;

// import React from "react";

// import Box from "@mui/material/Box";
// import elLogo from "../../assets/logo/emirateslogo.jpg";
// import bgImg from "../../assets/logo/login-bg.png";
// import {
//   Avatar,
//   Button,
//   Card,
//   CardContent,
//   Container,
//   Grid,
//   Stack,
//   TextField,
//   Typography,
// } from "@mui/material";

// import CssBaseline from "@mui/material/CssBaseline";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

// import "./Login-bg.css";

// const LoginPage = () => {
//   return (
//     <Box
//       className="TrackingHomepage"
//       component="main"
//       sx={{
//         flexGrow: 1,
//         height: "100vh",
//         width: "100vw",
//         background: "grey",
//       }}
//     >
//       {/* header  */}
//       <div
//         style={{
//           width: "100%",
//           height: "10%",
//           background: "white",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "flex-start",
//         }}
//       >
//         <div
//           style={{
//             width: "436px",
//             height: "50px",

//             marginLeft: "10px",
//           }}
//         >
//           <img
//             src={elLogo}
//             alt="logo"
//             style={{ height: "50px", width: "436px" }}
//           />
//         </div>
//       </div>

//       {/* login page  */}
//       <div
//         className="login-bg"
//         style={{
//           width: "100%",
//           height: "90%",
//           background: "#031f63",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <div
//           style={{
//             width: "50%",
//             height: "100%",
//             // background: "yellow",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <img
//             src={bgImg}
//             alt="backgroundImg"
//             style={{ width: "60%", height: "60%" }}
//           />
//         </div>
//         <div
//           style={{
//             width: "50%",
//             height: "100%",
//             background: "red",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <Box
//             component="form"
//             p={2}
//             sx={{
//               "& .MuiTextField-root": { m: 1, width: "calc(100% - 16px)" },
//               background: "yellow",
//               width: "50%",
//               height: "50%",
//             }}
//             noValidate
//             autoComplete="off"
//           >
//             <span style={{ display: "flex", justifyContent: "center" }}>
//               <Avatar sx={{ m: 1, bgcolor: "#222b48", color: "white" }}>
//                 <LockOutlinedIcon />
//               </Avatar>
//             </span>
//             <Typography
//               style={{ display: "flex", justifyContent: "center" }}
//               component="h1"
//               variant="h6"
//             >
//               NEW USER
//             </Typography>

//             <Grid container mt={2}>
//               <Grid item xs={12}>
//                 <TextField
//                   label="Enter your Company or Vendor Code"
//                   variant="outlined"
//                   name="Code"
//                   required
//                   fullWidth
//                   InputProps={{
//                     readOnly: true,
//                   }}
//                 />
//               </Grid>
//               <Grid
//                 container
//                 mt={1}
//                 sx={{
//                   display: "flex",
//                   justifyContent: "flex-end",
//                   alignItems: "center",

//                 }}
//               >
//                 <Grid item xs={6}>
//                   <Stack  direction="row">
//                     <Button
//                       variant="contained"
//                       sx={{ flexGrow: 1, background:"orange" }}

//                     >
//                       NEXT
//                     </Button>
//                   </Stack>
//                 </Grid >
//               </Grid>
//               <Grid
//                 container
//                 mt={2}
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   width: "100%",
//                 }}
//               >
//               <Typography
//                     sx={{
//                       display: "flex",
//                       justifyContent: "center",
//                       fontSize: "15px",
//                       color: "grey",
//                       mt: 1,
//                     }}
//                   >
//                     LOGIN
//                   </Typography>
//               </Grid>
//             </Grid>
//           </Box>
//         </div>
//       </div>
//     </Box>
//   );
// };

// export default LoginPage;
