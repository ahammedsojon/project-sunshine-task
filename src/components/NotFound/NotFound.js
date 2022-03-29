import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found">
            <img src="https://image.freepik.com/free-psd/3d-female-character-with-404-error-message_23-2148938897.jpg" alt="" />
            <h2 className="title">Page Not Found</h2>
            <Link to="/">
                <button className="btn btn-regular">Back to Home</button>
            </Link>
        </div>
    );
};

export default NotFound;