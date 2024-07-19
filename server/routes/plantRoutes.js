const express = require("express");
const router = express.Router();
const plantController = require("../controllers/plantController");

// adding a plant 
router.post("/addPlant",plantController.addPlant);

// getting all plant
router.get("/getPlant",plantController.getPlants);

// updating a plant
router.patch("/updatePlant/:plantCode",plantController.updatePlant);

// deleting a plant 
router.delete("/deletePlant/:plantCode",plantController.deletePlant);

module.exports = router;
