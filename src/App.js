import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/checkout">
          <Checkout></Checkout>
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
