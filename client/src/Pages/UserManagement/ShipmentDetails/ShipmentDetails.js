import React from "react";
import { Box, Typography } from "@mui/material";
import AddCardIcon from "@mui/icons-material/AddCard";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import InventoryIcon from "@mui/icons-material/Inventory";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Timeline from "@mui/lab/Timeline";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";

const ShipmentDetails = () => {
  return (
    <Box
      component="main"
      sx={{

        width: "100%",
        height: "100%",
        p: 1,
        marginTop: "55px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",

          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
    
        }}
      >
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
            width: "100%",
            height: "100%",
          }}
        >
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ background: "orange" }}>
                <AddCardIcon style={{ color: "white" }} />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              sx={{
                marginLeft: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "17px",
                  background: "orange",
                  padding: "4px 10px",
                  borderRadius: "15px",
                }}
              >
                Material Ready
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ fontSize: "12px", padding: "0px 10px" }}
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
                marginLeft: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "17px",
                  background: "pink",
                  padding: "4px 10px",
                  borderRadius: "15px",
                }}
              >
                Planted for Collection
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ fontSize: "12px", padding: "0px 10px" }}
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
                marginLeft: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "17px",
                  background: "lightblue",
                  padding: "4px 10px",
                  borderRadius: "15px",
                }}
              >
                Collection of Vendor
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ fontSize: "12px", padding: "0px 10px" }}
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
                marginLeft: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "17px",
                  background: "lightgreen",
                  padding: "4px 10px",
                  borderRadius: "15px",
                }}
              >
                Direct Delivery
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ fontSize: "12px", padding: "0px 10px" }}
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
                marginLeft: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "17px",
                  background: "pink",
                  padding: "4px 10px",
                  borderRadius: "15px",
                }}
              >
                Receive
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ fontSize: "12px", padding: "0px 10px" }}
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
                marginLeft: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "17px",
                  background: "lightgreen",
                  padding: "4px 10px",
                  borderRadius: "15px",
                }}
              >
                Delivered
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ fontSize: "12px", padding: "0px 10px" }}
              >
                9-June-2024 - 11:00 PM
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </Box>
  );
};

export default ShipmentDetails;
