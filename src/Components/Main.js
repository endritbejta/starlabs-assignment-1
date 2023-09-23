import React from "react";
import "./Main.scss";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router";

const Main = () => {
  console.log("running");

  return (
    <div className="Main">
      <nav className="navigation">
        <ul>
          <li>
            <NavLink to="" end>
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink to="todos">Todos</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Main;
