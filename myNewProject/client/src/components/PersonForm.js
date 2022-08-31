import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MainForm from "../components/MainForm";

// Props can be omitted
const PersonForm = () => {
  // const [message, setMessage] = useState("Loading...");
  // Navigate to homepage
  const navigate = useNavigate();

  // On first render only
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/api")
  //     .then((res) => setMessage(res.data.message))
  //     .catch((err) => console.log(`ERROR IN PersonForm ${err}`));
  // }, []);

  // Handle when the Form is submitted
  const submitHandler = (person, setErrors) => {
    // Make API POST request to create new person
    axios
      .post("http://localhost:8000/api/people", person)
      .then((res) => {
        // Always console log to get used to Tracking my Data!
        console.log(res);
        console.log(res.data);
        navigate("/");
        // we will update the lifted state of our people array
        // to include the current value in state plus the single
        // new object created and returned from our post request.
        // setPeople([...people, res.data]); //this is new
      })
      .catch((err) => {
        console.log(`ERROR IN submitHandler ${err}`);
        console.log(err);
        setErrors(err.response.data.errors);
        navigate("/peopleform");
      });
  };

  return (
    // Using JSX
    <div>
      {/* <h2>Message from the Backend: {message}</h2> */}
      <h1>Create Person</h1>
      <MainForm submitHandler={submitHandler} buttonText="Add Person" />
    </div>
  );
};

export default PersonForm;
