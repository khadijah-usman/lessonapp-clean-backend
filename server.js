// LessonHub backend with middleware

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// ===== MIDDLEWARE =====
const path = require("path");
const fs = require("fs");

// Serve lesson images from /images directory
app.get("/images/:filename", (req, res) => {
  const filePath = path.join(__dirname, "images", req.params.filename);

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      return res.status(404).json({ error: "Image not found" });
    }
    res.sendFile(filePath);
  });
});
// Allow frontend to access backend
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

// Logger - required for coursework
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next();
});

// Test route
app.get("/", (req, res) => {
  res.send("LessonHub backend is running ✅");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});