import React, { useEffect, useState } from "react";
import "./Main.scss";
import PostCard from "./PostCard";
import axios from "axios";

const userPostsUrl = "https://jsonplaceholder.typicode.com/posts";

const Main = ({ id }) => {
  const [userPosts, setUserPosts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(userPostsUrl);
        const allPosts = response.data;
        const userPosts = allPosts.filter((post) => post.userId === id);
        setUserPosts(userPosts);
        setIsLoading(false);
      } catch (err) {
        console.log("error: ", err);
      }
    };
    fetchPosts();
  }, [id]);

  const posts = userPosts?.map((post) => (
    <PostCard key={post.id} title={post.title} description={post.body} />
  ));

  return (
    <div className="Main">
      <p className="page-title">Posts</p>
      <ul>
        {isLoading ? <p style={{ textAlign: "center" }}>Loading...</p> : posts}
      </ul>
    </div>
  );
};

export default Main;
