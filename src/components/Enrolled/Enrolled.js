import { React } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import img from '../../images/giphy.gif';
import NotFound from '../NotFound/NotFound';
import './Enrolled.css';

const Enrolled = () => {
    const { totalItems } = useParams();
    return (
        <>
            {
                totalItems < 10 ?
                    <div className="enrolled container">
                        <Row xs={1} md={2} className="enrolled-row">
                            <Col className="enrolled-content">
                                <h2 className="text-success pe-3">Congratulations! You have successfully enrolled {totalItems} courses.</h2>
                                <Link to="/">
                                    <button className="btn btn-regular mt-3">Back to home</button>
                                </Link>
                            </Col>
                            <Col className="enrolled-img">
                                <img src={img} alt="" />
                            </Col>
                        </Row>
                    </div> : <NotFound></NotFound>

            }
        </>
    );
};

export default Enrolled;