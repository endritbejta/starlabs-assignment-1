import React, { useState } from "react";
import "./Todo.scss";
import { useLoaderData, useParams } from "react-router";
import TodoCard from "../Components/TodoCard";

const Todo = () => {
  const data = useLoaderData();
  const params = useParams();
  const [filter, setFilter] = useState("");

  const selectedUserData = data.filter((todo) => todo.userId === +params.id);

  let filteredData;

  if (filter === "completed") {
    filteredData = selectedUserData.filter((todo) => todo.completed === true);
  } else if (filter === "ongoing") {
    filteredData = selectedUserData.filter((todo) => todo.completed === false);
  } else {
    filteredData = selectedUserData;
  }

  const todos = filteredData.map((todo) => (
    <TodoCard title={todo.title} key={todo.id} check={todo.completed} />
  ));

  const handleFIlter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="todos-page">
      <select id="selectCompleted" className="select" onChange={handleFIlter}>
        <option value="">All</option>
        <option value="completed">Completed</option>
        <option value="ongoing">Ongoing</option>
      </select>
      <ul>{todos}</ul>
    </div>
  );
};

export default Todo;
