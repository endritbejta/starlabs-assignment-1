import React, { useEffect, useState } from "react";
import "./Main.scss";
import PostCard from "./PostCard";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router";

const Main = ({ id }) => {
  const [userPosts, setUserPosts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const posts = userPosts?.map((post) => (
    <PostCard key={post.id} title={post.title} description={post.body} />
  ));

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
