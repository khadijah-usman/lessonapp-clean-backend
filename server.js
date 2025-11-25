// Simple starter server for LessonHub backend

const express = require("express");
const app = express();
const PORT = 3000;

// Test route: lets us see that the backend is running
app.get("/", (req, res) => {
  res.send("LessonHub backend is running ✅");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});