import React from "react";
import { Link } from "react-router-dom";

//destructure the post from props
const Post = ({ post }) => {
    //////////////////
    // Style Objects
    //////////////////
    const div = {
      textAlign: "center",
      border: "3px solid orange",
      margin: "30px auto",
      width: "80%",
      boxShadow: "7px 7px 15px grey",
    };
    return (
      <div style={div}>
        <Link to={`/post/${post.id}`}>
          <h1>Role: {post.role}</h1>
        </Link>
        <h2>Company: {post.company}</h2>
        <h2>Interview? {post.interview}</h2>
        <h2>Happlication Date: {post.date}</h2>
        
      </div>
    );
  };

export default Post;