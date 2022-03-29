import React from "react";
import { Container, Nav, Navbar, Spinner } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import userPic from "../../images/user.png";
import useAuth from "../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, loading, logoutUser } = useAuth();
  console.log(user, loading);
  const activeStyle = {
    fontWeight: "bold",
    color: "#ff697c",
  };
  return (
    <Navbar collapseOnSelect expand="md" bg="light" variant="dark" sticky="top">
      <Container className="header">
        <NavLink to="/">
          <Navbar.Brand className="logo">
            <img src={logo} alt="" />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink activeStyle={activeStyle} className="nav-item" to="/home">
              Home
            </NavLink>
            <NavLink
              activeStyle={activeStyle}
              className="nav-item"
              to="/courses"
            >
              Courses
            </NavLink>
            <NavLink activeStyle={activeStyle} className="nav-item" to="/cart">
              Cart
            </NavLink>
            <NavLink
              activeStyle={activeStyle}
              className="nav-item"
              to="/contact"
            >
              Contact
            </NavLink>
            {user?.email ? (
              <>
                <div className="profile">
                  <span>
                    <img src={userPic} alt="" />
                  </span>
                  <span>{user?.displayName}</span>
                  <button onClick={logoutUser} className="btn btn-danger">
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <NavLink
                  activeStyle={activeStyle}
                  className="nav-item"
                  to="/login"
                >
                  Login
                </NavLink>
                <NavLink
                  activeStyle={activeStyle}
                  className="nav-item"
                  to="/register"
                >
                  Sign up
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // <Navbar collapseOnSelect expand="lg" bg="light" variant="dark" sticky="top">
    //   <Container className="header">
    //     <NavLink to="/">
    //       <Navbar.Brand className="logo">
    //         <img src={logo} alt="" />
    //       </Navbar.Brand>
    //     </NavLink>
    //     <Nav className="ms-auto">
    //       <NavLink activeStyle={activeStyle} className="nav-item" to="/home">
    //         Home
    //       </NavLink>
    //       <NavLink activeStyle={activeStyle} className="nav-item" to="/courses">
    //         Courses
    //       </NavLink>
    //       <NavLink activeStyle={activeStyle} className="nav-item" to="/cart">
    //         Cart
    //       </NavLink>
    //       <NavLink activeStyle={activeStyle} className="nav-item" to="/contact">
    //         Contact
    //       </NavLink>
    //       {user?.email ? (
    //         <>
    //           <div className="profile">
    //             <span>
    //               <img src={userPic} alt="" />
    //             </span>
    //             <span>{user?.displayName}</span>
    //             <button onClick={logoutUser} className="btn btn-danger">
    //               Logout
    //             </button>
    //           </div>
    //         </>
    //       ) : (
    //         <>
    //           <NavLink
    //             activeStyle={activeStyle}
    //             className="nav-item"
    //             to="/login"
    //           >
    //             Login
    //           </NavLink>
    //           <NavLink
    //             activeStyle={activeStyle}
    //             className="nav-item"
    //             to="/register"
    //           >
    //             Sign up
    //           </NavLink>
    //         </>
    //       )}
    //     </Nav>
    //   </Container>
    // </Navbar>
  );
};

export default Header;
