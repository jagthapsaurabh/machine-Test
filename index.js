const express = require("express");
const res = require("express/lib/response");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const fs = require("fs");
// const path = require("path");
const userRoutes = require("./routes/user-route");
const HttpError = require("./model/erro-model");

const app = express();
app.use(bodyParser.json());

// app.use("/uploads/images", express.static(path.join("uploads", "images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-allow-origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use("/user", userRoutes);
// app.use((req, res, next) => {
//   const error = new HttpError("Could not find this route.", 404);
//   throw error;
// });

mongoose
  .connect(
    "mongodb+srv://admin:saurabh@cluster0.tchpw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000, () => {
      console.log("connected");
    });
  })
  .catch((err) => {
    res.json({ message: "seerver not connected" });
  });
