import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const AllAuthors = (props) => {
  const { removeFromDom, authors, setAuthors } = props;
  const navigate = useNavigate();

  const deleteFunc = (authorId) => {
    axios
      .delete(`http://localhost:8000/api/authors/delete/${authorId}`)
      .then((res) => {
        console.log("INSIDE THE DELETEHANDLER FOR ALLAUTHORS ");
        removeFromDom(authorId);
        navigate("/home");
      })
      .catch((err) => {
        console.log("INSIDE THE ERROR IN DELETEHANDLER FOR ALLAUTHORS ", err);
      });
  };

  // RenderAllAuthors Func
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors/all")
      .then((res) => {
        console.log("INSIDE USEEFFECT HOOK FOR ALLAUTHORS: ", res.data);
        setAuthors(res.data);
      })
      .catch((err) =>
        console.log("INSIDE THE ERROR IN USEEFFECT FOR ALLAUTHORS: ", err)
      );
  }, []);

  return (
    <div>
      {authors.map((author, index) => {
        return (
          <table key={index}>
            <thead>
              <tr>
                <th>Author Name</th>
                <th>Actions Available</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{author.authorName}</td>
                <td>{author._id}</td>
                <td>
                  <p>
                    <Link to={`/home/authors/edit/${author._id}`}>Edit</Link>
                  </p>
                  |
                  <p>
                    <button
                      onClick={(e) => {
                        deleteFunc(author._id);
                      }}
                    >
                      Delete
                    </button>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
};

export default AllAuthors;
