import './App.css';
// Import All Our Components
import AllPosts from "./pages/AllPosts";
import SinglePost from "./pages/SinglePost";
import Form from "./pages/Form";

// Import React and hooks
import React, { useState, useEffect } from "react";

// Import components from React Router
import { Route, Switch, Link } from "react-router-dom";

function App(props) {
  
////////////////////
  // Style Objects
  ////////////////////

  const h1 = {
    textAlign: "center",
    margin: "10px",
  };

  const button = {
    backgroundColor: "orange",
    display: "block",
    margin: "auto",
  };
  ///////////////
  // State & Other Variables
  ///////////////

  // Our Api Url
  const url = "https://happlications-kg.herokuapp.com/happlications/";

  // State to Hold The List of Posts
  const [posts, setPosts] = useState([]);

  // an object that represents a null todo
const nullApp = {
  role: "",
  company: "",
  interview: "",
  date: "",
  
};
  //////////////
  // Functions
  //////////////
// Function to get list of Applications from API
const getApps = async () => {
  const response = await fetch(url);
  const data = await response.json();
  setPosts(data);
};
  //////////////
  // useEffects
  //////////////
// useEffect to get list of applications when page loads
useEffect(() => {
  getApps();
}, []);

// Function to add todo from form data
const addApps = async (newApp) => {
  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newApp),
  });

  // get updated list of applications
  getApps();
};
  /////////////////////
  // returned JSX
  /////////////////////
  return (
    <div>
      <h1 class= "logo" style={h1}>Happlicati☺ns</h1>
      <br/>
      <Link to="/new"><button style={button}>Log New Happlication</button></Link>
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => <AllPosts {...routerProps} posts={posts} />}
        />
        <Route
          path="/post/:id"
          render={(routerProps) => (
            <SinglePost {...routerProps} posts={posts} />
          )}
        />
        <Route
          path="/new"
            render={(routerProps) => (
            <Form
              {...routerProps}
              initialApplication={nullApp}
              handleSubmit={addApps}
              buttonLabel="Log Happlication"
            />
          )}
        />
        <Route
          path="/edit"
          render={(routerProps) => <Form {...routerProps} />}
        />
      </Switch>
    </div>
  );
}

export default App;

