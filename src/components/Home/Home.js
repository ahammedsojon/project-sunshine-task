import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCourses } from "../../hooks/useCourses";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Course from "../Course/Course";
import "./Home.css";

const Home = (props) => {
  const [courses] = useCourses();
  return (
    <div className="home">
      <div className="banner">
        <div className="banner-inner">
          <h1 className="banner-title">
            <span>Education</span> & Training Organization.
          </h1>
          <p className="banner-description my-4">
            we proviet best education system for you amet mauris lobortis mauris
            inceptos eget. Urna imperdiet.
          </p>
          <Link to="/courses">
            <button className="btn btn-regular">Our Courses</button>
          </Link>
        </div>
      </div>
      <div className="featured-courses section">
        <h2 className="title text-center">Featured Courses</h2>
        <p className="description text-center">
          There are various kinds of services available: from online courses to
          summer courses and intensive courses
        </p>
        {courses.length === 0 ? (
          <div className="text-center">
            <Spinner animation="border" />
          </div>
        ) : (
          <Container>
            <Row xs={1} md={2} className="g-4">
              {courses.slice(0, 4).map((course) => (
                <Course
                  key={course.id}
                  course={course}
                  handleService={props.handleService}
                ></Course>
              ))}
            </Row>
          </Container>
        )}
      </div>
      <div className="text-center mt-5">
        <Link to="/courses">
          <button className="btn btn-regular">More courses</button>
        </Link>
      </div>
      <About></About>
      <Contact></Contact>
    </div>
  );
};

export default Home;
