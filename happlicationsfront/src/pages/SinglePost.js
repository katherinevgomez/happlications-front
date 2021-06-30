import React from "react";
import { Link } from "react-router-dom";

// destructuring the props needed to get our post, including router prop match
const SinglePost = ({ posts, match }) => {
    const id = parseInt(match.params.id); //get the id from url param
    const post = posts.find((post) => post.id === id);
  
    ////////////////////
    // Styles
    ///////////////////
    const div = {
      textAlign: "center",
      border: "3px solid orange",
      width: "80%",
      margin: "30px auto",
    };


    return (
      <div style={div}>
        <h1>{post.role}</h1>
        <h2>Company: {post.company}</h2>
        <h2>Interview? {post.interview}</h2>
        <h2>Happlication Date: {post.date}</h2>
        
        <Link to="/">
          <button>Go Back</button>
        </Link>
      </div>
    );
  };

export default SinglePost;