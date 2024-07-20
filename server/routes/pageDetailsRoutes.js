const express = require("express");
const router = express.Router();
const pageDetailsController = require("../controllers/pageDetailsController");

// adding a page details 
router.post("/addPage",pageDetailsController.addPage);

// // getting all driver details
// router.get("/getDrivers",pageDetailsController.getDrivers);

// // updating driver details based on driverID
// router.patch("/updateDriver/:driverID",pageDetailsController.updateDriver);

// // deleting driver details based on driverID
// router.delete("/deleteDriver/:driverID",pageDetailsController.deleteDriver);

module.exports = router;