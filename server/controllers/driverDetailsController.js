const { sql } = require("../db");
const getSqlRequest = require("../utils/dbUtils");

// adding a driver details

exports.addDriver = async (req, res) => {
  try {
    const request = getSqlRequest();

    // Input parameters
    request.input("driverID", sql.NVarChar, req.body.driverID);
    request.input("userTypeID", sql.NVarChar, req.body.userTypeID);
    request.input("firstName", sql.NVarChar, req.body.firstName);
    request.input("lastName", sql.NVarChar, req.body.lastName);
    request.input("dlNumber", sql.NVarChar, req.body.dlNumber);
    request.input("phoneNumber", sql.NVarChar, req.body.phoneNumber);
    request.input("age", sql.Int, req.body.age);
    request.input("bloodGroup", sql.NVarChar, req.body.bloodGroup);
    request.input("nationality", sql.NVarChar, req.body.nationality);
    request.input("isActive", sql.NVarChar , "True");
    request.input("createdBy", sql.NVarChar, "admin");
    request.input("createdDate", sql.DateTime, new Date());

    // SQL query to insert new driver
    const query = `
    INSERT INTO tb_El3Pl_DriverDetails
    (driverID, userTypeID, firstName, lastName, dlNumber, phoneNumber, age, bloodGroup, nationality, isActive, createdBy, createdDate)
    VALUES (@driverID, @userTypeID, @firstName, @lastName, @dlNumber, @phoneNumber, @age, @bloodGroup, @nationality, @isActive, @createdBy, @createdDate);
  `;
  
    await request.query(query);
    res.status(201).json({ message: "Driver added successfully" });
  } catch (err) {
    console.error("SQL error:", err);
    res.status(500).json({ error: err.message });
  }
};

// getting all driver details

exports.getDrivers = async (req, res) => {
  try {
    const request = getSqlRequest();
    const query = `
      SELECT *
      FROM tb_El3Pl_DriverDetails;
    `;
    const result = await request.query(query);
    if (result.recordset.length > 0) {
      res.status(200).json(result.recordset);
    } else {
      res.status(404).send({
        message: "No data found in the driver's table.",
      });
    }
  } catch (err) {
    console.error("SQL error:", err);
    res.status(500).json({ error: err.message });
  }
};

// updating driver by driver id

exports.updateDriver = async (req, res) => {
  try {
    const { driverID } = req.params;
    const request = getSqlRequest();

    // Validate driverID
    if (!driverID) {
      return res.status(400).json({ message: "driverID is required" });
    }

    // Input parameters
    request.input("driverID", sql.NVarChar, driverID);

    // Check if driver exists
    const checkQuery = `
      SELECT * FROM tb_El3Pl_DriverDetails WHERE driverID = @driverID;
    `;
    const checkResult = await request.query(checkQuery);
    const driver = checkResult.recordset[0];

    if (!driver) {
      return res.status(404).json({ message: "Driver not found" });
    }

    // List of fields that can be updated
    const fieldsToUpdate = [
      { name: 'userTypeID', value: req.body.userTypeID, type: sql.NVarChar },
      { name: 'firstName', value: req.body.firstName, type: sql.NVarChar },
      { name: 'lastName', value: req.body.lastName, type: sql.NVarChar },
      { name: 'dlNumber', value: req.body.dlNumber, type: sql.NVarChar },
      { name: 'phoneNumber', value: req.body.phoneNumber, type: sql.NVarChar },
      { name: 'age', value: req.body.age, type: sql.Int },
      { name: 'bloodGroup', value: req.body.bloodGroup, type: sql.NVarChar },
      { name: 'nationality', value: req.body.nationality, type: sql.NVarChar },
      { name: 'isActive', value: req.body.isActive, type: sql.NVarChar }
    ];

    // Build the SET clause dynamically and compare with current values
    const setClauses = [];
    fieldsToUpdate.forEach(field => {
      if (field.value !== undefined && field.value !== driver[field.name]) {
        setClauses.push(`${field.name} = @${field.name}`);
        request.input(field.name, field.type, field.value);
      }
    });

    if (setClauses.length === 0) {
      return res.status(400).json({ message: "No changes detected or fields to update" });
    }

    // SQL query to update driver details
    const updateQuery = `
      UPDATE tb_El3Pl_DriverDetails
      SET ${setClauses.join(', ')}
      WHERE driverID = @driverID;
    `;

    const result = await request.query(updateQuery);

    // Check if any rows were affected
    if (result.rowsAffected[0] === 0) {
      return res.status(400).json({ message: "No changes made to the driver" });
    }

    res.status(200).json({ message: "Driver updated successfully" });
  } catch (err) {
    console.error("SQL error:", err);
    res.status(500).json({ error: err.message });
  }
};

// deleting a driver by driver id

exports.deleteDriver = async (req, res) => {
  try {
    const request = getSqlRequest();
    const { driverID } = req.params;

    // Delete the vendor
    const deleteQuery = `
      DELETE FROM tb_El3Pl_DriverDetails
      WHERE driverID = @driverID;
    `;
    request.input("driverID", sql.NVarChar, driverID);
    const result = await request.query(deleteQuery);

    if (result.rowsAffected[0] === 0) {
      return res.status(404).json({ message: "Driver not found." });
    }

    res.status(200).json({ message: "Driver deleted successfully." });
  } catch (err) {
    console.error("SQL error:", err);
    res.status(500).json({ error: err.message });
  }
};
