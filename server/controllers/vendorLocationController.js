const { sql } = require("../db");
const getSqlRequest = require("../utils/dbUtils");

// adding a vendor location

exports.addVendorLocation = async (req, res) => {
  try {
    const request = getSqlRequest();

    // Input parameters
    request.input(
      "vendorLocationCode",
      sql.NVarChar,
      req.body.vendorLocationCode
    );
    request.input("vendorCode", sql.NVarChar, req.body.vendorCode);
    request.input("address", sql.NVarChar, req.body.address);
    request.input("city", sql.NVarChar, req.body.city);
    request.input("state_province", sql.NVarChar, req.body.state_province);
    request.input("postal_zipCode", sql.NVarChar, req.body.postal_zipCode);
    request.input("country", sql.NVarChar, req.body.country);
    request.input("isActive", sql.NVarChar, "True");
    request.input("createdBy", sql.NVarChar, "admin");
    request.input("createdDate", sql.DateTime, new Date());

    // SQL query to insert new vendor location
    const query = `
      INSERT INTO tb_El3Pl_VendorLocations
      (vendorLocationCode, vendorCode, address, city, state_province, postal_zipCode, country, isActive, createdBy, createdDate)
      VALUES (@vendorLocationCode, @vendorCode, @address, @city, @state_province, @postal_zipCode, @country, @isActive, @createdBy, @createdDate);
    `;

    await request.query(query);
    res.status(201).json({ message: "Vendor Location added successfully" });
  } catch (err) {
    console.error("SQL error:", err);
    res.status(500).json({ error: err.message });
  }
};

// getting all vendor location

exports.getVendorLocation = async (req, res) => {
  try {
    request = getSqlRequest();
    query = `SELECT * FROM
            tb_El3Pl_VendorLocations`;
    const result = await request.query(query);
    if (result.recordset.length > 0) {
      res.status(200).json(result.recordset);
    } else {
      res.status(404).send({
        message: "No data found in the customer table.",
      });
    }
  } catch (err) {
    console.error("SQL error:", err);
    res.status(500).json({ error: err.message });
  }
};

// updating vendor location

exports.updateVendorLocation = async (req, res) => {
  try {
    const { vendorLocationCode } = req.params;
    const request = getSqlRequest();

    // Validate vendorLocationCode
    if (!vendorLocationCode) {
      return res.status(400).json({ message: "vendorLocationCode is required" });
    }

    // Input parameters
    request.input("vendorLocationCode", sql.NVarChar, vendorLocationCode);

    // Check if vendor location exists
    const checkQuery = `
      SELECT * FROM tb_El3Pl_VendorLocations WHERE vendorLocationCode = @vendorLocationCode;
    `;
    const checkResult = await request.query(checkQuery);
    const vendorLocation = checkResult.recordset[0];

    if (!vendorLocation) {
      return res.status(404).json({ message: "Vendor location not found" });
    }

    // List of fields that can be updated
    const fieldsToUpdate = [
      { name: 'vendorCode', value: req.body.vendorCode, type: sql.NVarChar },
      { name: 'address', value: req.body.address, type: sql.NVarChar },
      { name: 'city', value: req.body.city, type: sql.NVarChar },
      { name: 'state_province', value: req.body.state_province, type: sql.NVarChar },
      { name: 'postal_zipCode', value: req.body.postal_zipCode, type: sql.NVarChar },
      { name: 'country', value: req.body.country, type: sql.NVarChar },
      { name: 'isActive', value: req.body.isActive, type: sql.NVarChar }
    ];

    // Build the SET clause dynamically and compare with current values
    const setClauses = [];
    fieldsToUpdate.forEach(field => {
      if (field.value !== undefined && field.value !== vendorLocation[field.name]) {
        setClauses.push(`${field.name} = @${field.name}`);
        request.input(field.name, field.type, field.value);
      }
    });

    if (setClauses.length === 0) {
      return res.status(400).json({ message: "No changes detected or fields to update" });
    }

    // SQL query to update vendor location details
    const updateQuery = `
      UPDATE tb_El3Pl_VendorLocations
      SET ${setClauses.join(', ')}
      WHERE vendorLocationCode = @vendorLocationCode;
    `;

    const result = await request.query(updateQuery);

    // Check if any rows were affected
    if (result.rowsAffected[0] === 0) {
      return res.status(400).json({ message: "No changes made to the vendor location" });
    }

    res.status(200).json({ message: "Vendor location updated successfully" });
  } catch (err) {
    console.error("SQL error:", err);
    res.status(500).json({ error: err.message });
  }
};

// deleting vendor location

exports.deleteVendorLocation = async (req, res) => {
  try {
    const request = getSqlRequest();
    const { vendorLocationCode } = req.params;

    // Delete the vendor location
    const deleteQuery = `
      DELETE FROM tb_El3Pl_VendorLocations
      WHERE vendorLocationCode = @vendorLocationCode;
    `;
    request.input("vendorLocationCode", sql.NVarChar, vendorLocationCode);
    const result = await request.query(deleteQuery);

    if (result.rowsAffected[0] === 0) {
      return res.status(404).json({ message: "Vendor location not found." });
    }

    res.status(200).json({ message: "Vendor location deleted successfully." });
  } catch (err) {
    console.error("SQL error:", err);
    res.status(500).json({ error: err.message });
  }
};
