// Import useState hook
import React, { useState } from "react";

//destructure out props, including router prop history
const Form = ({ initialApplication, handleSubmit, buttonLabel, history }) => {
  ////////////////
  // The Form Data State
  ////////////////
  // Initiallize the form with the initialApplication state
  const [formData, setFormData] = useState(initialApplication);

  //////////////////////////
  // Functions
  //////////////////////////

  // Standard React Form HandleChange Function
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Function to run when form is submitted
  const handleSubmisson = (event) => {
    //prevent form refresh
    event.preventDefault();
    //pass formData to handleSubmit prop function
    handleSubmit(formData);
    //push user back to main page
    history.push("/");
  };

  // Our Form, an input for the subject and details fields and a submit button
  return (
    <form onSubmit={handleSubmisson}>
      <br/>
      <h2>Role</h2>
      <input
        className = "input"       
        type="text"
        onChange={handleChange}
        value={formData.role}
        name="role"
      />
      <h2>Company</h2>
      <input
        className = "input"
        type="text"
        onChange={handleChange}
        value={formData.company}
        name="company"
      />
      <h2>Interview?</h2>
      <input
        className = "input"
        type="text"
        onChange={handleChange}
        value={formData.interview}
        name="interview"
      />
      <h2>Happlication Date</h2>
      <input
        className = "input"
        type="text"
        onChange={handleChange}
        value={formData.date}
        name="date"
      />
      <br/>
      <input class="button" type="submit" value={buttonLabel} />
    </form>
  );
};

export default Form;