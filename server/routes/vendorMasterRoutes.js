const express = require("express");
const router = express.Router();
const vendorMasterController = require("../controllers/vendorMasterController");

// adding a vendor
router.post("/addVendor", vendorMasterController.addvendorMaster);

// getting all vendor details
router.get("/getVendor", vendorMasterController.getVendorMaster);

// getting details of vendor by his vendor code
router.get("/getVendorByCode/:vendorCode", vendorMasterController.getVendorByVendorCode);

// updating vendor details by his vendor code
router.patch("/updateVendor/:vendorCode", vendorMasterController.updateVendorMaster);

// deleting a vendor by vendor code
router.delete("/deleteVendor/:vendorCode", vendorMasterController.deleteVendor);

module.exports = router;
