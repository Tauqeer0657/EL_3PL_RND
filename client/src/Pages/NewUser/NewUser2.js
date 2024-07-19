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
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import CssBaseline from "@mui/material/CssBaseline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import "./NewUser.css";

const NewUser2 = () => {
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
            //   background: "pink",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CssBaseline />

            <Card sx={{ height: "100%", width: "80%" }}>
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
                  <Grid container spacing={0.5} mt={1}>
                    <Grid item xs={12}>
                      <TextField
                        label="welcome to ABC LLC"
                        variant="outlined"
                        name="Country"
                        required
                        fullWidth
                        size="small"
                        sx={{
                            marginTop: "5px",
                            marginBottom: "5px",
                          }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Select User type"
                        variant="outlined"
                        name="Country"
                        required
                        fullWidth
                        size="small"
                        sx={{
                            marginTop: "5px",
                            marginBottom: "5px",
                          }}
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <TextField
                        label="Your Full Name"
                        variant="outlined"
                        name="Country"
                        required
                        fullWidth
                        size="small"
                        sx={{
                            marginTop: "5px",
                            marginBottom: "5px",
                          }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        label="User ID"
                        variant="outlined"
                        name="Country"
                        required
                        fullWidth
                        size="small"
                        sx={{
                            marginTop: "5px",
                            marginBottom: "5px",
                          }}
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <TextField
                        label="Password"
                        variant="outlined"
                        name="Country"
                        required
                        fullWidth
                        size="small"
                        sx={{
                            marginTop: "5px",
                            marginBottom: "5px",
                          }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        label="Confirm Passowrd"
                        variant="outlined"
                        name="Country"
                        required
                        fullWidth
                        size="small"
                        sx={{
                            marginTop: "5px",
                            marginBottom: "5px",
                          }}
                      />
                    </Grid>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 2, mb: 2, bgcolor: "orange" }}
                    >
                      NEXT
                    </Button>
                  </Grid>
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

export default NewUser2;
