import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DisplayAll = (props) => {
  const { removeFromDom, products, setProducts } = props;

  // const removeFromDom = (productsId) => {
  //   setProducts(products.filter((product) => product._id !== productsId));
  // };

  const deleteHandler = (productId) => {
    axios
      .delete(`http://localhost:8000/api/product/${productId}`)
      .then((res) => {
        removeFromDom(productId);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/product")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {products.map((item, index) => {
        return (
          <table key={index}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Description</th>
                <th>Links</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>
                  <Link to={`/api/product/${item._id}`}>
                    Link to {item.title}'s Page!
                  </Link>
                  | <Link to={`/api/product/edit/${item._id}`}>Edit</Link> |
                  <button
                    onClick={(e) => {
                      deleteHandler(item._id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
};

export default DisplayAll;
