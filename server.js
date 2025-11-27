const express = require("express");
const app = express();

// will be overridden in docker-compose
const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.send("Backend-2 is running.");
});

app.listen(PORT, () => {
  console.log(`Backend-2 running on port ${PORT}`);
});