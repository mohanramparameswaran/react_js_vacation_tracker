import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import validator from "reactjs-input-validator";
import { Button } from "react-bootstrap";

import "./Login.css";

export default function Login() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState({});
  const [passwordErr, setPasswordErr] = useState({});

  

  function handleSubmit(event) {
    event.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      
      //send data to backend
      // console.log(email);
      // console.log(password);
      history.push({
          pathname: "/home",
          data : email
      });
  

      // setEmail("");
      // setPassword("");
      
     

      
    }
  }

  function formValidation() {
    const emailErr = {};
    const passwordErr = {};
    let isValid = true;
    let re = /[a-z0-9._%+-]+@[accenture]+\.[com]{2,15}/g;

    if (email == "") {
      emailErr.emailNotEntered = "*Enter the Employee ID";
      isValid = false;
    }

    if (email != "" && !re.test(email)) {
      emailErr.emailNotValid = "*Check the format of  Employee Id";
      isValid = false;
    }

    if (password == "") {
      passwordErr.passNotEntered = "*Enter the password";
      isValid = false;
    }

    setEmailErr(emailErr);
    setPasswordErr(passwordErr);
    return isValid;
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit} className="form">
        <h1>Vacation Tracker</h1>
        <div className="input-wrapper">
          <label className="input-wrapper-label">
            Employee ID
            <input
              required
              className="input-wrapper-input "
              type="email"
              name="Employee_id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
          </label>
          {Object.keys(emailErr).map((key) => {
            return <div style={{ color: "red" }}>{emailErr[key]}</div>;
          })}
        </div>
        <div className="input-wrapper">
          <label className="input-wrapper-label">
            Password
            <input
              className="input-wrapper-input1"
              required
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          {Object.keys(passwordErr).map((key) => {
            return <div style={{ color: "red" }}>{passwordErr[key]}</div>;
          })}
        </div>
        <Button block bsSize="large" dtype="submit" onClick={handleSubmit}>
          Login
        </Button>
      </form>
    </div>
    
  );
}
