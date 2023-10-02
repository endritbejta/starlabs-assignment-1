import React from "react";
import "./PostCards.scss";

const PostCard = ({ title, description }) => {
  return (
    <div className="PostCard">
      <p className="title">{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default PostCard;
