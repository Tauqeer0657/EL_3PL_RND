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