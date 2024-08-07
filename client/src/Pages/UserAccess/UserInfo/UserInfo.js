import { Box, Button, Grid, Stack, TextField } from '@mui/material';
import React from 'react';
import ProfilePhoto from "../../../assets/logo/profilepic2.jpg";
import AccessTable from '../AccessTable/AccessTable';


const UserInfo = ({ user }) => {
  

  return (
    <Box sx={{ width: "100%", }}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          background: "#f3f3f3",
          padding: "10px",
          display: "flex"
        }}
      >
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": {
              m: 0.6,
              width: "calc(100% - 10px)",
              "& .MuiInputBase-root": {
                fontSize: "0.8rem",
              },
              "& .MuiInputLabel-root": {
                fontSize: "0.8rem",
              },
            },

            height: "100%",
            width: "65%",
          }}
          noValidate
          autoComplete="off"
        >
          <Grid container>
            <Grid item xs={6}>
              <TextField
                label="registration ID"
                variant="outlined"
                name="registrationID"
                required
                fullWidth
                size="small"
                value={user ? user.registrationID : ""}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="company Vendor Code"
                variant="outlined"
                name="companyVendorCode"
                required
                fullWidth
                size="small"
                value={user ? user.companyVendorCode : ""}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="user Name"
                variant="outlined"
                name="userFullName"
                required
                fullWidth
                size="small"
                value={user ? user.userFullName : ""}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="isActive"
                variant="outlined"
                name="isActive"
                required
                fullWidth
                size="small"
                value={user ? user.isActive : ""}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="createdBy"
                variant="outlined"
                name="createdBy"
                required
                fullWidth
                size="small"
                value={user ? user.createdBy : ""}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="createdDate"
                variant="outlined"
                name="createdDate"
                required
                fullWidth
                size="small"
                value={user ? user.createdDate : ""}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            
          </Grid>
        </Box>
        <Box
          sx={{
            width: "35%",

            padding: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <img src={ProfilePhoto} alt="photo" style={{ width: "30%" }} />
          <Box sx={{ width: "65%" }}>
            <Stack spacing={1}>
              <Button variant="contained" sx={{ flexGrow: 1, fontSize: "10px" }}>
                Password reset
              </Button>
              <Button variant="contained" sx={{ flexGrow: 1, fontSize: "11px" }} color="error">
                Block
              </Button>
              <Button variant="contained" sx={{ flexGrow: 1, fontSize: "11px" }} color="success">
                Activate
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          maxWidth: "100%",
          background: "#f3f3f3",
          padding: "10px",
          marginTop: "10px",
        }}
      >
       <AccessTable  USER_CD={user? user.registrationID: null}/>
      </Box>
    </Box>
  );
};

export default UserInfo;
