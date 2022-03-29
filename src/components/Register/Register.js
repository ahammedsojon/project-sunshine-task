import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Register.css";
import useAuth from "../../hooks/useAuth";

const Regsiter = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const location = useLocation();
  const history = useHistory();
  const { registerUser } = useAuth();
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
    const { name, email, password } = user;
    registerUser(name, email, password, location, history);
    setUser({ name: "", email: "", password: "" });
    console.log("form submitted");
  };
  return (
    <div className="register">
      <div className="register-inner section shadow-lg">
        <h2 className="title text-center mb-3">Sign up</h2>
        <form onSubmit={handleSubmitForm}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              name="name"
              value={user.name}
              onChange={handleOnChange}
            />
          </Form.Group>
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
            Already have an account?
            <Link to="/login" className="text-decoration-none ms-2">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Regsiter;
