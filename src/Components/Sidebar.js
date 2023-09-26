import React from "react";
import "./Sidebar.scss";
import UserCard from "./UserCard";
import { Outlet, useParams } from "react-router-dom";
const Sidebar = ({ usersData }) => {
  const params = useParams();

  let usersArray = usersData?.map((user) => {
    return <UserCard key={user.id} user={user.name} to={user.id} />;
  });

  let outlet;
  if (!params.id) {
    // in case there is no id
    outlet = (
      <p style={{ textAlign: "center" }} className="Main">
        Please select a user...
      </p>
    );
  } else if (+params.id > 0 && +params.id <= usersData.length) {
    // when there is a valid id
    outlet = <Outlet />;
  } else {
    // when someone types an id that not on the list
    outlet = (
      <p style={{ textAlign: "center" }} className="Main">
        Please select a user on the left.
      </p>
    );
  }

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
