import React from "react";
import { Link } from "react-router-dom";

// destructuring the props needed to get our post, including router prop match
const SinglePost = ({ posts, match, edit, deleteApp, history }) => {
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
      <div class= "single-post-div" style={div}>
        <h1>{post.role}</h1>
        <h2>Company: {post.company}</h2>
        <h2>Interview? {post.interview}</h2>
        <h2>Happlication Date: {post.date}</h2>
        
        <button onClick={(event) => {
          edit(post)
          }}>Edit</button>

        <button class = "delete-btn" onClick={(event) => {
          deleteApp(post)
          history.push("/")
          }}>Delete</button>

        <Link to="/">
          <button>Go Back</button>
        </Link>
      </div>
    );
  };

export default SinglePost;