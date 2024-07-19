import {
  Box,
  Grid,
  styled,
  Button,
  TextField,
  Stack,
  Alert,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import FactoryIcon from "@mui/icons-material/Factory";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DownloadIcon from "@mui/icons-material/Download";
import WidgetsIcon from "@mui/icons-material/Widgets";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { useDispatch } from "react-redux";
import { createPoDetails } from "../../../features/POdetails/PoAction";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const CreateMaterial = () => {
  const [validated, setValidated] = useState(false);
  const [poDetails, setPoDetails] = useState({
    poNumber: "",
    poDate: new Date().toISOString().split("T")[0],
    vendorCode: "",
    vendorLocationCode: "",
    matDoc: "",
    mvt: "",
    material: "",
    materialDescription: "",
    qty: "",
    unitOfEntry: "",
    plantCode: "",
    poRegistrationDate: "",
    poConfirmationDate: "",
    planning: "",
  });

  const [currentDate, setCurrentDate] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    const today = new Date();
    const formattedDate = new Intl.DateTimeFormat("en-IN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      timeZone: "Asia/Kolkata",
    }).format(today);
    setCurrentDate(formattedDate);
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPoDetails((prevState) => ({
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

    dispatch(createPoDetails({ ...poDetails })).then(() => {
      setPoDetails({
        poNumber: "",
        poDate: new Date().toISOString().split("T")[0],
        vendorCode: "",
        vendorLocationCode: "",
        matDoc: "",
        mvt: "",
        material: "",
        materialDescription: "",
        qty: "",
        unitOfEntry: "",
        plantCode: "",
        poRegistrationDate: "",
        poConfirmationDate: "",
        planning: "",
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
        marginTop: "15px",
      }}
    >
      {/* header company name  */}
      <Box className="CreateMaterial-header">
        <Box className="CreateMaterial-header-left">
          <FactoryIcon sx={{ marginRight: "10px", color: "#F90" }} />
          <h4>Company Name</h4>
        </Box>
        <h4>Date: {currentDate}</h4>
      </Box>

      <form onSubmit={handleSubmit}>
        {/* new po details  */}
        <Box className="CreateMaterial-PoDetails">
          <Box className="CreateMaterial-PoDetails-left">
            <Box className="CreateMaterial-PoDetails-left-header">
              <CheckCircleOutlineIcon
                sx={{ color: "#F90", marginLeft: "10px" }}
              />
              <h4 style={{ margin: 10 }}> Enter New PO Details</h4>
            </Box>
            <Box
              className="CreateMaterial-PoDetails-left-form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "calc(100% - 16px)" },
              }}
            >
              <Grid container spacing={0.5}>
                <Grid item xs={6}>
                  <TextField
                    label="PO No"
                    variant="outlined"
                    name="poNumber"
                    required
                    fullWidth
                    size="small"
                    onChange={handleInputChange}
                    value={poDetails.poNumber}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="po-date"
                    label="PO DATE"
                    type="date"
                    size="small"
                    name="poDate"
                    onChange={handleInputChange}
                    value={poDetails.poDate}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Box className="CreateMaterial-PoDetails-right">
            <Box className="CreateMaterial-PoDetails-right-button">
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
                sx={{
                  background: "#F90",
                  color: "white",
                }}
              >
                Upload file
                <VisuallyHiddenInput type="file" />
              </Button>
              <Button
                variant="contained"
                startIcon={<DownloadIcon />}
                sx={{
                  marginLeft: "10px",
                  background: "#F90",

                  color: "white",
                }}
              >
                Download
              </Button>
            </Box>

            <Box
              className="CreateMaterial-PoDetails-right-form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "calc(100% - 16px)" },
              }}
            >
              <Grid container spacing={0.5}>
                <Grid item xs={6}>
                  <TextField
                    label="PICKUP LOCATION"
                    variant="outlined"
                    name="pickupLocation"
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="pickup-date"
                    label="PICKUP DATE"
                    type="date"
                    size="small"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    name="pickupDate"
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>

        {/* material details  */}
        <Box className="CreateMaterial-MaterialDetails">
          <Box className="CreateMaterial-MaterialDetails-left">
            <Box
              sx={{
                "& .MuiTextField-root": { m: 1, width: "calc(100% - 16px)" },
                background: "#f3f3f3",
              }}
            >
              <Box className="CreateMaterial-MaterialDetails-left-header">
                <WidgetsIcon sx={{ color: "#F90" }} />
                <h4 style={{ margin: 10 }}>Material details</h4>
              </Box>

              <Grid container spacing={0.5}>
                <Grid item xs={6}>
                  <TextField
                    label="vendor Code"
                    variant="outlined"
                    name="vendorCode"
                    required
                    fullWidth
                    size="small"
                    onChange={handleInputChange}
                    value={poDetails.vendorCode}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="vendorLocationCode"
                    variant="outlined"
                    name="vendorLocationCode"
                    required
                    fullWidth
                    size="small"
                    onChange={handleInputChange}
                    value={poDetails.vendorLocationCode}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="MAT DOC"
                    variant="outlined"
                    name="matDoc"
                    required
                    fullWidth
                    size="small"
                    onChange={handleInputChange}
                    value={poDetails.matDoc}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="MVT"
                    variant="outlined"
                    name="mvt"
                    required
                    fullWidth
                    size="small"
                    onChange={handleInputChange}
                    value={poDetails.mvt}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="MATERIAL"
                    variant="outlined"
                    name="material"
                    required
                    fullWidth
                    size="small"
                    onChange={handleInputChange}
                    value={poDetails.material}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="MATERIAL DESCRIPTION"
                    variant="outlined"
                    name="materialDescription"
                    required
                    fullWidth
                    size="small"
                    onChange={handleInputChange}
                    value={poDetails.materialDescription}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="QTY"
                    variant="outlined"
                    name="qty"
                    required
                    fullWidth
                    size="small"
                    onChange={handleInputChange}
                    value={poDetails.qty}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="UNIT OF ENTRY"
                    variant="outlined"
                    name="unitOfEntry"
                    required
                    fullWidth
                    size="small"
                    onChange={handleInputChange}
                    value={poDetails.unitOfEntry}
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Box className="CreateMaterial-MaterialDetails-right">
            <Box
              sx={{
                "& .MuiTextField-root": { m: 1, width: "calc(100% - 16px)" },
                background: "#f3f3f3",
              }}
            >
              <Box className="CreateMaterial-MaterialDetails-right-header">
                <LocalShippingIcon sx={{ color: "#F90" }} />
                <h4 style={{ margin: 10 }}>Delivery details</h4>
              </Box>

              <Grid container spacing={0.5}>
                <Grid item xs={6}>
                  <TextField
                    label="DELIVERY PLANT/Plant Code"
                    variant="outlined"
                    name="plantCode"
                    required
                    fullWidth
                    size="small"
                    onChange={handleInputChange}
                    value={poDetails.plantCode}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="PLANNING"
                    variant="outlined"
                    name="planning"
                    required
                    fullWidth
                    size="small"
                    onChange={handleInputChange}
                    value={poDetails.planning}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="DELIVERY ADDRESS"
                    variant="outlined"
                    name="deliveryAddress"
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="poRegistrationDate"
                    label="PO Registration Date"
                    type="date"
                    size="small"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    name="poRegistrationDate"
                    onChange={handleInputChange}
                    value={poDetails.poRegistrationDate}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="poConfirmationDate"
                    label="PO Confirmation Date"
                    type="date"
                    size="small"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    name="poConfirmationDate"
                    onChange={handleInputChange}
                    value={poDetails.poConfirmationDate}
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
      <Stack sx={{ width: "100%", marginTop: "20px" }} spacing={2}>
        <Alert severity="success">This is a success Alert.</Alert>
      </Stack>
    </Box>
  );
};

export default CreateMaterial;
