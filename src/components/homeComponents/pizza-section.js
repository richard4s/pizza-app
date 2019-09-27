import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class PizzaSection extends React.Component {
    render() {
        return(
            <div>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <h1 className="text-white call-to-action">HOT &amp; FRESH PIZZA</h1>
                            <p className="under-action">The Real Deal</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}