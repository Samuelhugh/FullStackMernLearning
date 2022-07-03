import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

const UpdateAuthor = () => {
  const { id } = useParams();
  const [authorName, setAuthorName] = useState("");
  const navigate = useNavigate();

  // GET Request retrieving One specified Author
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/authors/one/${id}`)
      .then((res) => {
        console.log("INSIDE USEEFFECT (GET-ONE) UPDATEAUTHOR: ", res);
        setAuthorName(res.data.authorName);
      })
      .catch((err) => {
        console.log("INSIDE USEEFFECT CATCH (GET-ONE) IN UPDATEAUTHOR: ", err);
      });
  }, []);

  const updateHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/authors/edit/${id}`, {
        authorName,
      })
      .then((res) => {
        console.log("INSIDE UPDATEHANDLER IN UPDATEAUTHOR: ", res);
        navigate("/home");
      })
      .catch((err) => {
        console.log("INSIDE UPDATEHANDLER ERROR IN UPDATEAUTHOR: ", err);
      });
  };

  return (
    <div>
      <h1>Update</h1>
      <form onSubmit={updateHandler}>
        <div>
          <label htmlFor="authNameOne">Author Name: </label>
          <br />
          <input
            type="text"
            name="authNameOne"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
          />
        </div>
        <p>
          <Link to={"/home"}>Cancel</Link>
        </p>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UpdateAuthor;
