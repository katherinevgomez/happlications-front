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

// const state to hold application to edit
const [targetApp, setTargetApp] = useState(nullApp);

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

// Function to add application from form data
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

//Functions to get and update applications
const getTargetApp = (app) => {
  setTargetApp(app)
  props.history.push("/edit")
}
const updateApp = async (app) => {
  const response = await fetch(url + app.id, {
    method: "put",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(app)
  })
  getApps()
}

//Function to delete application
const deleteApp =  async (app) => {
  const response = await fetch(url + app.id + "/", {
    method: "delete"
  })
  getApps()
}

//Dark mode function
const [darkMode, setDarkmode] = React.useState(false)

  React.useEffect(() => {
    if(darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    const json = JSON.stringify(darkMode);
    localStorage.setItem("site-dark-mode", json);
    const currentMode = JSON.parse(json);
  }, [darkMode]);

  /////////////////////
  // returned JSX
  /////////////////////
  return (
    <div>
      <div>
      <h1 class= "logo" style={h1}>Happlicati☺ns</h1>
      <button class="darkmode-btn" onClick={() => setDarkmode(!darkMode)}>Toggle Dark Mode 🌗 </button>
      </div>
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
          render={(rp) => 
            <SinglePost 
            posts={posts} 
            edit={getTargetApp}
            deleteApp={deleteApp}
            {...rp}/>}
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
          render={(rp) => <Form 
            initialApplication = {targetApp}
            handleSubmit = {updateApp}
            buttonLabel = "Update Happlication"
            {...rp} />}
        />
      </Switch>
    </div>
  );
}

export default App;

