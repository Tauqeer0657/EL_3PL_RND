const { sql } = require("../db");
const getSqlRequest = require("../utils/dbUtils");

// adding access for particular page

exports.addAccess = async (req, res) => {
    try {
      const request = getSqlRequest();
  
      // Input parameters
      request.input("registrationID", sql.NVarChar, req.body.registrationID);
      request.input("pageCode", sql.NVarChar, req.body.pageCode);
      request.input("page_YN", sql.NVarChar, req.body.page_YN);
      request.input("page_Inq", sql.NVarChar, req.body.page_Inq);
      request.input("page_Save", sql.NVarChar, req.body.page_Save);
      request.input("page_Update", sql.NVarChar, req.body.page_Update);
      request.input("page_Delete", sql.NVarChar, req.body.page_Delete);
  
      // SQL query to insert a new access management record
      const query = `
      INSERT INTO tb_EL3PL_Access_Management
      (registrationID, pageCode, page_YN, page_Inq, page_Save, page_Update, page_Delete)
      VALUES (@registrationID, @pageCode, @page_YN, @page_Inq, @page_Save, @page_Update, @page_Delete);
      `;
  
      await request.query(query);
      res.status(201).json({ message: "Access of given page is added successfully" });
    } catch (err) {
      console.error("SQL error:", err);
      res.status(500).json({ error: err.message });
    }
};

// getting access of particular user

exports.getAccess = async (req,res) => {
    try {
      const request = getSqlRequest();
      const { registrationID } = req.params;
      request.input("registrationID", sql.NVarChar, registrationID);
      const query = `
            SELECT 
            a.registrationID, 
            a.pageCode, 
            p.pageName,
            p.pageLink, 
            a.page_YN, 
            a.page_Inq, 
            a.page_Save, 
            a.page_Update, 
            a.page_Delete
        FROM 
            tb_EL3PL_Access_Management a
        JOIN 
            tb_EL3PL_PageTable p
        ON 
            a.pageCode = p.pageCode
        WHERE 
            a.registrationID = @registrationID;
      `;
      const result = await request.query(query);
      if (result.recordset.length > 0) {
        res.status(200).json(result.recordset);
      } else {
        res.status(404).send({
          message: "No access found of given user.",
        });
      }
    } catch (err) {
      console.error("SQL error:", err);
      res.status(500).json({ error: err.message });
    }
}

// getting template of access page 

exports.getTemplate = async (req,res) => {
  try {
    const request = getSqlRequest();
    const query = `
          SELECT 
          pageCode, 
          pageName,
          '' AS page_YN, 
          '' AS page_Inq, 
          '' AS page_Save, 
          '' AS page_Update, 
          '' AS page_Delete
      FROM  
          tb_EL3PL_PageTable;
    `;
    const result = await request.query(query);
    if (result.recordset.length > 0) {
      res.status(200).json(result.recordset);
    } else {
      res.status(404).send({
        message: "No data found in access table.",
      });
    }
  } catch (err) {
    console.error("SQL error:", err);
    res.status(500).json({ error: err.message });
  }
}