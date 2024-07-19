import React, { useEffect, useState } from "react";
import { Box, Grid, TextField } from "@mui/material";
import EditNoteIcon from '@mui/icons-material/EditNote';
import PurchaseDocumentTable from "./PurchaseDocumentTable";
import axios from "axios";
import { useParams } from "react-router-dom";

const PurchaseDocument = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [purchaseDetails, setPurchaseDetails] = useState([]);
  const { purchDoc } = useParams();

  const purchaseDetailsData = purchaseDetails.length > 0 ? purchaseDetails[0] : {};

  useEffect(() => {
    const fetchPurchaseDetails = async () => {
      try {
        const response = await axios.get(`/api/poDetails/getVendorSupplyPlant/${purchDoc}`);
        setPurchaseDetails(response.data);
      } catch (error) {
        console.error("Error fetching purchase details:", error);
      }
    };

    fetchPurchaseDetails();
  }, [purchDoc]);

  const { vendor_SupplyingPlant, companyName, plnt } = purchaseDetailsData;

  useEffect(() => {
    const date = new Date();
    setCurrentDate(date.toLocaleDateString());
  }, []);

  return (
    <Box
      component="main"
      sx={{
        marginTop: "5px",
        width: "100%",
        background: "#dddddd",
        padding: "10px"
      }}
    >
      <div
        style={{
          width: "100%",
          height: "60px",
          background: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0px 10px",
        }}
      >
        <h3>Purchase Document</h3>
        <h4>{purchDoc || "N/A"}</h4>
        <h4>{currentDate}</h4>
        <EditNoteIcon sx={{ fontSize: "2rem" }} />
      </div>

      <div
        style={{
          width: "100%",
          background: "white",
          marginTop: "10px",
          padding: "10px",
          display: "flex",
        }}
      >
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "calc(100% - 16px)" },
            width: "100%",
            background: "#f3f3f3"
          }}
        >
          <Grid container spacing={0.5}>
            <Grid item xs={8}>
              <TextField
                label="Vendor"
                variant="outlined"
                name="vendor"
                value={`${vendor_SupplyingPlant || ""} - ${companyName || ""}`}
                required
                fullWidth
                size="small"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={0.5}>
            <Grid item xs={4}>
              <TextField
                label="Plant"
                variant="outlined"
                name="plant"
                value={plnt || ""}
                required
                fullWidth
                size="small"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Plant"
                variant="outlined"
                name="plant"
                value={plnt || ""}
                required
                fullWidth
                size="small"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Plant"
                variant="outlined"
                name="plant"
                value={plnt || ""}
                required
                fullWidth
                size="small"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </div>
      <Box>
        <PurchaseDocumentTable purchaseDetails={purchaseDetails} />
      </Box>
    </Box>
  );
};

export default PurchaseDocument;
