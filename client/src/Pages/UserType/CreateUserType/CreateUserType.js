import { Box, Grid, Button, TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import React from "react";
import FactoryIcon from "@mui/icons-material/Factory";
import WidgetsIcon from "@mui/icons-material/Widgets";

const CreateUserType = () => {
  return (
    <Box
      className="UserType-main"
      component="main"
      sx={{
        p: 1.2,
      }}
    >
      <Box className="UserType-Header">
        <FactoryIcon sx={{ marginRight: "10px", color: "orange" }} />
        <h4>CREATE USER TYPE</h4>
      </Box>

      {/* usertype details  */}
      <Box
      className="UserType-formSection"

      >
        <div
          style={{
            width: "50%",
            padding: "10px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "calc(100% - 16px)" },
              background: "#f3f3f3",
              height: "100%",
              width: "100%",
            }}
            noValidate
            autoComplete="off"
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                paddingLeft: "10px",
              }}
            >
              <WidgetsIcon sx={{ color: "orange" }} />
              <h4 style={{ margin: 10 }}>User Details</h4>
            </div>

            <Grid container spacing={0.5}>
              <Grid item xs={6}>
                <TextField
                  label="User Type"
                  variant="outlined"
                  name="UserType"
                  required
                  fullWidth
                  size="small"
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Company Type"
                  variant="outlined"
                  name="CompanyType"
                  required
                  fullWidth
                  size="small"
                />
              </Grid>
            </Grid>
          </Box>
        </div>
        <div
          style={{
            width: "50%",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "calc(100% - 16px)" },
              background: "#f3f3f3",
            }}
            noValidate
            autoComplete="off"
          ></Box>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "calc(100% - 16px)" },
            }}
            noValidate
            autoComplete="off"
          >
            <Grid container spacing={0.5}>
              <Grid item xs={12}>
                <Stack spacing={2} direction="row" sx={{ width: "100%" }}>
                  <Button
                    variant="contained"
                    sx={{ flexGrow: 1 }}
                    color="error"
                  >
                    DELETE
                  </Button>
                  <Button variant="contained" sx={{ flexGrow: 1 }}>
                    EDIT
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ flexGrow: 1 }}
                    color="success"
                  >
                    SAVE
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Box>
    </Box>
  );
};

export default CreateUserType;
