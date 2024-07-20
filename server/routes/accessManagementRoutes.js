const express = require("express");
const router = express.Router();
const accessManagementController = require("../controllers/accessManagementController");

// adding access for particular page
router.post("/addAccess",accessManagementController.addAccess);

// getting access of particular user
router.get("/getAccess/:registrationID",accessManagementController.getAccess);

// // updating driver details based on driverID
// router.patch("/updateDriver/:driverID",pageDetailsController.updateDriver);

// // deleting driver details based on driverID
// router.delete("/deleteDriver/:driverID",pageDetailsController.deleteDriver);

module.exports = router;