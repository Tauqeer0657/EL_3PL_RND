// menuItems.js
import React from "react";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import ViewListIcon from '@mui/icons-material/ViewList';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import ReportIcon from '@mui/icons-material/Report';
import FactoryIcon from "@mui/icons-material/Factory";
import GroupsIcon from '@mui/icons-material/Groups';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ArticleIcon from '@mui/icons-material/Article';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

export const menuItems = [
  {
    text: "DASHBOARD",
    icon: <LeaderboardIcon />,
    path: "/dashboard",
  },
  {
    text: "MATERIAL READY",
    icon: <AppRegistrationIcon />,
    path: "/MaterailReady",
  },
  
  {
    text: "VIEW MATERIAL",
    icon: <ViewListIcon/>,
    path: "/ViewMaterialReady",
  },
  {
    text: "PURCHASE DOC",
    icon: <ArticleIcon />,
    path: "/purchdoc",
  },
  {
    text: "TRACKING HOME",
    icon: <LocalShippingIcon/>,
    path: "/TrackingHome",
  },

  // {
  //   text: "PO STATUS",
  //   icon: <LocationSearchingIcon/>,
  //   path: "/PoStatus",
  // },
  {
    text: "PO STATUS 1",
    icon: <ShowChartIcon/>,
    path: "/PoStatus1",
  },
 
  {
    text: "USER MANAGEMENT",
    icon: <ManageSearchIcon/>,
    path: `/UserManagement/purchDoc/:purchDoc`,
  },
  {
    text: "CREATE PLANT",
    icon: <FactoryIcon/>,
    path: "/Plants",
  },
  {
    text: "CREATE VENDOR",
    icon: <GroupsIcon/>,
    path: "/Vendors",
  },
  
  {
    text: "USER TYPE",
    icon: <AccountBoxIcon/>,
    path: "/UserType",
  },
  {
    text: "NEW USER",
    icon: <PersonAddIcon/>,
    path: "/NewUser",
  },
  {
    text: "NEW USER 2",
    icon: <AssignmentIndIcon/>,
    path: "/NewUser2",
  },
  {
    text: "MASTER",
    icon: <AutoAwesomeMosaicIcon/>,
    path: "",
    submenu: [
      { text: "Plant", path: "/" },
      { text: "Vendor", path: "/" },
      { text: "User", path: "/" },
      { text: "User Type", path: "/" },
    ],
  },
  {
    text: "REPORT",
    icon: <ReportIcon/>,
    path: "",
    submenu: [
      { text: "Vendor List", path: "/" },
      { text: "Monthly Pickup", path: "/" },
      { text: "Total Pickup", path: "/" },
    ],
  },
];
