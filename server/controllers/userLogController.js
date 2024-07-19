const { sql } = require("../db");
const getSqlRequest = require("../utils/dbUtils");

// adding user log

exports.addUserLog = async (req, res) => {
  try {
    const request = getSqlRequest();

    // Input parameters
    request.input("registrationID", sql.NVarChar, req.body.registrationID);
    request.input("userName", sql.NVarChar, req.body.userName);
    request.input("ipAddress", sql.NVarChar, req.body.ipAddress);
    request.input("loginTime", sql.NVarChar, req.body.loginTime);

    const query = `
        INSERT INTO tb_El3Pl_UserLog
        (registrationID,userName,ipAddress,loginTime)
        VALUES(@registrationID,@userName,@ipAddress,@loginTime)`;

    await request.query(query);
    res.status(201).json({message : "user log inserted successfully"});
  }catch (err) {
    console.error("SQL error:", err);
    res.status(500).json({ error: err.message });
  }
};

// getting all User log

exports.getUserLogs = async (req, res) => {
    try {
      const request = getSqlRequest();
      const query = `
          SELECT *
          FROM tb_El3Pl_UserLog;
        `;
      const result = await request.query(query);
      if (result.recordset.length > 0) {
        res.status(200).json(result.recordset);
      } else {
        res.status(404).send({
          message: "No data found in the UserLog table.",
        });
      }
    } catch (err) {
      console.error("SQL error:", err);
      res.status(500).json({ error: err.message });
    }
};
  
