import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

// Reach router creates a key:value pair inside of our props object
// for every variable found inside the "path" attribute.
// For example, the "path" attribute of the Detail component - App.js.
const Detail = (props) => {
  const [person, setPerson] = useState({});
  // We can deconstruct the id from props.
  // The unique part of our "path" (:id) will have its value
  // assigned in the Link element's "to" attribute
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/people/" + id)
      .then((res) => {
        console.log(res.data);
        setPerson(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <p>{person.firstName}</p>
      <p>{person.lastName}</p>
    </div>
  );
};

export default Detail;
