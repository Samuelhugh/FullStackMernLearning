import React, { useEffect, useState } from "react";
import axios from "axios";

// So Props can be omitted?
const PersonForm = (props) => {
  const [message, setMessage] = useState("Loading...");
  // Keep track of what is being typed via useState hook
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { people, setPeople } = props; //this is new
  // On first render only
  useEffect(() => {
    axios
      .get("http://localhost:8000/api")
      .then((res) => setMessage(res.data.message))
      .catch((err) => console.log(`ERROR IN PersonForm ${err}`));
  }, []);
  // Handler when the Form is submitted
  const onSubmitHandler = (e) => {
    // Prevent Default behavior of the submit
    e.preventDefault();
    // Make a POST request to create new Person
    axios
      .post("http://localhost:8000/api/people", {
        firstName, // This is ShortHand Syntax for firstName: firstName
        lastName,
      })
      .then((res) => {
        // Always console log to get used to Tracking my Data!
        console.log(res);
        console.log(res.data);
        // we will update the lifted state of our people array
        // to include the current value in state plus the single
        // new object created and returned from our post request.
        setPeople([...people, res.data]); //this is new
      })
      .catch((err) => console.log(`ERROR IN onSubmitHandler ${err}`));
  };
  return (
    // Using JSX
    <div>
      <h2>Message from the Backend: {message}</h2>
      <form onSubmit={onSubmitHandler}>
        <p>
          <label htmlFor="fName">Enter your First Name: </label>
          <br />
          {/* When the user types in this input, our onChange synthetic event 
          runs this arrow function, setting that event's target's (input) 
          value (what's typed into the input) to our updated state */}
          <input
            type="text"
            name="fName"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="lName">Enter your Last Name: </label>
          <br />
          <input
            type="text"
            name="lName"
            onChange={(e) => setLastName(e.target.value)}
          />
        </p>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default PersonForm;
