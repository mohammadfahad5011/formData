import React, { useEffect, useState } from "react";
import axios from "axios";

const DataScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5050/api/upload/")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      {data.map((item) => {
        console.log(item.image);
        return (
          <>
            <div>
              <label htmlFor="title">Title: {item.title}</label>
            </div>
            <div>
              <label htmlFor="description">
                Description: {item.description}
              </label>
            </div>
            <div>
              <label htmlFor="image">Image:</label>
              <img
                src={`http://localhost:5050${item.image}`}
                alt={item.title}
              />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default DataScreen;
