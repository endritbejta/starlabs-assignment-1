import React from "react";
import "./TodoCard.scss";

const TodoCard = ({ title, check }) => {
  const status = check ? (
    <i className="fa-solid fa-check"></i>
  ) : (
    <i className="fa-solid fa-clock-rotate-left"></i>
  );
  return (
    <div className={`todo-card ${check ? "done" : "todo"}`}>
      <p>{title}</p>
      <p>{status}</p>
    </div>
  );
};

export default TodoCard;
