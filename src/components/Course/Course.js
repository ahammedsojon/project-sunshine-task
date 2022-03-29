import React from "react";
import { Card, Col } from "react-bootstrap";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Course.css";

const Course = (props) => {
  const { title, img, description, rating, instructor, price } = props.course;
  const { handleCourse } = useAuth();
  return (
    <Col>
      <Card className="h-100 rounded course">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="fw-bold">{title}</Card.Title>
          <p>{instructor}</p>
          <Card.Text className="text-muted">{description}</Card.Text>
        </Card.Body>
        <div className="px-3 pb-3 d-flex justify-content-between">
          <Rating
            initialRating={rating}
            emptySymbol="far fa-star text-warning"
            fullSymbol="fas fa-star text-warning"
            placeholderSymbol="fas fa-star-half-alt text-warning"
            readonly
          />
          <h3 className="price fw-bold">{price}$</h3>
        </div>
        <div className="ps-3 pb-3">
          <Link to={`/cart`}>
            <button
              onClick={() => handleCourse(props.course)}
              className="btn btn-cart"
            >
              Add To Cart
            </button>
          </Link>
        </div>
      </Card>
    </Col>
  );
};

export default Course;
