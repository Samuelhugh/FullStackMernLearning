import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

// May need props
const OneAuthor = () => {
  const [specAuthor, setSpecAuthor] = useState({});
  const { id } = useParams();

  // RenderOne Func
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/authors/one/${id}`)
      .then((res) => {
        console.log("INSIDE USEEFFECT FOR ONEAUTHOR: ", res.data);
        setSpecAuthor(res.data);
      })
      .catch((err) =>
        console.log("INSIDE USEEFFECT ERROR FOR ONEAUTHOR: ", err)
      );
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>Author Name</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{specAuthor.authorName}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default OneAuthor;
