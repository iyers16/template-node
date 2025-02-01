// server.js (for JavaScript setup)
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json()); // Parses JSON requests

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

