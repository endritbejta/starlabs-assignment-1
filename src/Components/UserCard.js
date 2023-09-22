import React from "react";
import "./UserCard.scss";
import { NavLink } from "react-router-dom";

const UserCard = ({ to, user }) => {
  return (
    <NavLink to={`${to}`} className="UserCard">
      <p>{user}</p>
      <i className="fa-solid fa-caret-down"></i>
    </NavLink>
  );
};

export default UserCard;
