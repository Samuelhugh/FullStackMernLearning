import React, { useState } from "react";
import PersonForm from "../components/PersonForm";
import PersonList from "../components/PersonList";

const Main = (props) => {
  // Shared "state" established in Parent component
  const [people, setPeople] = useState([]);

  //We could also write this in our PersonList component
  const removeFromDom = (personId) => {
    setPeople(people.filter((person) => person._id !== personId));
  };

  return (
    <>
      {/* PersonForm and Person List can both utilize the getter and setter established in their parent component */}
      <PersonForm people={people} setPeople={setPeople} />
      <hr />
      <PersonList
        people={people}
        setPeople={setPeople}
        removeFromDom={removeFromDom}
      />
    </>
  );
};

export default Main;
