const { sql } = require("../db");
const getSqlRequest = require("../utils/dbUtils");
const uploadOnCloudinary = require("../utils/cloudinaryConfig");

// adding a po status

exports.addPoStatus = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Please provide podImage" });
    }

    const podImageUrl = await uploadOnCloudinary(req.file.filename);
    const request = getSqlRequest();

    // Input parameters
    request.input("vendorCode", sql.NVarChar, req.body.vendorCode);
    request.input("poNumber", sql.NVarChar, req.body.poNumber);
    request.input("plantCode",sql.NVarChar,req.body.plantCode);
    request.input("driverID",sql.NVarChar,req.body.driverID);
    request.input("poType", sql.NVarChar, req.body.poType);
    request.input("vehicleNo", sql.NVarChar, req.body.vehicleNo);
    request.input("poCreationStatus", sql.NVarChar, req.body.poCreationStatus);
    request.input("poCreationDateTime", sql.DateTime, req.body.poCreationDateTime);
    request.input("poPlanned", sql.NVarChar, req.body.poPlanned);
    request.input("vehicleAtVendorLocStatus",sql.NVarChar,req.body.vehicleAtVendorLocStatus);
    request.input("vehicleAtVendorLocDateTime",sql.DateTime,req.body.vehicleAtVendorLocDateTime);
    request.input("collectionCompleteStatus", sql.NVarChar, req.body.collectionCompleteStatus);
    request.input("collectionCompleteDateTime", sql.DateTime, req.body.collectionCompleteDateTime);
    request.input("vehicleExitVendorLocStatus", sql.NVarChar, req.body.vehicleExitVendorLocStatus);
    request.input("vehicleExitVendorLocDateTime", sql.DateTime, req.body.vehicleExitVendorLocDateTime);
    request.input("receivedAtCrossDockStatus", sql.NVarChar, req.body.receivedAtCrossDockStatus);
    request.input("receivedAtCrossDockDateTime", sql.DateTime, req.body.receivedAtCrossDockDateTime);
    request.input("dispatchFromCrossDockDateTime", sql.DateTime, req.body.dispatchFromCrossDockDateTime);
    request.input("dispatchFromCrossDockStatus", sql.NVarChar, req.body.dispatchFromCrossDockStatus);
    request.input("directDeliveryStatus", sql.NVarChar, req.body.directDeliveryStatus);
    request.input("directDeliveryDateTime", sql.DateTime, req.body.directDeliveryDateTime);
    request.input("deliveryAtPlantLocStatus", sql.NVarChar, req.body.deliveryAtPlantLocStatus);
    request.input("deliveryAtPlantLocDateTime", sql.DateTime, req.body.deliveryAtPlantLocDateTime);
    request.input("podImage", sql.NVarChar, podImageUrl);

    // SQL query to insert new purchase order details
    const query = `
    INSERT INTO tb_El3Pl_PoStatus
    (vendorCode,poNumber, plantCode, driverID, poType, vehicleNo, poCreationStatus, poCreationDateTime, poPlanned, vehicleAtVendorLocStatus, vehicleAtVendorLocDateTime, collectionCompleteStatus, collectionCompleteDateTime, vehicleExitVendorLocStatus,
    vehicleExitVendorLocDateTime, receivedAtCrossDockStatus, receivedAtCrossDockDateTime, dispatchFromCrossDockDateTime, dispatchFromCrossDockStatus, directDeliveryStatus, directDeliveryDateTime, deliveryAtPlantLocStatus, deliveryAtPlantLocDateTime, podImage)
    VALUES 
    (@vendorCode, @poNumber, @plantCode, @driverID, @poType, @vehicleNo, @poCreationStatus, @poCreationDateTime, @poPlanned, @vehicleAtVendorLocStatus, @vehicleAtVendorLocDateTime, @collectionCompleteStatus, @collectionCompleteDateTime, @vehicleExitVendorLocStatus,@vehicleExitVendorLocDateTime, @receivedAtCrossDockStatus, @receivedAtCrossDockDateTime, @dispatchFromCrossDockDateTime, @dispatchFromCrossDockStatus, @directDeliveryStatus, @directDeliveryDateTime, @deliveryAtPlantLocStatus, @deliveryAtPlantLocDateTime, @podImage);
`;

    await request.query(query);
    res.status(201).json({ message: "Po status added successfully" });
  } catch (error) {
    console.error("sql error :", error);
    res.status(500).json({ error: error.message });
  }
};

// getting po status

exports.getPoStatus = async (req, res) => {
  try {
    const request = getSqlRequest();
    const query = `
            SELECT * FROM 
            tb_El3Pl_PoStatus`;
    const result = await request.query(query);
    if (result.recordset.length > 0) {
      res.status(200).json(result.recordset);
    } else {
      res.status(404).send({
        message: "No data found in Po status table.",
      });
    }
  } catch (err) {
    console.error("SQL error:", err);
    res.status(500).json({ error: err.message });
  }
};

// deleting a po status

exports.deletePoStatus = async (req, res) => {
  try {
    const { poNumber } = req.params;
    const request = getSqlRequest();

    // Validate poNumber
    if (!poNumber) {
      return res.status(400).json({ message: "poNumber is required" });
    }

    // Input parameter
    request.input("poNumber", sql.NVarChar, poNumber);

    // SQL query to delete the PO
    const query = `
      DELETE FROM tb_El3Pl_PoStatus
      WHERE poNumber = @poNumber;
    `;

    await request.query(query);
    res.status(200).json({ message: "PO deleted successfully" });
  } catch (error) {
    console.error("SQL error:", error);
    res.status(500).json({ error: error.message });
  }
};

