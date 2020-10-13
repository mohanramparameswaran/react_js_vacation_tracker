import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom'
import Login from './Login'
import Home from './Home'

function App() {
  return (
    <Router>
    

      <Route exact path = "/" component={Login} />
      
      <Route exact path = "/home" component={Home} />
     

     
    </Router>
  );
}

export default App;
