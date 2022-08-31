import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  // Destructure Keys that I want from Props
  const { titleText, link, linkText } = props;

  return (
    <header>
      <h1>{titleText}</h1>
      <Link to={link}>{linkText}</Link>
    </header>
  );
};

export default Header;
