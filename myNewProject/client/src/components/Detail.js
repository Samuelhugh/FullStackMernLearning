import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import MainDelete from "./MainDelete";
import Header from "./Header";

// Reach router creates a key:value pair inside of our props object
// Each Attribute will be a key and Each Variable will be a value
// For example, the "path" attribute in App.js
const Detail = () => {
  const [person, setPerson] = useState({});
  // We can deconstruct the id from props.
  // The unique part of our KEY "path" (:id) will have its Value assigned in the Link element's "to" attribute
  const { id } = useParams();
  // Implement "useNavigate"
  const navigate = useNavigate();
  // Implement "useLocation"
  const { state } = useLocation();

  useEffect(() => {
    if (!state) {
      axios
        .get("http://localhost:8000/api/people/" + id)
        .then((res) => {
          console.log(res.data);
          setPerson(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      setPerson(state);
    }
  }, [id]);

  // Deletion handler
  const deleteHandler = () => {
    navigate("/");
  };

  return (
    <div>
      <Header titleText={person.firstName} link={"/"} linkText={"Home"} />
      <hr />
      <p>{person.firstName}</p>
      <p>{person.lastName}</p>
      <MainDelete id={person._id} deleteHandler={deleteHandler} />
    </div>
  );
};

export default Detail;
