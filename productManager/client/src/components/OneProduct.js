import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

// Reach router creates a key:value pair inside of our props object
// for every variable found inside the "path" attribute.
// For example, the "path" attribute of the OneProduct component App.js.
const OneProduct = (props) => {
  const [mainProduct, setMainProduct] = useState({});
  // We can deconstruct the id from props.
  // The unique part of our "path" (:id) will have its value
  // assigned in the Link element's "to" attribute
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/product/" + id)
      .then((res) => {
        console.log(res.data);
        setMainProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>Title</td>
            <td>Price</td>
            <td>Description</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{mainProduct.title}</td>
            <td>{mainProduct.price}</td>
            <td>{mainProduct.description}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default OneProduct;
