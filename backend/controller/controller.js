const Project = require("../models/projectModel");
const path = require("path");
const createProject = async (req, res) => {
  const { title, dec, image } = req.body;
  // const { image } = req.file;
  console.log(req.body);

  try {
    // const project = new Project({
    //   title: title,
    //   dec: dec,
    //   image: image,
    // });
    // let newProject = await Project.create({ title, dec });
    // res.send("/${req.file.path}");
    // const createProject = await project.save();
    let new_project = await Project.create({ title, dec, image });
    res.send(new_project);
    console.log(new_project);
  } catch (error) {
    res.send(error);
  }
};

// const formData = {
//   title: req.body.title,
//   description: req.body.description,
//   image: req.file.filename,
// };

// // Save the form data to the database
// // ...

// let newData = Chat_gpt_model.create(formData);

module.exports = {
  createProject,
};
