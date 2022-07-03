import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Update = (props) => {
  // This process is identical to the one we used with our Detail.js component
  const { id } = useParams();
  // Setting up "state" for this file
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // Setting up "Navigate" for onSubmit
  const navigate = useNavigate();

  // Retrieve the current values for this person so we can fill
  // in the form with what is in the db currently (Pre-Populate)
  useEffect(() => {
    // Using String Interpolation
    axios
      .get(`http://localhost:8000/api/people/${id}`)
      .then((res) => {
        console.log(res);
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updatePerson = (e) => {
    // Preventing Default Browser behavior (Page Refresh) so the Form Data isn't Erased when submitted
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/people/${id}`, {
        firstName, // This is shortcut syntax for firstName: firstName
        lastName, // This is shortcut syntax for lastName: lastName
      })
      .then((res) => {
        console.log(res);
        // This will take us back to the Main.js
        navigate("/api/people");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Update a Person</h1>
      <form onSubmit={updatePerson}>
        <p>
          <label>First Name</label>
          <br />
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </p>
        <p>
          <label>Last Name</label>
          <br />
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </p>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Update;
