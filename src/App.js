import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path="/about">
          
        </Route>
        <Route path="/users">
          
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          
        </Route>
      </Switch>
  </Router>
  );
}

export default App;
