const express = require("express");
const router = express.Router();
const pageDetailsController = require("../controllers/pageDetailsController");

// adding a page details 
router.post("/addPage",pageDetailsController.addPage);

// getting all pages
router.get("/getPages",pageDetailsController.getPages);

module.exports = router;