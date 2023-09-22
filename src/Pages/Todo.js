import React from "react";
import "./Todo.scss";
import { useLoaderData, useParams } from "react-router";
import TodoCard from "../Components/TodoCard";

const Todo = () => {
  const data = useLoaderData();
  const params = useParams();
  const selectedUserData = data.filter((todo) => todo.userId === +params.id);
  const todos = selectedUserData.map((todo) => (
    <TodoCard title={todo.title} key={todo.id} check={todo.completed} />
  ));
  return (
    <div className="todos-page">
      <ul>{todos}</ul>
    </div>
  );
};

export default Todo;
