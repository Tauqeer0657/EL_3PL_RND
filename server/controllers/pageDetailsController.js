const { sql } = require("../db");
const getSqlRequest = require("../utils/dbUtils");

// adding a Page details

exports.addPage = async (req, res) => {
  try {
    const request = getSqlRequest();

    // Input parameters
    request.input("pageCode", sql.NVarChar, req.body.pageCode);
    request.input("pageName", sql.NVarChar, req.body.pageName);
    request.input("regDate", sql.DateTime, new Date());
    request.input("regBy", sql.NVarChar, req.body.regBy);
    request.input("pageLink", sql.NVarChar, req.body.pageLink);

    // SQL query to insert new Page
    const query = `
    INSERT INTO tb_EL3PL_PageTable
    (pageCode, pageName, regDate, regBy, pageLink)
    VALUES (@pageCode, @pageName, @regDate, @regBy, @pageLink);
  `;
  
    await request.query(query);
    res.status(201).json({ message: "Page added successfully" });
  } catch (err) {
    console.error("SQL error:", err);
    res.status(500).json({ error: err.message });
  }
};