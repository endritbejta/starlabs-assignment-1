import React from "react";
import "./UserCard.scss";

const UserCard = ({ user, onClick, active }) => {
  return (
    <div onClick={onClick} className={`UserCard ${active ? "active" : ""}`}>
      {user}
    </div>
  );
};

export default UserCard;
