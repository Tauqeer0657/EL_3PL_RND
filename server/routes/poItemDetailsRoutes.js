const express = require("express");
const router = express.Router();
const poItemDetailsController = require("../controllers/poItemDetailsController");

// adding a po item details
router.post("/addPoItemDetails", poItemDetailsController.addPoItemDetails);

// getting po item details
router.get("/getPoItemDetails", poItemDetailsController.getPoItemDetails);

module.exports = router;