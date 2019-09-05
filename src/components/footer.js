import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class Footer extends React.Component {
    render() {
        return(
            <div className="dark-footer">
                <Container>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <br />
                            <p className="under-action">Copyright &copy;. All Rights Reserved.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}