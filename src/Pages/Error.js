import React from "react";
import "./Error.scss";
import logo from "../assets/images/starlabs.png";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-page">
      <div className="content">
        <img src={logo} alt="starlabslogo" />
        <div>
          <p className="description">
            <strong>404.</strong> Uaaa... diçka shkoj keq.
          </p>
          <NavLink>Kthehu mbrapa tek faqja kryesore</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Error;
