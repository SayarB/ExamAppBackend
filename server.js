const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ExamModel = require("./models/Exam");
require("dotenv").config();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
//importing routes
const apiRoutes = require("./api/routes");
//Environment Variables
const MONGO_URI = process.env.MONGO_URI;
//DB Connection
mongoose.connect(
  MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to Database");
  }
);

//DB Helper Methods

//routes

app.use("/api/v1", apiRoutes);

//listen on a port
app.listen(8080, () => {
  console.log("Listening on Port 8080");
});
