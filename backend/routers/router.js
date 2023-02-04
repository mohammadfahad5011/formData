const express = require("express");

const { createProject } = require("../controller/controller");
// const uploadOptions = require("./uploadRouter");

const router = express();

router.post("/new", createProject);
// route.post('/register',uploadOptions.single('image'),registerUser)

module.exports = router;
