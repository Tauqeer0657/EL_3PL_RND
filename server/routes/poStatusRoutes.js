const express = require("express");
const router = express.Router();
const poStatusController = require("../controllers/poStatusController");
const upload = require("../utils/multerConfiguration");

// adding a po status
router.post("/addPoStatus", upload , poStatusController.addPoStatus);

// getting po status 
router.get("/getPoStatus",poStatusController.getPoStatus);

// deleting a po status
router.delete("/deletePoStatus/:poNumber",poStatusController.deletePoStatus);

module.exports = router;