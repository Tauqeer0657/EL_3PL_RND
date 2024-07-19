const { sql } = require("../db");
const getSqlRequest = require("../utils/dbUtils");

// adding a vendor

exports.addvendorMaster = async (req, res) => {
  try {
    const request = getSqlRequest();

    // Input parameters
    request.input("vendorCode", sql.NVarChar, req.body.vendorCode);
    request.input("companyName", sql.NVarChar, req.body.companyName);
    request.input("contactPersonName", sql.NVarChar, req.body.contactPersonName);
    request.input("contactPersonTitle", sql.NVarChar, req.body.contactPersonTitle);
    request.input("emailAddress", sql.NVarChar, req.body.emailAddress);
    request.input("phoneNumber", sql.NVarChar, req.body.phoneNumber);
    request.input("companyWebsite", sql.NVarChar, req.body.companyWebsite);
    request.input("taxIdentificationNumber", sql.NVarChar, req.body.taxIdentificationNumber);
    request.input("dunsNumber", sql.NVarChar, req.body.dunsNumber);
    request.input("headQuartersAddress", sql.NVarChar, req.body.headQuartersAddress);
    request.input("mailingAddress", sql.NVarChar, req.body.mailingAddress);
    request.input("city", sql.NVarChar, req.body.city);
    request.input("state_province", sql.NVarChar, req.body.state_province);
    request.input("postal_zipCode", sql.NVarChar, req.body.postal_zipCode);
    request.input("country", sql.NVarChar, req.body.country);
    request.input("isActive", sql.NVarChar, "True");
    request.input("createdBy", sql.NVarChar, "admin");
    request.input("createdDate", sql.DateTime, new Date());

    // SQL query to insert new vendor
    const query = `
      INSERT INTO tb_El3Pl_VendorMaster
      (vendorCode, companyName, contactPersonName, contactPersonTitle, emailAddress, phoneNumber, companyWebsite,
      taxIdentificationNumber, dunsNumber, headQuartersAddress, mailingAddress, city, state_province, postal_zipCode,
      country, isActive, createdBy, createdDate)
      VALUES (@vendorCode, @companyName, @contactPersonName, @contactPersonTitle, @emailAddress, @phoneNumber,
      @companyWebsite, @taxIdentificationNumber, @dunsNumber, @headQuartersAddress, @mailingAddress, @city,
      @state_province, @postal_zipCode, @country, @isActive, @createdBy, @createdDate);
    `;

    await request.query(query);
    res.status(201).json({ message: "Vendor added successfully" });
  } catch (err) {
    console.error("SQL error:", err);
    res.status(500).json({ error: err.message });
  }
};

// getting all vendor details

exports.getVendorMaster = async (req, res) => {
  try {
    const request = getSqlRequest();
    const query = `
      SELECT *
      FROM tb_El3Pl_VendorMaster;
    `;
    const result = await request.query(query);
    if (result.recordset.length > 0) {
      res.status(200).json(result.recordset);
    } else {
      res.status(404).send({
        message: "No data found in the vendor table.",
      });
    }
  } catch (err) {
    console.error("SQL error:", err);
    res.status(500).json({ error: err.message });
  }
};

// getting vendor detail by his vendorCode

exports.getVendorByVendorCode = async (req,res) => {
  try {
    const request = getSqlRequest();
    const { vendorCode } = req.params;
    const query = `
      SELECT *
      FROM tb_El3Pl_VendorMaster
      WHERE vendorCode = @vendorCode;
    `;
    request.input("vendorCode", sql.NVarChar, vendorCode);
    const result = await request.query(query);
    if (result.recordset.length > 0) {
      res.status(200).json(result.recordset);
    } else {
      res.status(404).send({
        message: "No data found in the vendor table.",
      });
    }
  } catch (err) {
    console.error("SQL error:", err);
    res.status(500).json({ error: err.message });
  }
}

// updating vendor details by his vendor code

exports.updateVendorMaster = async (req, res) => {
  try {
    const { vendorCode } = req.params;
    const request = getSqlRequest();

    // Validate vendorCode
    if (!vendorCode) {
      return res.status(400).json({ message: "vendorCode is required" });
    }

    // Input parameters
    request.input("vendorCode", sql.NVarChar, vendorCode);

    // Check if vendor exists
    const checkQuery = `
      SELECT * FROM tb_El3Pl_VendorMaster WHERE vendorCode = @vendorCode;
    `;
    const checkResult = await request.query(checkQuery);
    const vendor = checkResult.recordset[0];

    if (!vendor) {
      return res.status(404).json({ message: "Vendor not found" });
    }

    // List of fields that can be updated
    const fieldsToUpdate = [
      { name: 'companyName', value: req.body.companyName, type: sql.NVarChar },
      { name: 'contactPersonName', value: req.body.contactPersonName, type: sql.NVarChar },
      { name: 'contactPersonTitle', value: req.body.contactPersonTitle, type: sql.NVarChar },
      { name: 'emailAddress', value: req.body.emailAddress, type: sql.NVarChar },
      { name: 'phoneNumber', value: req.body.phoneNumber, type: sql.NVarChar },
      { name: 'companyWebsite', value: req.body.companyWebsite, type: sql.NVarChar },
      { name: 'taxIdentificationNumber', value: req.body.taxIdentificationNumber, type: sql.NVarChar },
      { name: 'dunsNumber', value: req.body.dunsNumber, type: sql.NVarChar },
      { name: 'headQuartersAddress', value: req.body.headQuartersAddress, type: sql.NVarChar },
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
      if (field.value !== undefined && field.value !== vendor[field.name]) {
        setClauses.push(`${field.name} = @${field.name}`);
        request.input(field.name, field.type, field.value);
      }
    });

    if (setClauses.length === 0) {
      return res.status(400).json({ message: "No changes detected or fields to update" });
    }

    // SQL query to update vendor details
    const updateQuery = `
      UPDATE tb_El3Pl_VendorMaster
      SET ${setClauses.join(', ')}
      WHERE vendorCode = @vendorCode;
    `;

    const result = await request.query(updateQuery);

    // Check if any rows were affected
    if (result.rowsAffected[0] === 0) {
      return res.status(400).json({ message: "No changes made to the vendor" });
    }

    res.status(200).json({ message: "Vendor updated successfully" });
  } catch (err) {
    console.error("SQL error:", err);
    res.status(500).json({ error: err.message });
  }
};

// deleting a vendor by vendor code

exports.deleteVendor = async (req, res) => {
  try {
    const request = getSqlRequest();
    const { vendorCode } = req.params;

    // Delete the vendor
    const deleteQuery = `
      DELETE FROM tb_El3Pl_VendorMaster
      WHERE vendorCode = @vendorCode;
    `;
    request.input("vendorCode", sql.NVarChar, vendorCode);
    const result = await request.query(deleteQuery);

    if (result.rowsAffected[0] === 0) {
      return res.status(404).json({ message: "Vendor not found." });
    }

    res.status(200).json({ message: "Vendor deleted successfully." });
  } catch (err) {
    console.error("SQL error:", err);
    res.status(500).json({ error: err.message });
  }
};
