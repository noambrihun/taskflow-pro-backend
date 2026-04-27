const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


app.use(cors());
app.use(express.json());

mongoose
.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Employee Manager API Running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port 3000");
});