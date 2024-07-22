import React, { useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Header from "./Header";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import logo from "../assets/logo/emirateslogo.jpg";

const drawerWidth = 230;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  background: "white",
  color: "white",
  fontFamily: "sans-serif",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  background: "white",
  color: "white",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0),
  ...theme.mixins.toolbar,
  backgroundImage: `url(${logo})`,
  backgroundSize: "140px auto",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function SideBar() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState({});
  const [menuItems, setMenuItems] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [registrationID, setRegistrationID] = useState("");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleSubMenuClick = (path) => {
    navigate(path);
  };

  const handleToggleSubMenu = (index) => {
    setSubmenuOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  useEffect(() => {
    const savedRegistrationID = sessionStorage.getItem("registrationID");
    if (savedRegistrationID) {
      setRegistrationID(savedRegistrationID);
    }
  }, []);

  useEffect(() => {
    if (registrationID) {
      axios
        .get(`api/access/getAccess/${registrationID}`)
        .then((response) => {
          setMenuItems(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [registrationID]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header open={open} handleDrawerOpen={handleDrawerOpen} />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} style={{ color: "#045e84" }}>
            {theme.direction === "rtl" ? <MenuIcon /> : <MenuIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuItems.filter(item => item.page_YN === "Y").map((item, index) => (
            <div key={index}>
              <ListItem
                disablePadding
                sx={{ display: "block" }}
                onClick={() => navigate(item.pageLink)}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    color: "#222b48",
                    justifyContent: open ? "initial" : "center",
                    px: 1.5,
                    mt: 1,
                    borderBottom: "1px solid #ccc",
                    ...(location.pathname === item.pageLink && {
                      background: "#222b48",
                      color: "white",
                    }),
                    ":hover": {
                      background: "#045e8477",
                      color: "white",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 1 : "auto",
                      justifyContent: "center",
                      color: "#222b48",
                      ...(location.pathname === item.pageLink && {
                        background: "#222b48",
                        color: "white",
                      }),
                      ":hover": {
                        background: "#045e8477",
                        color: "white",
                      },
                    }}
                  >
                    {/* Optionally, you can add icons here */}
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <div
                        style={{
                          fontSize: "0.9rem",
                          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                        }}
                      >
                        {item.pageName}
                      </div>
                    }
                    sx={{
                      opacity: open ? 1 : 0,
                    }}
                  />
                  {item.submenu && (
                    open ? 
                    (submenuOpen[index] ? <ExpandLessIcon onClick={() => handleToggleSubMenu(index)} /> : <ExpandMoreIcon onClick={() => handleToggleSubMenu(index)} />) 
                    : 
                    (location.pathname === item.pageLink ? <ExpandLessIcon onClick={() => handleToggleSubMenu(index)} /> : <ExpandMoreIcon onClick={() => handleToggleSubMenu(index)} />)
                  )}
                </ListItemButton>
              </ListItem>
              {item.submenu && submenuOpen[index] && (
                <List>
                  {item.submenu.map((subItem, subIndex) => (
                    <ListItem
                      key={subIndex}
                      disablePadding
                      sx={{ display: "block", pl: 2 }}
                      onClick={() => handleSubMenuClick(subItem.pageLink)}
                    >
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          color: "#222b48",
                          justifyContent: "initial",
                          px: 2,
                          mt: 1,
                          borderBottom: "1px solid #ccc",
                          ...(location.pathname === subItem.pageLink && {
                            background: "#222b48",
                            color: "white",
                          }),
                          ":hover": {
                            background: "#045e8477",
                            color: "white",
                          },
                        }}
                      >
                        <ListItemText
                          primary={
                            <div
                              style={{
                                fontSize: "0.75rem",
                                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                              }}
                            >
                              {subItem.pageName}
                            </div>
                          }
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              )}
            </div>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
