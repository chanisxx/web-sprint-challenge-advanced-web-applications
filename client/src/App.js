import React
// , { useState } 
from "react";
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute';
import BubblesPage from './components/BubblePage';
import Bubbles from './components/Bubbles';

import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <div>
      <NavBar />
      <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path='/bubbles-page' component={BubblesPage} />
        <PrivateRoute exact path='/bubbles' component ={Bubbles} />
      </div>
    </Router>
    </div>
  );
}

export default App;
