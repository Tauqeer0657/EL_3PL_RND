const express = require("express");
const router = express.Router();
const driverDetailsController = require("../controllers/driverDetailsController");

// adding a driver details 
router.post("/addDriver",driverDetailsController.addDriver);

// getting all driver details
router.get("/getDrivers",driverDetailsController.getDrivers);

// updating driver details based on driverID
router.patch("/updateDriver/:driverID",driverDetailsController.updateDriver);

// deleting driver details based on driverID
router.delete("/deleteDriver/:driverID",driverDetailsController.deleteDriver);

module.exports = router;