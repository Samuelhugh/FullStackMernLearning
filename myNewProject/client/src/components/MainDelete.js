import React from "react";
import axios from "axios";

const MainDelete = (props) => {
  const { id, deleteHandler } = props;

  // Deletion Handler
  const handleDelete = () => {
    axios
      .delete(`http://localhost:8000/api/people/${id}`)
      .then((res) => {
        console.log(res);
        // Coming from Child Component
        deleteHandler(id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default MainDelete;
