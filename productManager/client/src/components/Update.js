import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Update = (props) => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/product/${id}`)
      .then((res) => {
        console.log("INSIDE FRONT-END UPDATE REQUEST");
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDescription(res.data.description);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updateProduct = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/product/${id}`, {
        title,
        price,
        description,
      })
      .then((res) => {
        console.log(res);
        navigate("/api");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Update {title}</h1>
      <form onSubmit={updateProduct}>
        <div>
          <label htmlFor="title">Title: </label>
          <br />
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="price">Price: </label>
          <br />
          <input
            type="text"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <br />
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Update;
