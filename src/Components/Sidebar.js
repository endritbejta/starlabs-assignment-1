import React from "react";
import "./Sidebar.scss";
import UserCard from "./UserCard";
const Sidebar = ({ users, setActiveUser, activeUser }) => {
  let usersArray = users?.map((user) => {
    return (
      <UserCard
        onClick={() => setActiveUser(+user.id)}
        key={user.id}
        user={user.name}
        active={user.id === activeUser}
      />
    );
  });
  return (
    <div className="Sidebar">
      <p className="page-title">Users</p>
      <ul>{usersArray}</ul>
    </div>
  );
};

export default Sidebar;
