import React from "react";
import "./Layout.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Todo from "../Pages/Todo";
import Posts from "../Pages/Posts";
import axios from "axios";
import Main from "../Components/Main";

const usersApiUrl = "https://jsonplaceholder.typicode.com/users";
const todosApiUrl = "https://jsonplaceholder.typicode.com/todos";
const postsApiUrl = "https://jsonplaceholder.typicode.com/posts";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    loader: async () => {
      const response = await axios.get(usersApiUrl);
      return response.data;
    },
    children: [
      {
        path: ":id",
        element: <Main />,

        children: [
          {
            path: "todos",
            element: <Todo />,
            loader: async () => {
              const response = await axios.get(todosApiUrl);
              return response.data;
            },
          },
          {
            path: "",
            element: <Posts />,
            loader: async () => {
              const response = await axios.get(postsApiUrl);
              return response.data;
            },
          },
        ],
      },
    ],
  },
]);

const Layout = () => {
  return <RouterProvider router={router} />;
};

export default Layout;
