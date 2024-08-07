const express = require("express");
const router = express.Router();
const accessManagementController = require("../controllers/accessManagementController");

// adding access for particular page
router.post("/addAccess",accessManagementController.addAccess);

// getting template of access page 
router.get("/",accessManagementController.getTemplate);

// getting access of particular user
router.get("/getAccess/:registrationID",accessManagementController.getAccess);

module.exports = router;