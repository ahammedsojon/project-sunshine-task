import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { useCourses } from "../../hooks/useCourses";
import Course from "../Course/Course";
import "./Courses.css";
const Courses = (props) => {
  const [courses] = useCourses();
  return (
    <div className="courses section">
      <h2 className="my-3 title text-center">Our Courses</h2>
      {courses.length === 0 ? (
        <div className="text-center">
          {" "}
          <Spinner animation="border" />
        </div>
      ) : (
        <Container>
          <Row xs={1} md={3} className="g-4">
            {courses.map((course) => (
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
  );
};

export default Courses;
