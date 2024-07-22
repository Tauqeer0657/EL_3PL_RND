import {
  Box,
  Grid,
  Button,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import React, { useState, useEffect } from "react";
import FactoryIcon from "@mui/icons-material/Factory";
import WidgetsIcon from "@mui/icons-material/Widgets";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Modal from "@mui/material/Modal";
import VendorModalTable from "./VendorModalTable";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import {
  createVendor,
  fetchVendorData,
} from "../../../features/vendors/vendorAction";
import { selectVendor } from "../../../features/vendors/vendorSlice";
import { addVendorLocation } from "../../../features/vendorLocation/vendorLocationAction";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxHeight: "90%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  overflow: "auto",
};

const CreateVendor = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [validated, setValidated] = useState(false);
  const [vendorData, setVendorData] = useState({
    vendorCode: "",
    companyName: "",
    contactPersonName: "",
    contactPersonTitle: "",
    emailAddress: "",
    phoneNumber: "",
    companyWebsite: "",
    taxIdentificationNumber: "",
    dunsNumber: "",
    headQuartersAddress: "",
    mailingAddress: "",
    city: "",
    state_province: "",
    postal_zipCode: "",
    country: "",
  });

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setVendorData((prevState) => ({
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

    dispatch(
      createVendor({
        ...vendorData,
      })
    ).then(() => {
      setVendorData({
        vendorCode: "",
        companyName: "",
        contactPersonName: "",
        contactPersonTitle: "",
        emailAddress: "",
        phoneNumber: "",
        companyWebsite: "",
        taxIdentificationNumber: "",
        dunsNumber: "",
        headQuartersAddress: "",
        mailingAddress: "",
        city: "",
        state_province: "",
        postal_zipCode: "",
        country: "",
      });
    });
  };




  const [vendorLocationData, setVendorLocationData] = useState({
    vendorCode: "",
    vendorLocationCode: "",
    address: "",
    city: "",
    state_province: "",
    postal_zipCode: "",
    country: "",
    isActive: "true",
    createdBy: "admin",
    createdDate: new Date().toISOString().split("T")[0],
  });

  const handleModalInputChange = (event) => {
    const { name, value } = event.target;
    setVendorLocationData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleModalSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    dispatch(
      addVendorLocation({
        ...vendorLocationData,
      })
    ).then(() => {
      setVendorLocationData({
        vendorCode: "",
        vendorLocationCode: "",
        address: "",
        city: "",
        state_province: "",
        postal_zipCode: "",
        country: "",
        isActive: "true",
        createdBy: "admin",
        createdDate: new Date().toISOString().split("T")[0],
      });
    });
  };

  useEffect(() => {
    dispatch(fetchVendorData());
  }, [dispatch]);

  const vendorCodeData = useSelector(selectVendor);
  // console.log(vendorCodeData, "data");

  return (
    <Box
      className="createVendor-main"
      component="main"
      sx={{
        p: 1.2,
      }}
    >
      <Box className="createVendor-header">
        <FactoryIcon sx={{ marginRight: "10px", color: "orange" }} />
        <h4>CREATE VENDOR</h4>
      </Box>

      <form onSubmit={handleSubmit}>
        <Box className="createVendor-formSection">
          <Box className="createVendor-formSection-left">
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
              <Box className="createVendor-formSection-leftHeader">
                <WidgetsIcon sx={{ color: "orange" }} />
                <h4 style={{ margin: 10 }}>Personal Details</h4>
              </Box>

              <Grid container spacing={0.5}>
                <Grid item xs={6}>
                  <TextField
                    label="Vendor Code"
                    variant="outlined"
                    name="vendorCode"
                    required
                    fullWidth
                    size="small"
                    value={vendorData.vendorCode}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Company Name"
                    variant="outlined"
                    name="companyName"
                    required
                    fullWidth
                    size="small"
                    value={vendorData.companyName}
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
                    value={vendorData.contactPersonName}
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
                    value={vendorData.contactPersonTitle}
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
                    value={vendorData.emailAddress}
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
                    value={vendorData.phoneNumber}
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
                    value={vendorData.companyWebsite}
                    onChange={handleInputChange}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    label="Tax Identification Number (TIN)"
                    variant="outlined"
                    name="taxIdentificationNumber"
                    required
                    fullWidth
                    size="small"
                    value={vendorData.taxIdentificationNumber}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="DUNS Number (if applicable)"
                    variant="outlined"
                    name="dunsNumber"
                    required
                    fullWidth
                    size="small"
                    value={vendorData.dunsNumber}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Headquarters Address"
                    variant="outlined"
                    name="headQuartersAddress"
                    required
                    fullWidth
                    size="small"
                    value={vendorData.headQuartersAddress}
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
                    value={vendorData.mailingAddress}
                    onChange={handleInputChange}
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Box className="createVendor-formSection-right">
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
              <Box className="createVendor-formSection-rightHeader">
                <LocalShippingIcon sx={{ color: "#F90" }} />
                <h4 style={{ margin: 10 }}>Vendor Address</h4>
              </Box>
              <Grid container spacing={0.5}>
                <Grid item xs={6}>
                  <TextField
                    label="City"
                    variant="outlined"
                    name="city"
                    required
                    fullWidth
                    size="small"
                    value={vendorData.city}
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
                    value={vendorData.state_province}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Postal/Zip Code"
                    variant="outlined"
                    name="postal_zipCode"
                    required
                    fullWidth
                    size="small"
                    value={vendorData.postal_zipCode}
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
                    value={vendorData.country}
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
          </Box>
        </Box>
      </form>

      <Box className="createVendor-bottomSection">
        <Box className="createVendor-bottomSection-header">
          <h4>VENDOR LOCATION</h4>
        </Box>

        <Box className="createVendor-bottomSection-form">
          <Box className="createVendor-bottomSection-form-top">
            <Button
              size="small"
              variant="contained"
              sx={{ textTransform: "none", background: "#f90"}}
              onClick={handleOpen}
            >
              + ADD NEW VENDOR LOCATION
            </Button>
          </Box>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Box
                className="createVendor-bottomSection-form-modal-header"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Add New Vendor Location
                </Typography>
                <Button
                  size="small"
                  variant="contained"
                  sx={{ textTransform: "none" }}
                  onClick={handleClose}
                >
                  <CloseIcon />
                </Button>
              </Box>

              <Box
                component="form"
                noValidate
                autoComplete="off"
                onSubmit={handleModalSubmit}
              >
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <FormControl
                      fullWidth
                      variant="outlined"
                      size="small"
                      required
                    >
                      <InputLabel id="vendorCode-label">Vendor Code</InputLabel>
                      <Select
                        labelId="vendorCode-label"
                        id="vendorCode"
                        name="vendorCode"
                        value={vendorLocationData.vendorCode}
                        onChange={handleModalInputChange}
                        label="Vendor Code"
                      >
                        {vendorCodeData.map((code) => (
                          <MenuItem
                            key={code.vendorCode}
                            value={code.vendorCode}
                          >
                            {code.vendorCode} - {code.companyName}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Vendor Location Code"
                      variant="outlined"
                      name="vendorLocationCode"
                      required
                      fullWidth
                      size="small"
                      value={vendorLocationData.vendorLocationCode}
                      onChange={handleModalInputChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Address"
                      variant="outlined"
                      name="address"
                      required
                      fullWidth
                      size="small"
                      value={vendorLocationData.address}
                      onChange={handleModalInputChange}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="City"
                      variant="outlined"
                      name="city"
                      required
                      fullWidth
                      size="small"
                      value={vendorLocationData.city}
                      onChange={handleModalInputChange}
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
                      value={vendorLocationData.state_province}
                      onChange={handleModalInputChange}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Postal/Zip Code"
                      variant="outlined"
                      name="postal_zipCode"
                      required
                      fullWidth
                      size="small"
                      value={vendorLocationData.postal_zipCode}
                      onChange={handleModalInputChange}
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
                      value={vendorLocationData.country}
                      onChange={handleModalInputChange}
                    />
                  </Grid>
                </Grid>

                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ mt: 2, justifyContent: "end" }}
                >
                  <Button
                    type="submit"
                    size="small"
                    variant="contained"
                    sx={{ textTransform: "none" }}
                  >
                    Save Location
                  </Button>
                </Stack>
              </Box>
              <Box className="createVendor-bottomSection-form-table">
                <VendorModalTable />
              </Box>
            </Box>
          </Modal>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateVendor;
