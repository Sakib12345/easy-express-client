import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddProduct from "./components/AddProduct/AddProduct";
import Checkout from "./components/Checkout/Checkout";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import ManageProduct from "./components/ManageProduct/ManageProduct";
import Navbar from "./components/Navbar/Navbar";
import Order from "./components/Orders/Order";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/checkout/:id">
          <Checkout></Checkout>
        </PrivateRoute>
        <PrivateRoute path="/orders">
          <Order></Order>
        </PrivateRoute>
        <PrivateRoute path="/addProduct">
          <AddProduct></AddProduct>
        </PrivateRoute>
        <PrivateRoute path="/manageProduct">
          <ManageProduct></ManageProduct>
        </PrivateRoute>
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
