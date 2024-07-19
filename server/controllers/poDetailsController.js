const { sql } = require("../db");
const excelToJson = require("convert-excel-to-json");
const getSqlRequest = require("../utils/dbUtils");
const moment = require("moment");

//upload metrial ready po upload excel file api

exports.uploadFile = async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: "File is missing" });
    }

    const excelData = excelToJson({
      sourceFile: file.path,
      header: {
        rows: 1,
      },
    });

    if (
      !excelData ||
      !excelData["purchdoc"] ||
      !Array.isArray(excelData["purchdoc"])
    ) {
      return res
        .status(400)
        .json({ error: "Invalid Excel format or missing sheet" });
    }

    const allRowsData = excelData["purchdoc"];

    if (allRowsData.length === 0) {
      return res.status(400).json({ error: "Excel file is empty" });
    }

    const columnToKey = {
      A: "purchDoc",
      B: "item",
      C: "type",
      D: "cat",
      E: "vendor_SupplyingPlant",
      F: "prog",
      G: "pgr",
      H: "docDate",
      I: "material",
      J: "shortText",
      K: "matlGroup",
      L: "POH",
      M: "D",
      N: "I1",
      O: "I2",
      P: "A",
      Q: "trackingNo",
      R: "plnt",
      S: "sloc",
      T: "quantity",
      U: "oun",
      V: "quantitySKU",
      W: "sku",
      X: "netPrice",
      Y: "crcy",
      Z: "per",
      AA: "agreement",
      AB: "item1",
      AC: "targVal",
      AD: "totOpenVal",
      AE: "openValue",
      AF: "relValue",
      AG: "quantity1",
      AH: "openTgtQty",
      AI: "relQty",
      AJ: "valStart",
      AK: "vPerEnd",
      AL: "toBeDel",
      AM: "toBeDel1",
      AN: "toBeInv",
      AO: "toBeInv1",
      AP: "quotDdln",
      AQ: "s",
      AR: "collNo",
      AS: "number",
      AT: "ctl",
      AU: "infoRec",
      AV: "number1",
      AW: "grp",
      AX: "strat",
      AY: "relStat",
      AZ: "rel",
      BA: "iStLoc",
      BB: "nameOfVendor",
      BC: "opu",
      BD: "tx",
      BE: "taxJur",
      BF: "netValue",
      BG: "i",
      BH: "notified",
      BI: "stkSeg",
      BJ: "reqSeg",
      BK: "confItemNo",
      BL: "sortNo",
      BM: "extHCat",
      BN: "RU",
      BO: "reqmtPrio",
      BP: "smartNo",
      BQ: "char1",
      BR: "charDes1",
      BS: "char2",
      BT: "charDes2",
      BU: "char3",
      BV: "charDes3",
      BW: "requestedBy",
      BX: "delDate",
      BY: "qtyOnHand",
      BZ: "manufact",
      CA: "manufacturerPartNo",
      CB: "name1",
      CC: "modelNumber",
      CD: "supersed",
      CE: "addMPN",
      CF: "serNo",
      CG: "limit",
      CH: "freeLimit",
      CI: "intMatNo",
      CJ: "sourceInd",
      CK: "sourceInd1",
      CL: "createdOn",
      CM: "payT",
      CN: "paymentTermsDescription",
      CO: "itemCrDT",
    };

    const jsonData = allRowsData.map((row) => {
      const jsonRow = {};
      Object.keys(columnToKey).forEach((col) => {
        jsonRow[columnToKey[col]] =
          row[col] !== undefined && row[col] !== null
            ? row[col].toString()
            : null;
      });
      return jsonRow;
    });
    console.log(jsonData);

    let successCount = 0;
    let duplicateCount = 0;
    const totalRecords = jsonData.length;

    for (const data of jsonData) {
      try {
        const request = getSqlRequest();
        const delDate = moment(data.delDate, "DD.MM.YYYY").toDate();

        // const yearMonthDate = moment(data.yearMonth, "MM-YYYY")
        //   .endOf("month")
        //   .toDate();

        // const result = await request
        //   .input("purchDoc", sql.NVarChar, data.purchDoc)
        //   .query(
        //     "SELECT COUNT(*) AS count FROM tb_owm_3pldsp_master_Test WHERE purchDoc = @purchDoc"
        //   );

        // if (result.recordset[0].count > 0) {
        //   duplicateCount++;
        //   continue;
        // }

        const insertRequest = getSqlRequest();
        await insertRequest
          .input("purchDoc", sql.NVarChar, data.purchDoc)
          .input("item", sql.NVarChar, data.item)
          .input("type", sql.NVarChar, data.type)
          .input("cat", sql.NVarChar, data.cat)
          .input(
            "vendor_SupplyingPlant",
            sql.NVarChar,
            data.vendor_SupplyingPlant
          )
          .input("prog", sql.NVarChar, data.prog)
          .input("pgr", sql.NVarChar, data.pgr)
          .input("docDate", sql.DateTime, new Date(data.docDate))
          .input("material", sql.NVarChar, data.material)
          .input("shortText", sql.NVarChar, data.shortText)
          .input("matlGroup", sql.NVarChar, data.matlGroup)
          .input("POH", sql.NVarChar, data.POH)
          .input("D", sql.NVarChar, data.D)
          .input("I1", sql.NVarChar, data.I1)
          .input("I2", sql.NVarChar, data.I2)
          .input("A", sql.NVarChar, data.A)
          .input("trackingNo", sql.NVarChar, data.trackingNo)
          .input("plnt", sql.NVarChar, data.plnt)
          .input("sloc", sql.NVarChar, data.sloc)
          .input("quantity", sql.NVarChar, data.quantity)
          .input("oun", sql.NVarChar, data.oun)
          .input("quantitySKU", sql.NVarChar, data.quantitySKU)
          .input("sku", sql.NVarChar, data.sku)
          .input("netPrice", sql.NVarChar, data.netPrice)
          .input("crcy", sql.NVarChar, data.crcy)
          .input("per", sql.NVarChar, data.per)
          .input("agreement", sql.NVarChar, data.agreement)
          .input("item1", sql.NVarChar, data.item1)
          .input("targVal", sql.NVarChar, data.targVal)
          .input("totOpenVal", sql.NVarChar, data.totOpenVal)
          .input("openValue", sql.NVarChar, data.openValue)
          .input("relValue", sql.NVarChar, data.relValue)
          .input("quantity1", sql.NVarChar, data.quantity1)
          .input("openTgtQty", sql.NVarChar, data.openTgtQty)
          .input("relQty", sql.NVarChar, data.relQty)
          .input("valStart", sql.NVarChar, data.valStart)
          .input("vPerEnd", sql.NVarChar, data.vPerEnd)
          .input("toBeDel", sql.NVarChar, data.toBeDel)
          .input("toBeDel1", sql.NVarChar, data.toBeDel1)
          .input("toBeInv", sql.NVarChar, data.toBeInv)
          .input("toBeInv1", sql.NVarChar, data.toBeInv1)
          .input("quotDdln", sql.NVarChar, data.quotDdln)
          .input("s", sql.NVarChar, data.s)
          .input("collNo", sql.NVarChar, data.collNo)
          .input("number", sql.NVarChar, data.number)
          .input("ctl", sql.NVarChar, data.ctl)
          .input("infoRec", sql.NVarChar, data.infoRec)
          .input("number1", sql.NVarChar, data.number1)
          .input("grp", sql.NVarChar, data.grp)
          .input("strat", sql.NVarChar, data.strat)
          .input("relStat", sql.NVarChar, data.relStat)
          .input("rel", sql.NVarChar, data.rel)
          .input("iStLoc", sql.NVarChar, data.iStLoc)
          .input("nameOfVendor", sql.NVarChar, data.nameOfVendor)
          .input("opu", sql.NVarChar, data.opu)
          .input("tx", sql.NVarChar, data.tx)
          .input("taxJur", sql.NVarChar, data.taxJur)
          .input("netValue", sql.NVarChar, data.netValue)
          .input("i", sql.NVarChar, data.i)
          .input("notified", sql.NVarChar, data.notified)
          .input("stkSeg", sql.NVarChar, data.stkSeg)
          .input("reqSeg", sql.NVarChar, data.reqSeg)
          .input("confItemNo", sql.NVarChar, data.confItemNo)
          .input("sortNo", sql.NVarChar, data.sortNo)
          .input("extHCat", sql.NVarChar, data.extHCat)
          .input("RU", sql.NVarChar, data.RU)
          .input("reqmtPrio", sql.NVarChar, data.reqmtPrio)
          .input("smartNo", sql.NVarChar, data.smartNo)
          .input("char1", sql.NVarChar, data.char1)
          .input("charDes1", sql.NVarChar, data.charDes1)
          .input("char2", sql.NVarChar, data.char2)
          .input("charDes2", sql.NVarChar, data.charDes2)
          .input("char3", sql.NVarChar, data.char3)
          .input("charDes3", sql.NVarChar, data.charDes3)
          .input("requestedBy", sql.NVarChar, data.requestedBy)
          .input("delDate", sql.Date, delDate)
          .input("qtyOnHand", sql.NVarChar, data.qtyOnHand)
          .input("manufact", sql.NVarChar, data.manufact)
          .input("manufacturerPartNo", sql.NVarChar, data.manufacturerPartNo)
          .input("name1", sql.NVarChar, data.name1)
          .input("modelNumber", sql.NVarChar, data.modelNumber)
          .input("supersed", sql.NVarChar, data.supersed)
          .input("addMPN", sql.NVarChar, data.addMPN)
          .input("serNo", sql.NVarChar, data.serNo)
          .input("limit", sql.NVarChar, data.limit)
          .input("freeLimit", sql.NVarChar, data.freeLimit)
          .input("intMatNo", sql.NVarChar, data.intMatNo)
          .input("sourceInd", sql.NVarChar, data.sourceInd)
          .input("sourceInd1", sql.NVarChar, data.sourceInd1)
          .input("createdOn", sql.Date, data.createdOn)
          .input("payT", sql.NVarChar, data.payT)
          .input(
            "paymentTermsDescription",
            sql.NVarChar,
            data.paymentTermsDescription
          )
          .input("itemCrDT", sql.Date, data.itemCrDT)
          .query(
            "INSERT INTO tb_EL3PL_Purches_Document_test (purchDoc, item, type, cat, vendor_SupplyingPlant, prog, pgr, docDate, material, shortText, matlGroup, POH, D, I1, I2, A, trackingNo, plnt, sloc, quantity, oun, quantitySKU, sku, netPrice, crcy, per, agreement, item1, targVal, totOpenVal, openValue, relValue, quantity1, openTgtQty, relQty, valStart, vPerEnd, toBeDel, toBeDel1, toBeInv, toBeInv1, quotDdln, s, collNo, number, ctl, infoRec, number1, grp, strat, relStat, rel, iStLoc, nameOfVendor, opu, tx, taxJur, netValue, i, notified, stkSeg, reqSeg, confItemNo, sortNo, extHCat, RU, reqmtPrio, smartNo, char1, charDes1, char2, charDes2, char3, charDes3, requestedBy, delDate, qtyOnHand, manufact, manufacturerPartNo, name1, modelNumber, supersed, addMPN, serNo, limit, freeLimit, intMatNo, sourceInd, sourceInd1, createdOn, payT, paymentTermsDescription, itemCrDT) VALUES (@purchDoc, @item, @type, @cat, @vendor_SupplyingPlant, @prog, @pgr, @docDate, @material, @shortText, @matlGroup, @POH, @D, @I1, @I2, @A, @trackingNo, @plnt, @sloc, @quantity, @oun, @quantitySKU, @sku, @netPrice, @crcy, @per, @agreement, @item1, @targVal, @totOpenVal, @openValue, @relValue, @quantity1, @openTgtQty, @relQty, @valStart, @vPerEnd, @toBeDel, @toBeDel1, @toBeInv, @toBeInv1, @quotDdln, @s, @collNo, @number, @ctl, @infoRec, @number1, @grp, @strat, @relStat, @rel, @iStLoc, @nameOfVendor, @opu, @tx, @taxJur, @netValue, @i, @notified, @stkSeg, @reqSeg, @confItemNo, @sortNo, @extHCat, @RU, @reqmtPrio, @smartNo, @char1, @charDes1, @char2, @charDes2, @char3, @charDes3, @requestedBy, @delDate, @qtyOnHand, @manufact, @manufacturerPartNo, @name1, @modelNumber, @supersed, @addMPN, @serNo, @limit, @freeLimit, @intMatNo, @sourceInd, @sourceInd1, @createdOn, @payT, @paymentTermsDescription, @itemCrDT)"
          );

        successCount++;
      } catch (err) {
        console.error(`Error inserting row: ${err.message}`);
        return res.status(500).json({ error: "Internal Server Error" });
      }
    }

    res.status(200).json({
      message: "File uploaded and data inserted successfully",
      totalRecords,
      successCount,
      duplicateCount,
    });
  } catch (err) {
    console.error(`Error processing file: ${err.message}`);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// getting a po details

exports.getAllPoDetails = async (req, res) => {
  try {
    const request = getSqlRequest();
    const query = `
          SELECT * FROM 
          tb_EL3PL_Purches_Document_test`;
    const result = await request.query(query);
    if (result.recordset.length > 0) {
      res.status(200).json(result.recordset);
    } else {
      res.status(404).send({
        message: "No data found in purchase document table.",
      });
    }
  } catch (err) {
    console.error("SQL error:", err);
    res.status(500).json({ error: err.message });
  }
};

// getting individual po details

exports.getIndividualPoDetails = async (req, res) => {
  try {
    const request = getSqlRequest();
    const { purchDoc } = req.params;
    const query = `
      SELECT *
      FROM tb_EL3PL_Purches_Document_test
      WHERE purchDoc = @purchDoc;
    `;
    request.input("purchDoc", sql.NVarChar, purchDoc);
    const result = await request.query(query);
    if (result.recordset.length > 0) {
      res.status(200).json(result.recordset);
    } else {
      res.status(404).send({
        message: "No data found in the purchase document table.",
      });
    }
  } catch (err) {
    console.error("SQL error:", err);
    res.status(500).json({ error: err.message });
  }
};

// getting individual po details with company name

exports.getVendorSupplyPlant = async (req, res) => {
  try {
    const request = getSqlRequest();
    const { purchDoc } = req.params;
    const query = `
        SELECT pd.*, vm.companyName
        FROM tb_EL3PL_Purches_Document_test pd
        JOIN tb_El3Pl_VendorMaster vm ON pd.vendor_SupplyingPlant = vm.vendorCode
        WHERE purchDoc = @purchDoc;
        `;
    request.input("purchDoc", sql.NVarChar, purchDoc);
    const result = await request.query(query);
    if (result.recordset.length > 0) {
      res.status(200).json(result.recordset);
    } else {
      res.status(404).send({
        message: "No data found in the purchase document table.",
      });
    }
  } catch (err) {
    console.error("SQL error:", err);
    res.status(500).json({ error: err.message });
  }
};

// ---------------------- testing ------------------------

// adding a po details

exports.addPoDetails = async (req, res) => {
  try {
    const request = getSqlRequest();

    // Input parameters
    request.input("poNumber", sql.NVarChar, req.body.poNumber);
    request.input("vendorCode", sql.NVarChar, req.body.vendorCode);
    request.input(
      "vendorLocationCode",
      sql.NVarChar,
      req.body.vendorLocationCode
    );
    request.input("poDate", sql.NVarChar, req.body.poDate);
    request.input("matDoc", sql.NVarChar, req.body.matDoc);
    request.input("material", sql.NVarChar, req.body.material);
    request.input(
      "materialDescription",
      sql.NVarChar,
      req.body.materialDescription
    );
    request.input("qty", sql.NVarChar, req.body.qty);
    request.input("unitOfEntry", sql.NVarChar, req.body.unitOfEntry);
    request.input("plantCode", sql.NVarChar, req.body.plantCode);
    request.input("mvt", sql.NVarChar, req.body.mvt);
    request.input(
      "poRegistrationDate",
      sql.NVarChar,
      req.body.poRegistrationDate
    );
    request.input(
      "poConfirmationDate",
      sql.NVarChar,
      req.body.poConfirmationDate
    );
    request.input("planning", sql.NVarChar, req.body.planning);
    request.input("isActive", sql.NVarChar, "true");
    request.input("createdBy", sql.NVarChar, "admin");
    request.input("createdDate", sql.DateTime, new Date());
    // SQL query to insert new purchase order details
    const query = `
       INSERT INTO tb_El3Pl_PODetails
       (poNumber, vendorCode, vendorLocationCode, poDate, matDoc, material,materialDescription, qty, unitOfEntry, plantCode, mvt,poRegistrationDate, poConfirmationDate, planning, isActive, createdBy, createdDate)
       VALUES (@poNumber, @vendorCode, @vendorLocationCode, @poDate, @matDoc,    @material, @materialDescription, @qty, @unitOfEntry, @plantCode, @mvt,    @poRegistrationDate, @poConfirmationDate, @planning, @isActive, @createdBy,@createdDate);
    `;
    await request.query(query);
    res.status(201).json({ message: "Po details added successfully" });
  } catch (error) {
    console.error("sql error :", error);
    res.status(500).json({ error: error.message });
  }
};

// getting a po details

exports.getPoDetails = async (req, res) => {
  try {
    const request = getSqlRequest();
    const query = `
          SELECT * FROM 
          tb_El3Pl_PODetails`;
    const result = await request.query(query);
    if (result.recordset.length > 0) {
      res.status(200).json(result.recordset);
    } else {
      res.status(404).send({
        message: "No data found in Po details table.",
      });
    }
  } catch (err) {
    console.error("SQL error:", err);
    res.status(500).json({ error: err.message });
  }
};

// deleting a po details

exports.deletePoDetails = async (req, res) => {
  try {
    const request = getSqlRequest();
    const { poNumber } = req.params;

    // Delete the PO
    const deleteQuery = `
        DELETE FROM tb_El3Pl_PODetails
        WHERE poNumber = @poNumber;
      `;
    request.input("poNumber", sql.NVarChar, poNumber);
    const result = await request.query(deleteQuery);

    if (result.rowsAffected[0] === 0) {
      return res.status(404).json({ message: "PO not found." });
    }

    res.status(200).json({ message: "PO deleted successfully." });
  } catch (err) {
    console.error("SQL error:", err);
    res.status(500).json({ error: err.message });
  }
};
