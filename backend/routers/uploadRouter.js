const multer = require("multer");
const express = require("express");
const { createProject } = require("../controller/controller");
const projectModel = require("../models/projectModel");
const router = express();
const path = require("path");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });
// const uploadOptions = multer({
//   storage: storage,

//   limits: {
//     fileSize: 1000000, //1 MB
//   },

//   fileFilter: (req, file, cb) => {
//     if (
//       file.mimetype === "image/png" ||
//       file.mimetype === "image/jpg" ||
//       file.mimetype === "image/jpeg"
//     ) {
//       cb(null, true);
//     } else {
//       // cb(new Error("only png,jpg,jpge file allow"));
//       cb(console.log("only png,jpg,jpge file allow"));
//     }
//   },
// });
// router.post("/", uploadOptions.single("image"), (req, res) => {
//   res.send(`/${req.file.path}`);
// });

// ======================================================================
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      // file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);
  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb("Images only!");
  }
}

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});
router.post("/", upload.single("image"), (req, res) => {
  res.send(`/uploads/${req.file.filename}`);
  console.log(req.file);
});

router.get("/", async (req, res) => {
  let getAllData = await projectModel.find();
  res.send(getAllData);
});

module.exports = router;
