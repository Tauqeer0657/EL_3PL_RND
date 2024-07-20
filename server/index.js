const express = require("express");
require("dotenv").config();
const helmet = require("helmet");
const xssClean = require("xss-clean");
const cookieParser = require("cookie-parser");
const { connectToDatabase } = require("./db");
const vendorMasterRoutes = require("./routes/vendorMasterRoutes");
const vendorLocationRoutes = require("./routes/vendorLocationRoutes");
const plantRoutes = require("./routes/plantRoutes");
const poDetailsRoutes = require("./routes/poDetailsRoutes");
const userRegistrationRoutes = require("./routes/userRegistrationRoutes");
const userLogRoutes = require("./routes/userLogRoutes");
const driverDetailsRoutes = require("./routes/driverDetailsRoutes");
const poStatusRoutes = require("./routes/poStatusRoutes");
const poItemDetailsRoutes = require("./routes/poItemDetailsRoutes");
const pageDetailsRoutes = require("./routes/pageDetailsRoutes");
const accessManagementRoutes = require("./routes/accessManagementRoutes");

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse cookies
app.use(cookieParser());

// Use Helmet middleware for basic security headers
app.use(helmet());

// XSS protection middleware
app.use(xssClean());

// API routes
app.use("/api/vendorMaster", vendorMasterRoutes);
app.use("/api/vendorLocation", vendorLocationRoutes);
app.use("/api/plant",plantRoutes);
app.use("/api/poDetails",poDetailsRoutes);
app.use("/api/userRegistration",userRegistrationRoutes);
app.use("/api/userLog",userLogRoutes);
app.use("/api/driverDetails",driverDetailsRoutes);
app.use("/api/poStatus",poStatusRoutes);
app.use("/api/poItemDetails",poItemDetailsRoutes);
app.use("/api/pageDetails",pageDetailsRoutes);
app.use("/api/access",accessManagementRoutes);

// Connect to the database and start the server only if successful
connectToDatabase()
  .then(() => {
    const PORT = process.env.PORT || 1433;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(
      "Failed to start server due to database connection error:",
      err
    );
    process.exit(1); // Exit the process with failure
  });
