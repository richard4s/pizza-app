import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Card, Button, Modal, InputGroup, FormControl } from 'react-bootstrap';
import { FiPlusCircle } from "react-icons/fi";

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Checkout extends React.Component {

    
    state = {
        isLoading: true,
        pizza: [],
        error: null,
        // value: null
        remotePizza: null
      }

    //   componentDidMount() {
    //     console.log('Cart: ' + localStorage.getItem('pizzaID'));

    //     this.setState({
    //         remotePizza: localStorage.getItem('pizzaID');
    //     })

    //     this.grabPizza(remotePizza);
    // }

    render() {

        const { isLoading, pizza, error, remotePizza } = this.state;

        return(
            <div className="card-sec">
                <Container>
                    <Row className="justify-content-md-center">

                    <p>The Checkout Page</p>

                    </Row>
                </Container> 

                              
            </div>
        )
    }
}