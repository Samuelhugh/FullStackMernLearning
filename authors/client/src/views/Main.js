import React, { useState } from "react";
import AuthorForm from "../components/AuthorForm";
import AllAuthors from "../components/AllAuthors";

const Main = () => {
  const [authors, setAuthors] = useState([]);

  const removeFromDom = (authorId) => {
    setAuthors(authors.filter((author) => author._id !== authorId));
  };

  return (
    <div>
      <AuthorForm authors={authors} setAuthors={setAuthors} />
      <hr />
      <AllAuthors
        authors={authors}
        setAuthors={setAuthors}
        removeFromDom={removeFromDom}
      />
    </div>
  );
};

export default Main;
