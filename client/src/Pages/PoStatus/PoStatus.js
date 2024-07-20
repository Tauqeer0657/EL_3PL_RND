import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";
import React from "react";
import elLogo from "../../assets/logo/el_short_logo.png";
import AddCardIcon from "@mui/icons-material/AddCard";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import InventoryIcon from "@mui/icons-material/Inventory";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Timeline from "@mui/lab/Timeline";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import "./PoStatus.css";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";

const PoStatus = () => {
  return (
    <Box
      component="main"
      className="PoStatus-bg"
      sx={{
        flexGrow: 1,
        height: "100vh",
        px: 2,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "10%",
          // background: "red",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "4%",
            height: "100%",
            // background: "brown",

            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={elLogo}
            alt="logo"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div style={{ height: "100%" }}>
          <FormLabel
            id="demo-radio-buttons-group-label"
            sx={{ fontSize: "12px", marginLeft: "7px" }}
          >
            TRACK NEXT...
          </FormLabel>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "65%",
              // background:"green"
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
            />
            <Button variant="contained" sx={{ background: "orange" }}>
              Track
            </Button>
          </Box>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "15%",
          // background: "yellow",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <div style={{ width: "50%", height: "100%", background: "white" }}>
          <ul
            style={{ listStyle: "none", fontWeight: "600", fontSize: "16px" }}
          >
            <li>Status - PO Created</li>
            <li>Vendor - ABC Holding</li>
            <li>Pickup - Dubai Mall - Dubai</li>
          </ul>
        </div>
        <div style={{ width: "50%", height: "100%", background: "white" }}>
          <ul
            style={{ listStyle: "none", fontWeight: "600", fontSize: "16px" }}
          >
            <li>PO - 12345678</li>
            <li>Delivery - Plant 1000</li>
            <li>Item in PO - 100 Box</li>
          </ul>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "70%",
       
          marginTop: "10px",
        }}
      >
        <div
          style={{
            width: "35%",
            height: "100%",
          
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >

            <Timeline
              sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
       
                width: "70%",
                height: "100%",
              }}
            >
              <TimelineItem >
                <TimelineSeparator>
                  <TimelineDot sx={{ background: "orange" }}>
                    <AddCardIcon style={{ color: "white" }} />
                  </TimelineDot>
                  <TimelineConnector sx={{background: "blue", fontWeight: "800"}}/>
                </TimelineSeparator>
                <TimelineContent
                  sx={{
                    marginLeft: "20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  
                  }}
                >
                  <Typography sx={{ fontSize: "17px",  background:"orange", padding:"4px 10px", borderRadius:"15px" }}>Material Ready</Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ fontSize: "12px", padding:"0px 10px"  }}
                  >
                    8-June-2024 - 11:43 AM
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot sx={{ background: "pink" }}>
                    <CheckCircleOutlineIcon style={{ color: "white" }} />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent
                  sx={{
                    marginLeft: "20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography sx={{ fontSize: "17px",  background:"pink", padding:"4px 10px", borderRadius:"15px" }}>
                    Planted for Collection
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ fontSize: "12px", padding:"0px 10px"  }}
                  >
                    9-June-2024 - 09:00 AM
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot sx={{ background: "lightblue" }}>
                    <InventoryIcon style={{ color: "white" }} />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent
                  sx={{
                    marginLeft: "20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography sx={{ fontSize: "17px",  background:"lightblue", padding:"4px 10px", borderRadius:"15px" }}>
                    Collection of Vendor
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ fontSize: "12px", padding:"0px 10px"  }}
                  >
                    9-June-2024 - 10:00 AM
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot sx={{ background: "green" }}>
                    <LocalShippingIcon style={{ color: "white" }} />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent
                  sx={{
                    marginLeft: "20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography sx={{ fontSize: "17px",  background:"lightgreen", padding:"4px 10px", borderRadius:"15px" }}>
                    Direct Delivery
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ fontSize: "12px", padding:"0px 10px"  }}
                  >
                    It is a milk run
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot sx={{ background: "red" }}>
                    <InventoryIcon style={{ color: "white" }} />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent
                  sx={{
                    marginLeft: "20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography sx={{ fontSize: "17px",  background:"pink", padding:"4px 10px", borderRadius:"15px" }}>Receive</Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ fontSize: "12px", padding:"0px 10px"  }}
                  >
                    9-June-2024 - 2:40 PM
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot sx={{ background: "green" }}>
                    <LocalShippingIcon style={{ color: "white" }} />
                  </TimelineDot>
                </TimelineSeparator>
                <TimelineContent
                  sx={{
                    marginLeft: "20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography sx={{ fontSize: "17px",  background:"lightgreen", padding:"4px 10px", borderRadius:"15px" }}>Delivered</Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ fontSize: "12px", padding:"0px 10px"  }}
                  >
                    9-June-2024 - 11:00 PM
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </div>
        </div>
    </Box>
  );
};

export default PoStatus;
