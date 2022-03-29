import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  return (
    <Container className="my-5">
      <div className="section pt-3">
        <h2 className="title text-center">Contact Us</h2>
      </div>
      <div className="contact">
        <div className="contact-left p-5">
          <h2 className="title fw-bold mb-5">Send us message</h2>
          <input
            type="text"
            className="form-control my-3"
            placeholder="Your Name"
          />
          <input
            type="email"
            className="form-control my-3"
            placeholder="Your Email"
          />
          <textarea
            name=""
            id=""
            rows="4"
            placeholder="Write Message"
            className="form-control my-3"
          ></textarea>
          <Link to="/">
            <button className="btn btn-regular">Submit</button>
          </Link>
        </div>
        <div className="contact-right p-5">
          <h2 className="title">Get in Touch</h2>
          <div>
            <div className="contact-item">
              <div className="item-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="item-details">
                <p>IT Park Jashore</p>
                <p>Jashore Khulna Bangladesh</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="item-icon">
                <i className="fas fa-phone-square-alt"></i>
              </div>
              <div className="item-details">
                <p>+(880) 1956 437242</p>
                <p>+(880) 1731 379718</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="item-icon">
                <i className="fas fa-envelope-open-text"></i>
              </div>
              <div className="item-details">
                <p>sajonahmed477@gmail.com</p>
                <p>ahammedsojon000@themeix.com </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
