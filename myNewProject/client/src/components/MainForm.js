import React, { useState } from "react";

const MainForm = (props) => {
  // Destructuring "SubmitHandler" and "ButtonText" so that this form is dynamic
  const { submitHandler, buttonText, personObjectTracker } = props;
  // Making one object to package key/value pairs and use between two forms/ Also uses less lines of code
  const [person, setPerson] = useState(
    personObjectTracker || {
      firstName: "",
      lastName: "",
    }
  );
  // Set state for displaying errors
  const [errors, setErrors] = useState({});
  // This process is identical to the one we used with our Detail.js component
  // const { id } = useParams();

  // Handle inputs being inputted
  const handleChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  // Handler when the Form is submitted
  const handleSubmit = (e) => {
    // Prevent Default Browser behavior (Page Refresh), So Data isn't Erased when submit happen
    e.preventDefault();
    // Since this Form will be used in "add" and "update", I will use like a link function that will be dynamic coming in from props from Child Components
    submitHandler(person, setErrors);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {errors.firstName && <span>{errors.firstName.message}</span>}
        <p>
          <label>First Name</label>
          <br />
          <input
            type="text"
            name="firstName"
            value={person.firstName}
            onChange={handleChange}
          />
        </p>
        {errors.lastName && <span>{errors.lastName.message}</span>}
        <p>
          <label>Last Name</label>
          <br />
          <input
            type="text"
            name="lastName"
            value={person.lastName}
            onChange={handleChange}
          />
        </p>
        <button>{buttonText}</button>
      </form>
    </div>
  );
};

export default MainForm;
