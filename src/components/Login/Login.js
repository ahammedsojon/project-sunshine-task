import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import icon from "../../images/google.png";
import "./Login.css";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const location = useLocation();
  const history = useHistory();
  const { loginUser, googleSignIn } = useAuth();
  const handleOnChange = (e) => {
    const newUser = { ...user };
    console.log(newUser, "hello");
    const value = e.target.value;
    const field = e.target.name;
    newUser[field] = value;
    setUser(newUser);
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const { email, password } = user;
    loginUser(email, password, location, history);
    setUser({ email: "", password: "" });
    console.log("form submitted");
  };
  return (
    <div className="login">
      <div className="login-inner section shadow-lg">
        <h2 className="title text-center mb-3">Log in</h2>
        <form onSubmit={handleSubmitForm}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={user.email}
              onChange={handleOnChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={user.password}
              onChange={handleOnChange}
            />
          </Form.Group>
          <button type="submit" className="btn btn-regular">
            Submit
          </button>
          <p className="mt-2 text-center">
            New user?
            <Link to="/register" className="text-decoration-none ms-2">
              Sign up
            </Link>
          </p>
        </form>
      </div>
      <p className="my-4">----------------or----------------</p>
      <button
        onClick={googleSignIn}
        className="google-login btn btn-outline-danger"
      >
        <img src={icon} alt="" />
        <span>sign in with google</span>
      </button>
    </div>
  );
};

export default Login;
