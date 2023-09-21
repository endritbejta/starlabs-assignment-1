import React from "react";
import "./Header.scss";
import stalabslogo from "../assets/images/starlabs.png";

const Header = () => {
  return (
    <div className="Header">
      <img src={stalabslogo} alt="starlabslogo" />
      <p>Starlabs</p>
      {/* <p className="assignment">Assignment: Fetch users and posts</p> */}
    </div>
  );
};

export default Header;
