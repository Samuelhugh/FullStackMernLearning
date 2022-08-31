import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import MainForm from "./MainForm";

const Update = () => {
  // Extracting an ID to use in this component
  const { id } = useParams();
  // Set "Navigate" to go to homepage onSubmit
  const navigate = useNavigate();
  // set "useLocation" to pull in data - Link and Navigation works also...
  const { state } = useLocation();
  // Create Person Object Tracker to see if state is present
  const [personObjectTracker, setPersonObjectTracker] = useState(null);

  // Retrieve Person Object from DB IF not currently present, ELSE set what is in useLocation state to setPersonObjectTracker to Pre-Populate
  useEffect(() => {
    if (!state) {
      axios
        .get(`http://localhost:8000/api/people/${id}`)
        .then((res) => {
          console.log(res);
          setPersonObjectTracker(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setPersonObjectTracker(state);
    }
    // Using Dependency Array to use the IDs dynamically
  }, [id]);

  const submitHandler = (person, setErrors) => {
    axios
      .put(`http://localhost:8000/api/people/${id}`, person)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setErrors(err.response.data.errors);
        navigate(`/api/people/edit/${id}`);
      });
  };

  return (
    <div>
      <h1>Update a Person</h1>
      {personObjectTracker && (
        <MainForm
          submitHandler={submitHandler}
          buttonText="Update person"
          personObjectTracker={personObjectTracker}
        />
      )}
    </div>
  );
};

export default Update;
