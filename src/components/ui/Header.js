import React from "react";
import logo from "../../img/logo.png";

const Header = () => {
  return (
    <header className="center">
      <a href="/">
        <img src={logo} alt="" />
      </a>
    </header>
  );
};

export default Header;
