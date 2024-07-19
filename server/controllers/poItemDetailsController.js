const { sql } = require("../db");
const getSqlRequest = require("../utils/dbUtils");

// adding a po item details

exports.addPoItemDetails = async (req, res) => {
  try {
    const request = getSqlRequest();

    // Input parameters
    request.input("poNumber", sql.NVarChar, req.body.poNumber);
    request.input("itemCode", sql.NVarChar, req.body.itemCode);
    request.input("deliveryPlantCode",sql.NVarChar,req.body.deliveryPlantCode);
    request.input("storageLocation", sql.NVarChar, req.body.storageLocation);
    request.input("packageType", sql.NVarChar, req.body.packageType);
    request.input("noOfPackage", sql.NVarChar, req.body.noOfPackage);
    request.input("weight", sql.NVarChar, req.body.weight);
    request.input("length", sql.NVarChar, req.body.length);
    request.input("width", sql.NVarChar, req.body.width);
    request.input("invoiceDate", sql.DateTime, req.body.invoiceDate);
    request.input("invoiceNumber", sql.NVarChar, req.body.invoiceNumber);
    request.input("invoiceValue", sql.NVarChar, req.body.invoiceValue);
    request.input("createdBy", sql.NVarChar, "admin");
    request.input("createdDate", sql.DateTime, new Date());

    // SQL query to add po item details
    const query = `INSERT INTO tb_El3Pl_PoItemDetails
    (poNumber, itemCode, deliveryPlantCode, storageLocation, packageType, noOfPackage, weight, length, width, invoiceDate, invoiceNumber, invoiceValue, createdBy, createdDate)
    VALUES 
    (@poNumber, @itemCode, @deliveryPlantCode, @storageLocation, @packageType, @noOfPackage, @weight, @length, @width, @invoiceDate, @invoiceNumber, @invoiceValue, @createdBy, @createdDate);`;

    await request.query(query);
    res.status(201).json({ message: "Po item details added successfully" });
  } catch (error) {
    console.error("sql error :", error);
    res.status(500).json({ error: error.message });
  }
};

// getting po item details

exports.getPoItemDetails = async (req, res) => {
  try {
    const request = getSqlRequest();
    const query = `
            SELECT * FROM 
            tb_El3Pl_PoItemDetails`;
    const result = await request.query(query);
    if (result.recordset.length > 0) {
      res.status(200).json(result.recordset);
    } else {
      res.status(404).send({
        message: "No data found in Po item details table.",
      });
    }
  } catch (err) {
    console.error("SQL error:", err);
    res.status(500).json({ error: err.message });
  }
};

