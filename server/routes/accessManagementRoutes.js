const express = require("express");
const router = express.Router();
const accessManagementController = require("../controllers/accessManagementController");

// adding access for particular page
router.post("/addAccess",accessManagementController.addAccess);

// // getting all driver details
// router.get("/getDrivers",pageDetailsController.getDrivers);

// // updating driver details based on driverID
// router.patch("/updateDriver/:driverID",pageDetailsController.updateDriver);

// // deleting driver details based on driverID
// router.delete("/deleteDriver/:driverID",pageDetailsController.deleteDriver);

module.exports = router;