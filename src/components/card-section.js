import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FiPlusCircle } from "react-icons/fi";

const axios = require('axios');

export default class CardSection extends React.Component {

    constructor(props) {
        super(props);

    }

    grabPizza() {
        axios({
            method: 'get',
            url: 'https://myconve.live',
            responseType: 'json'
          }).then(function (response) {
                console.log(response.data.success);
            });
    }

    componentDidMount() {
        this.grabPizza();
    }

    render() {
        return(
            <div className="card-sec">
                <Container>
                    <Row className="justify-content-md-center">
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body className="align-center">
                                    <Card.Title>Pepperoni</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><FiPlusCircle /> Add to Cart</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body className="align-center">
                                    <Card.Title>Chicken</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><FiPlusCircle /> Add to Cart</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body className="align-center">
                                    <Card.Title>Beef</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><FiPlusCircle /> Add to Cart</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                  
            </div>
        )
    }
}