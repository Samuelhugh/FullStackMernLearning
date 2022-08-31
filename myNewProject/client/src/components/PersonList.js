import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MainDelete from "./MainDelete";
import Header from "./Header";

const PersonList = () => {
  /* We deconstruct getter and setter which were passed down
    via props by the parent component (app.js) to our child
    component (PersonList.js). Now we can easily use the getter
    and setter without having to write props.getter or props.setter every time: */
  // const { removeFromDom, people, setPeople } = props;
  const [people, setPeople] = useState([]);

  // GET Request to Backend API Server to Retrieve all the people Objects in my Database for rendering
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/people")
      .then((res) => {
        console.log(res.data);
        setPeople(res.data);
      }) // Very important and helpful to console log to get used to tracking my Data!
      .catch((err) => console.log(err));
  }, []);

  // Delete Handler
  const deleteHandler = (personId) => {
    setPeople(people.filter((person) => person._id !== personId));
  };

  return (
    <div>
      <Header
        titleText={"All People"}
        link={"/peopleform"}
        linkText={"Create a Person"}
      />
      <hr />
      {people.map((person, index) => (
        // Need the "key" to avoid Error
        // Like our JSX return, map requires ONE parent element.
        <div key={index}>
          <p>
            {person.firstName}, {person.lastName}
          </p>
          <Link to={`/api/people/${person._id}`} state={person}>
            {person.firstName}'s Page!
          </Link>
          <hr />
          <Link to={`/api/people/edit/${person._id}`} state={person}>
            Edit
          </Link>
          <hr />
          <MainDelete id={person._id} deleteHandler={deleteHandler} />
        </div>
      ))}
    </div>
  );
};

export default PersonList;
