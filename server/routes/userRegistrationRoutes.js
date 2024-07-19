const express = require("express");
const router = express.Router();
const authenticateUser = require("../middleware/auth");
const userRegistrationController = require("../controllers/userRegistrationController");

// adding a user 
router.post("/addUser",userRegistrationController.addUser);

// getting all user
router.get("/getUsers", authenticateUser , userRegistrationController.getUsers);

// updating a user
router.patch("/updateUser/:registrationID",userRegistrationController.updateUser);

// deleting a user 
router.delete("/deleteUser/:registrationID",userRegistrationController.deleteUser);

// login a user
router.post("/login",userRegistrationController.loginUser);

module.exports = router;
