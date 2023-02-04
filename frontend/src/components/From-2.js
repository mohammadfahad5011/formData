import React from "react";
import { useState } from "react";
import axios from "axios";

const FormContainer2 = () => {
  const [inputs, setInputs] = useState({
    title: "",
    dec: "",
  });
  const [title, setTitle] = useState("");
  const [dec, setDec] = useState("");
  const [image, setImage] = useState("");

  const handleChange = (event) => {
    console.log(event.target.files);
    // const file = event.target.files[0];
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    //all files object
    // console.log(event.target.files);

    //uploaded file from files object
    // console.log(event.target.files[0]);
    // console.log(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // alert(inputs);
    // let file = event.target.files[0];
    // let formData = new FormData();
    // formData.append("name", inputs.name);
    // formData.append("image", inputs.image);
    // console.log(formData);
    // console.log(inputs);

    // const config = {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // };

    // await axios.post("http://localhost:5050/api/project/new", formData, config);
    await axios.post("http://localhost:5050/api/project/new", {
      title,
      dec,
      image,
    });
  };

  const uploadFileHandeler = async (event) => {
    event.preventDefault();
    // alert(inputs);
    // setImage(event.target.value);
    let file = event.target.files[0];
    let formData = new FormData();
    formData.append("image", file);
    // console.log(formData);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const { data } = await axios.post(
      "http://localhost:5050/api/upload",
      formData,
      config
    );
    setImage(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Project title:
          <input
            type="text"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Project dec:
          <input
            type="text"
            name="dec"
            onChange={(e) => setDec(e.target.value)}
          />
        </label>
        <label>
          ImageUrl:
          {/* multipul files */}
          {/* <input multiple type="file" name="image" onChange={handleChange} /> */}
          {/* single file */}
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <input type="file" onChange={uploadFileHandeler} />
        </label>
        <label>
          Image:
          {/* multipul files */}
          {/* <input multiple type="file" name="image" onChange={handleChange} /> */}
          {/* single file */}
          {/* <input type="file" onChange={uploadFileHandeler} /> */}
        </label>
        <input type="submit" />
      </form>
    </>
  );
};

export default FormContainer2;
