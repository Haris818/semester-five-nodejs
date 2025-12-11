const express = require("express");
const app = express();

const checkAuth = require("./checkAuth");

app.get("/secure", checkAuth, (req, res) => {
  res.send("Welcome to the secure area!");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
