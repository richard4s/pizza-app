import React from 'react';
import Ger from '../img/germany.png';
import Fra from '../img/france.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, Card, Button, Col, Row, Container } from 'react-bootstrap';

import { Route, Link } from 'react-router-dom';
// import { FiSearch } from "react-icons/fi";

export default class About extends React.Component {
    render() {
        return(
            <div className="card-sec">
            <Container className="spacer">
                <Row>
                    <Col md={12}>
                        <h2>ABOUT US</h2>
                    </Col>
                </Row>
                <Row className="">
                    <Col md={{ span: 5 }} className="to-center">
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Image src={Ger} width={200} />
                                <Card.Title className="thick-font"><br />Pizza Inc</Card.Title>
                                <Card.Text>
                                    Begin by searching for your dream pizza in your preferred location
                                </Card.Text>
                                <Button variant="primary">Get Started</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={{ span: 5, offset: 2 }} className="to-center">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            {/* Hell World */}
                        <Image src={Fra} width={200} />
                            <Card.Title  className="thick-font"><br />About Pizza APP</Card.Title>
                            <Card.Text>
                                Provide us with the pizza information so we can help guide to a refreshing meal.
                            </Card.Text>
                            <Button variant="primary">Get Started</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <Button variant="warning"><Link to="/">Go To Home</Link></Button>
                    </Col>
                </Row>
            </Container>
            </div>

            
        )
    }
}