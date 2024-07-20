const { sql } = require("../db");
const Jwt = require("jsonwebtoken");
const getSqlRequest = require("../utils/dbUtils");

// adding a User 

exports.addUser = async (req, res) => {
  try {
    const request = getSqlRequest();

    // Input parameters
    request.input("registrationID", sql.NVarChar, req.body.registrationID);
    request.input(
      "companyVendorCode",
      sql.NVarChar,
      req.body.companyVendorCode
    );
    request.input(
      "userTypeID",
      sql.NVarChar,
      req.body.userTypeID
    );
    request.input("userFullName", sql.NVarChar, req.body.userFullName);
    request.input("userName", sql.NVarChar, req.body.userName);
    request.input("password", sql.NVarChar, req.body.password);
    request.input("ipAddress", sql.NVarChar, req.body.ipAddress);
    request.input("isActive", sql.NVarChar, "True");
    request.input("createdBy", sql.NVarChar, "admin");
    request.input("createdDate", sql.DateTime, new Date());

    // SQL query to register new user
    const query = `
    INSERT INTO tb_El3Pl_UserRegistration
    (registrationID, companyVendorCode, userTypeID, userFullName, userName, password, ipAddress, isActive, createdBy, createdDate)
    VALUES (@registrationID, @companyVendorCode, @userTypeID, @userFullName, @userName, @password, @ipAddress, @isActive, @createdBy, @createdDate);
  `;

    await request.query(query);
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("SQL error:", err);
    res.status(500).json({ error: err.message });
  }
};

// getting all User

exports.getUsers = async (req, res) => {
  try {
    const request = getSqlRequest();
    const query = `
        SELECT *
        FROM tb_El3Pl_UserRegistration;
      `;
    const result = await request.query(query);
    if (result.recordset.length > 0) {
      res.status(200).json(result.recordset);
    } else {
      res.status(404).send({
        message: "No data found in the UserRegistration table.",
      });
    }
  } catch (err) {
    console.error("SQL error:", err);
    res.status(500).json({ error: err.message });
  }
};

// updating a user

exports.updateUser = async (req, res) => {
  try {
    const { registrationID } = req.params;
    const request = getSqlRequest();

    // Validate registrationID
    if (!registrationID) {
      return res.status(400).json({ message: "registrationID is required" });
    }

    // Input parameters
    request.input("registrationID", sql.NVarChar, registrationID);

    // Check if user exists
    const checkQuery = `
      SELECT * FROM tb_El3Pl_UserRegistration WHERE registrationID = @registrationID;
    `;
    const checkResult = await request.query(checkQuery);
    const user = checkResult.recordset[0];

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // List of fields that can be updated
    const fieldsToUpdate = [
      { name: 'companyVendorCode', value: req.body.companyVendorCode, type: sql.NVarChar },
      { name: 'userTypeID', value: req.body.userTypeID, type: sql.NVarChar },
      { name: 'userFullName', value: req.body.userFullName, type: sql.NVarChar },
      { name: 'userName', value: req.body.userName, type: sql.NVarChar },
      { name: 'password', value: req.body.password, type: sql.NVarChar },
      { name: 'ipAddress', value: req.body.ipAddress, type: sql.NVarChar },
      { name: 'isActive', value: req.body.isActive, type: sql.NVarChar },
      { name: 'createdBy', value: req.body.createdBy, type: sql.NVarChar }
    ];

    // Build the SET clause dynamically and compare with current values
    const setClauses = [];
    fieldsToUpdate.forEach(field => {
      if (field.value !== undefined && field.value !== user[field.name]) {
        setClauses.push(`${field.name} = @${field.name}`);
        request.input(field.name, field.type, field.value);
      }
    });

    if (setClauses.length === 0) {
      return res.status(400).json({ message: "No changes detected or fields to update" });
    }

    // SQL query to update user details
    const updateQuery = `
      UPDATE tb_El3Pl_UserRegistration
      SET ${setClauses.join(', ')}
      WHERE registrationID = @registrationID;
    `;

    const result = await request.query(updateQuery);

    // Check if any rows were affected
    if (result.rowsAffected[0] === 0) {
      return res.status(400).json({ message: "No changes made to the user" });
    }

    res.status(200).json({ message: "User updated successfully" });
  } catch (err) {
    console.error("SQL error:", err);
    res.status(500).json({ error: err.message });
  }
};

// deleting a User

exports.deleteUser = async (req, res) => {
  try {
    const request = getSqlRequest();
    const { registrationID } = req.params;
    
    const deleteQuery = `
        DELETE FROM tb_El3Pl_UserRegistration
        WHERE registrationID = @registrationID;
      `;
    request.input("registrationID", sql.NVarChar, registrationID);
    const result = await request.query(deleteQuery);

    if (result.rowsAffected[0] === 0) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json({ message: "User deleted successfully." });
  } catch (err) {
    console.error("SQL error:", err);
    res.status(500).json({ error: err.message });
  }
};

// login a user

exports.loginUser = async (req, res) => {
  try {
    const request = getSqlRequest();

    // Input parameters
    request.input("registrationID", sql.NVarChar, req.body.registrationID);
    request.input("password", sql.NVarChar, req.body.password);

    // SQL query to check user credentials
    const query = `
    SELECT registrationID, password FROM tb_El3Pl_UserRegistration
    WHERE registrationID = @registrationID;
    `;

    const result = await request.query(query);

    if (result.recordset.length === 0) {
      // User not found
      return res.status(401).json({ error: "Invalid registration ID or password" });
    }

    const storedPassword = result.recordset[0].password;
    console.log(result.recordset[0].registrationID);

    if(req.body.password === storedPassword){
      const token = Jwt.sign(
        { id: result.recordset[0].registrationID },"hi");
        console.log(token);
        res.status(200)
        .header("Token", token)
        .json({
        message: "Login successful",
        registrationID: result.recordset[0].registrationID
   });
    }
    else {
      // Passwords do not match
      return res.status(401).json({ error: "Invalid registration ID or password" });
    }
  } catch (err) {
    console.error("SQL error:", err);
    res.status(500).json({ error: err.message });
  }
};
