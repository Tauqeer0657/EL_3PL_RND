const { sql } = require("../db");
const getSqlRequest = require("../utils/dbUtils");

// adding a plant 

exports.addPlant = async (req, res) => {
  try {
    const request = getSqlRequest();

    // Input parameters
    request.input("plantCode", sql.NVarChar, req.body.plantCode);
    request.input(
      "contactPersonName",
      sql.NVarChar,
      req.body.contactPersonName
    );
    request.input(
      "contactPersonTitle",
      sql.NVarChar,
      req.body.contactPersonTitle
    );
    request.input("emailAddress", sql.NVarChar, req.body.emailAddress);
    request.input("phoneNumber", sql.NVarChar, req.body.phoneNumber);
    request.input("companyWebsite", sql.NVarChar, req.body.companyWebsite);
    request.input("mailingAddress", sql.NVarChar, req.body.mailingAddress);
    request.input("city", sql.NVarChar, req.body.city);
    request.input("state_province", sql.NVarChar, req.body.state_province);
    request.input("postal_zipCode", sql.NVarChar, req.body.postal_zipCode);
    request.input("country", sql.NVarChar, req.body.country);
    request.input("isActive", sql.NVarChar, "True");
    request.input("createdBy", sql.NVarChar, req.body.createdBy);
    request.input("createdDate", sql.DateTime, new Date());

    // SQL query to insert new vendor location
    const query = `
      INSERT INTO tb_El3Pl_Plant
      (plantCode, contactPersonName, contactPersonTitle, emailAddress, phoneNumber, companyWebsite, mailingAddress, city, state_province, postal_zipCode,country, isActive, createdBy, createdDate)
      VALUES (@plantCode, @contactPersonName, @contactPersonTitle, @emailAddress, @phoneNumber,@companyWebsite, @mailingAddress, @city,
      @state_province, @postal_zipCode, @country, @isActive, @createdBy, @createdDate);
    `;

    await request.query(query);
    res.status(201).json({ message: "Plant added successfully" });
  } catch (err) {
    console.error("SQL error:", err);
    res.status(500).json({ error: err.message });
  }
};

// getting all plant

exports.getPlants = async (req, res) => {
  try {
    const request = getSqlRequest();
    const query = `
        SELECT *
        FROM tb_El3Pl_Plant;
      `;
    const result = await request.query(query);
    if (result.recordset.length > 0) {
      res.status(200).json(result.recordset);
    } else {
      res.status(404).send({
        message: "No data found in the plant table.",
      });
    }
  } catch (err) {
    console.error("SQL error:", err);
    res.status(500).json({ error: err.message });
  }
};

// updating a plant

exports.updatePlant = async (req, res) => {
  try {
    const { plantCode } = req.params;
    const request = getSqlRequest();

    // Validate plantCode
    if (!plantCode) {
      return res.status(400).json({ message: "plantCode is required" });
    }

    // Input parameters
    request.input("plantCode", sql.NVarChar, plantCode);

    // Check if plant exists
    const checkQuery = `
      SELECT * FROM tb_El3Pl_Plant WHERE plantCode = @plantCode;
    `;
    const checkResult = await request.query(checkQuery);
    const plant = checkResult.recordset[0];

    if (!plant) {
      return res.status(404).json({ message: "Plant not found" });
    }

    // List of fields that can be updated
    const fieldsToUpdate = [
      { name: 'contactPersonName', value: req.body.contactPersonName, type: sql.NVarChar },
      { name: 'contactPersonTitle', value: req.body.contactPersonTitle, type: sql.NVarChar },
      { name: 'emailAddress', value: req.body.emailAddress, type: sql.NVarChar },
      { name: 'phoneNumber', value: req.body.phoneNumber, type: sql.NVarChar },
      { name: 'companyWebsite', value: req.body.companyWebsite, type: sql.NVarChar },
      { name: 'mailingAddress', value: req.body.mailingAddress, type: sql.NVarChar },
      { name: 'city', value: req.body.city, type: sql.NVarChar },
      { name: 'state_province', value: req.body.state_province, type: sql.NVarChar },
      { name: 'postal_zipCode', value: req.body.postal_zipCode, type: sql.NVarChar },
      { name: 'country', value: req.body.country, type: sql.NVarChar },
      { name: 'isActive', value: req.body.isActive, type: sql.NVarChar },
      { name: 'createdBy', value: req.body.createdBy, type: sql.NVarChar }
    ];

    // Build the SET clause dynamically and compare with current values
    const setClauses = [];
    fieldsToUpdate.forEach(field => {
      if (field.value !== undefined && field.value !== plant[field.name]) {
        setClauses.push(`${field.name} = @${field.name}`);
        request.input(field.name, field.type, field.value);
      }
    });

    if (setClauses.length === 0) {
      return res.status(400).json({ message: "No changes detected or fields to update" });
    }

    // SQL query to update plant details
    const updateQuery = `
      UPDATE tb_El3Pl_Plant
      SET ${setClauses.join(', ')}
      WHERE plantCode = @plantCode;
    `;

    const result = await request.query(updateQuery);

    // Check if any rows were affected
    if (result.rowsAffected[0] === 0) {
      return res.status(400).json({ message: "No changes made to the plant" });
    }

    res.status(200).json({ message: "Plant updated successfully" });
  } catch (err) {
    console.error("SQL error:", err);
    res.status(500).json({ error: err.message });
  }
};


// deleting a plant

exports.deletePlant = async (req, res) => {
  try {
    const request = getSqlRequest();
    const { plantCode } = req.params;

    // Delete the plant
    const deleteQuery = `
        DELETE FROM tb_El3Pl_Plant
        WHERE plantCode = @plantCode;
      `;
    request.input("plantCode", sql.NVarChar, plantCode);
    const result = await request.query(deleteQuery);

    if (result.rowsAffected[0] === 0) {
      return res.status(404).json({ message: "Plant not found." });
    }

    res.status(200).json({ message: "Plant deleted successfully." });
  } catch (err) {
    console.error("SQL error:", err);
    res.status(500).json({ error: err.message });
  }
};
