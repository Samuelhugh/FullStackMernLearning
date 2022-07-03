import React, { useState } from "react";
// Need to import "Axios", so my Client can make Request
import axios from "axios";

const ProductForm = (props) => {
  const { products, setProducts } = props;
  // Keep track of "state" via useState Hook
  const [title, setTitle] = useState("");
  // Because our schema has price as a number, it will automatically convert "50" to 50 for example
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  // Handler for when Form is Submitted
  const onSubmitHandler = (e) => {
    // A form whose button is clicked has a default action which will clear state and refresh the page
    // Prevent default behavior when the Form is Submitted
    e.preventDefault();
    // Make a POST Request to Create a new Product
    axios
      .post("http://localhost:8000/api/product", {
        title, // This is shortcut syntax for title: title
        price, // NOTE: this only works if the getter name (price) EXACTLY matches the field in your schema
        description,
      })
      .then((res) => {
        console.log("RESPONSE FROM PRODUCTFORM ", res); // Always console log to get used to tracking your data!
        console.log("RESPONSE DATA FROM PRODUCTFORM ", res.data);
        // Upon a successful post request, we will setState back to "", which will clear out our form
        setTitle("");
        setPrice("");
        setDescription("");
        // We will update the lifted state of our people array
        // to include the current value in state plus the single
        // new object created and returned from our post request.
        setProducts([...products, res.data]);
      })
      .catch((err) => console.log("ERROR FROM PRODUCTFORM ", err));
  };

  return (
    // JSX Here
    <form onSubmit={onSubmitHandler}>
      <p>
        <label htmlFor="title">Title: </label>
        {/* When the user types in this input, our onChange synthetic event 
        runs this arrow function, setting that event's target's (input) 
        value (what's typed into the input) to our updated state */}
        <input
          type="text"
          name="title"
          // We set our value to title here mainly to help us clear out the inputs on submission
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </p>
      <p>
        <label htmlFor="price">Price: </label>
        <input
          type="number"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </p>
      <p>
        <label htmlFor="desc">Description: </label>
        <input
          type="text"
          name="desc"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </p>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default ProductForm;
