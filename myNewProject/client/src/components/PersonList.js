import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PersonList = (props) => {
  /* We deconstruct getter and setter which were passed down
    via props by the parent component (app.js) to our child
    component (PersonList.js). Now we can easily use the getter
    and setter without having to write props.getter or props.setter every time: */
  const { removeFromDom, people, setPeople } = props;

  // Delete Handler
  const deleteHandler = (personId) => {
    axios
      .delete(`http://localhost:8000/api/people/${personId}`)
      .then((res) => {
        console.log(res);
        removeFromDom(personId);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Get Request to Render all the people in my Database
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/people")
      .then((res) => {
        console.log(res.data);
        setPeople(res.data);
      }) // Very important and helpful to console log to get used to tracking my Data!
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {people.map((person, index) => (
        // Need the "key" to avoid Error
        // Like our JSX return, map requires ONE parent element, so let's refactor.
        <div key={index}>
          <p>
            {person.firstName}, {person.lastName}
          </p>
          <Link to={`/api/people/${person._id}`}>
            {person.firstName}'s Page!
          </Link>
          <hr />
          <Link to={`/api/people/edit/${person._id}`}>Edit</Link>
          <hr />
          <button
            onClick={(e) => {
              deleteHandler(person._id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default PersonList;
