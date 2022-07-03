import React, { useState } from "react";
import axios from "axios";

const AuthorForm = (props) => {
  const { authors, setAuthors } = props;
  // state for this file
  const [authorName, setAuthorName] = useState("");

  // Handle tasks when the Form is Submitted
  const onSubmitHandler = (e) => {
    // A form whose button is clicked has a default action which will clear state and refresh the page
    // Prevent default behavior when the Form is Submitted
    e.preventDefault();
    // POST Request, Create a new Product
    axios
      .post("http://localhost:8000/api/authors/new", {
        // This is shortcut syntax for title: title
        // NOTE: this only works if the getter name EXACTLY matches the field in your schema
        authorName,
      })
      .then((res) => {
        // Always console log to get used to tracking your data!
        console.log("INSIDE AUTHORFORM ONSUBMITHANDLER: ", res);
        // Upon a successful post request, we will setState back to "", which will clear out our form
        setAuthorName("");
        // We will update the lifted state of our author array
        // to include the current value in state plus the single
        // new object created and returned from our post request.
        setAuthors([...authors, res.data]);
      })
      .catch((err) =>
        console.log("ONSUBMITHANDLER ERROR IN AUTHORFORM: ", err)
      );
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <p>
        <label htmlFor="authName">Author Name: </label>
        {/* When the user types in this input, our onChange synthetic event 
        runs this arrow function, setting that event's target's (input) 
        value (what's typed into the input) to our updated state */}
        <input
          type="text"
          name="authName"
          // We set our value to title here mainly to help us clear out the inputs on submission
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
        />
      </p>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default AuthorForm;
