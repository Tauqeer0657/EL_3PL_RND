import { Box, Grid, Button, TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import React, { useState } from "react";
import FactoryIcon from "@mui/icons-material/Factory";
import WidgetsIcon from "@mui/icons-material/Widgets";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { useDispatch } from "react-redux";
import { createPlant } from "../../features/plants/plantAction";

const CreatePlant = () => {
  const [validated, setValidated] = useState(false);
  const [PlantData, setPlantData] = useState({
    plantCode: "",
    contactPersonName: "",
    contactPersonTitle: "",
    emailAddress: "",
    phoneNumber: "",
    companyWebsite: "",
    mailingAddress: "",
    city: "",
    state_province: "",
    postal_zipCode: "",
    country: "",
    createdBy: "",
  });

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPlantData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    dispatch(createPlant({ ...PlantData })).then(() => {
      setPlantData({
        plantCode: "",
        contactPersonName: "",
        contactPersonTitle: "",
        emailAddress: "",
        phoneNumber: "",
        companyWebsite: "",
        mailingAddress: "",
        city: "",
        state_province: "",
        postal_zipCode: "",
        country: "",
        createdBy: "",
      });
    });
  };

  return (
    <Box
      component="main"
      sx={{
        background: "#dddddd",
        width: "100%",
        p: 1.2,
        marginTop: "10px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "70px",
          background: "white",
          display: "flex",
          alignItems: "center",
          color: "grey",
          padding: "10px",
        }}
      >
        <FactoryIcon sx={{ marginRight: "10px", color: "orange" }} />
        <h4>CREATE PLANT</h4>
      </div>

      {/* plant details  */}
      <form onSubmit={handleSubmit}>
        <div
          style={{
            width: "100%",
            height: "75%",
            background: "white",
            marginTop: "10px",
         
            display: "flex",
          }}
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
                <h4 style={{ margin: 10 }}>Personal details</h4>
              </div>

              <Grid container spacing={0.5}>
                <Grid item xs={6}>
                  <TextField
                    label="Plant Code"
                    variant="outlined"
                    name="plantCode"
                    required
                    fullWidth
                    size="small"
                    value={PlantData.plantCode}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Contact Person Name"
                    variant="outlined"
                    name="contactPersonName"
                    required
                    fullWidth
                    size="small"
                    value={PlantData.contactPersonName}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Contact Person Title"
                    variant="outlined"
                    name="contactPersonTitle"
                    required
                    fullWidth
                    size="small"
                    value={PlantData.contactPersonTitle}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Email Address"
                    variant="outlined"
                    name="emailAddress"
                    type="email"
                    required
                    fullWidth
                    size="small"
                    value={PlantData.emailAddress}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Phone Number"
                    variant="outlined"
                    name="phoneNumber"
                    type="number"
                    required
                    fullWidth
                    size="small"
                    value={PlantData.phoneNumber}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Company Website"
                    variant="outlined"
                    name="companyWebsite"
                    required
                    fullWidth
                    size="small"
                    value={PlantData.companyWebsite}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Mailing Address"
                    variant="outlined"
                    name="mailingAddress"
                    required
                    fullWidth
                    size="small"
                    value={PlantData.mailingAddress}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Created by"
                    variant="outlined"
                    name="createdBy"
                    required
                    fullWidth
                    size="small"
                    value={PlantData.createdBy}
                    onChange={handleInputChange}
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
              sx={{
                "& .MuiTextField-root": { m: 1, width: "calc(100% - 16px)" },
                background: "#f3f3f3",
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
                <LocalShippingIcon sx={{ color: "orange" }} />
                <h4 style={{ margin: 10 }}>Address details</h4>
              </div>

              <Grid container spacing={0.5}>
                <Grid item xs={6}>
                  <TextField
                    label="City"
                    variant="outlined"
                    name="city"
                    required
                    fullWidth
                    size="small"
                    value={PlantData.city}
                    onChange={handleInputChange}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    label="State/Province"
                    variant="outlined"
                    name="state_province"
                    required
                    fullWidth
                    size="small"
                    value={PlantData.state_province}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Postal/ZIP Code"
                    variant="outlined"
                    name="postal_zipCode"
                    required
                    fullWidth
                    size="small"
                    value={PlantData.postal_zipCode}
                    onChange={handleInputChange}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    label="Country"
                    variant="outlined"
                    name="country"
                    required
                    fullWidth
                    size="small"
                    value={PlantData.country}
                    onChange={handleInputChange}
                  />
                </Grid>
              </Grid>
            </Box>
            <Box
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
                      type="submit"
                    >
                      SAVE
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>
      </form>
    </Box>
  );
};

export default CreatePlant;
