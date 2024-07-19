import React, { useState } from "react";
import SideBar from "../../component/SideBar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Box, Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import "./MaterialReady.css";

const PurchDoc = () => {
  const [file, setFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setUploadMessage("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("/api/poDetails/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setUploadMessage(response.data.message);
    } catch (error) {
      if (error.response) {
        setUploadMessage(error.response.data.error);
      } else {
        setUploadMessage("An unexpected error occurred.");
      }
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <Box
      className="purchDoc-main"
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginTop: "55px",
        }}
      >
        <Box style={{ display: "flex", alignItems: "center" }}>
          <DashboardIcon
            sx={{ fontSize: "20px", marginRight: "5px", color: "orange" }}
          />
          <h4 style={{ margin: "10px 0px" }}>Upload Purchase Document</h4>
        </Box>

        <Box sx={{ background: "#dddddd", padding: "10px 10px" }}>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <Box
              sx={{
                "& .MuiTextField-root": { m: 1, width: "calc(100% - 16px)" },
                width: "100%",
                display: "flex",
                alignItems: "center",
                background: "white",
                padding: "10px",
              }}
            >
              <Grid container spacing={0.5} alignItems={"center"}>
                <Grid item xs={6}>
                  <TextField
                    type="file"
                    label="Upload Purchase Document"
                    onChange={handleFileChange}
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={3}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                      background: "orange",
                      border: "none",
                      color: "white",
                    }}
                  >
                    UPLOAD
                  </Button>
                </Grid>
                <Grid item xs={3}>
                {uploadMessage && <p>{uploadMessage}</p>}
                </Grid>
              </Grid>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default PurchDoc;
