const express = require("express");
const router = express.Router();
const vendorLocationController = require("../controllers/vendorLocationController");

// Adding a vendor location
router.post("/addVendorLocation",vendorLocationController.addVendorLocation);

// getting all vendor location
router.get("/getVendorLocation",vendorLocationController.getVendorLocation);

// updating vendor location
router.patch("/updateVendorLocation/:vendorLocationCode",vendorLocationController.updateVendorLocation)

// deleting vendor location
router.delete("/deleteVendorLocation/:vendorLocationCode",vendorLocationController.deleteVendorLocation);

module.exports = router;