import React from "react";
import "./Sidebar.scss";
import UserCard from "./UserCard";
import { Outlet, useParams } from "react-router-dom";
const Sidebar = ({ usersData }) => {
  const params = useParams();

  let usersArray = usersData?.map((user) => {
    return <UserCard key={user.id} user={user.name} to={user.id} />;
  });

  let outlet = !params.id ? (
    <p style={{ textAlign: "center" }} className="Main">
      Please select a user...
    </p>
  ) : (
    <Outlet />
  );

  return (
    <>
      <div className="Sidebar">
        <p className="page-title">Users</p>
        <ul>{usersArray}</ul>
      </div>
      <>{outlet}</>
    </>
  );
};

export default Sidebar;
