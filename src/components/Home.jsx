import React from "react";
import PostList from "./PostList"
import { Link } from "react-router-dom";

function Home(){
  return (
    <div>
      <h1>Home Component</h1>
      <PostList />
    </div>
  );
}

export default Home;
