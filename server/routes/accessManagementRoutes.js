const express = require("express");
const router = express.Router();
const accessManagementController = require("../controllers/accessManagementController");

// adding access for particular page
router.post("/addAccess",accessManagementController.addAccess);

// getting access of particular user
router.get("/getAccess/:registrationID",accessManagementController.getAccess);

module.exports = router;