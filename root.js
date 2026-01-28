const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

// middleware
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Server chal raha hai 🚀");
});

// mongoDB connect
mongoose
  .connect("mongodb://127.0.0.1:27017/work")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("MongoDB error:", err);
  });

// server start
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
