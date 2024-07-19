const express = require("express");
const router = express.Router();
const userLogController = require("../controllers/userLogController");

// adding a user log
router.post("/addUserLog",userLogController.addUserLog);

// getting all user log
router.get("/getUserLogs",userLogController.getUserLogs);

module.exports = router;