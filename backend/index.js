const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(express.static(path.join(__dirname, "uploads")));
// app.use('/images', express.static(path.join(__dirname, '..', 'assets', 'images')))
app.use("/uploads", express.static("uploads"));
// const__dirname = path.resolve();
// app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

const projectRouter = require("./routers/router");
const uploadImg = require("./routers/uploadRouter");
app.use("/api/project", projectRouter);
app.use("/api/upload", uploadImg);
const PORT = process.env.PORT || 5050;

mongoose.set("strictQuery", true);
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/formData", () => {
      console.log("Db connected", PORT);
    });
  } catch (error) {
    console.log(error);
  }
};

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
  connectDB();
});

module.exports = connectDB;
