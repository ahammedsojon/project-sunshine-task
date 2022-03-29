import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Enrolled from "./components/Enrolled/Enrolled";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";
import Courses from "./components/Courses/Courses";
import Login from "./components/Login/Login";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Regsiter from "./components/Register/Register";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/courses">
              <Courses></Courses>
            </PrivateRoute>
            <PrivateRoute exact path="/cart">
              <Cart></Cart>
            </PrivateRoute>
            <PrivateRoute exact path="/enrolled/:totalItems">
              <Enrolled></Enrolled>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Regsiter></Regsiter>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
