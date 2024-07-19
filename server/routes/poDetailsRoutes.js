const express = require("express");
const router = express.Router();
const poDetailsController = require("../controllers/poDetailsController");
const upload = require("../utils/multerConfiguration");

//uploading excel sheets to the database
router.post("/upload", upload, poDetailsController.uploadFile);

// getting all po details
router.get("/getAllPoDetails",poDetailsController.getAllPoDetails);

// getting individual po details
router.get("/getIndividualPoDetails/:purchDoc",poDetailsController.getIndividualPoDetails);

// getting individual po details with company name
router.get("/getVendorSupplyPlant/:purchDoc",poDetailsController.getVendorSupplyPlant);

// --------------------Testing-----------------

// adding a po details
router.post("/addPoDetails",poDetailsController.addPoDetails);

// getting po details
router.get("/getPoDetails",poDetailsController.getPoDetails);

// deleting a po details
router.delete("/deletePoDetails/:poNumber",poDetailsController.deletePoDetails);

module.exports = router;