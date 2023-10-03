import React from "react";
import "./Posts.scss";
import { useLoaderData, useParams } from "react-router";
import PostCard from "../Components/PostCard";

const Posts = () => {
  const data = useLoaderData();
  const params = useParams();

  const selectedUserPosts = data.filter((post) => post.userId === +params.id);

  const posts = selectedUserPosts.map((post) => (
    <PostCard title={post.title} key={post.id} description={post.body} />
  ));

  return <div className="posts-page">{posts}</div>;
};

export default Posts;
