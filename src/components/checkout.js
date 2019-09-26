import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const axios = require('axios');

export default class PizzaSection extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: true,
            pizza: [],
            error: null,
            // value: null
          }
        
    }    

    componentDidMount() {
        this.grabPizza();
        console.log('PizzaID: ' + localStorage.getItem('pizzaID'));

        // let pizzaID = localStorage.getItem('pizzaID');

        // pizzaID.forEach(element => {
        //     console.log('Element: ' + element);
        // });
    }

    orderPizza() {
        alert('Your pizza has been ordered');
    }

    grabPizza() {
        axios
        .get(`https://pizza-laravel-api.herokuapp.com/api/pizzas/${localStorage.getItem("pizzaID")}`)
        .then(response => {
            this.setState({
              pizza: response.data.pizza,
              isLoading: false
            });
          })
        .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {

        const { isLoading, pizza, error } = this.state;

        return(
            <div className="card-sec">
                <h1>Checkout</h1><br /><br />
                <Container>
                    <Row className="justify-content-md-center">

                    {error ? <p>{error.message}</p> : null}

                    {!isLoading ? 
                    (
                        // pizza.map(pizzas => {
                        // const { id, productName, productPrice, productImage, productDescription } = pizzas;
                        // return ( 
                            <Col style={{marginBottom: '40px'}}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={pizza.productImage} />
                                    <Card.Body className="align-center">
                                        <Card.Title> {pizza.productName} </Card.Title>
                                        <Card.Text> {pizza.productDescription} </Card.Text>
                                        <Card.Text> € {pizza.productPrice} </Card.Text>
                                        {/* <App img={productImage} pizzaID={id} /> */}
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                        
                        // )
                    // ) 
                    : (
                        <p>Loading Pizzas <span role="img" aria-label="pizza">🍕</span>...</p>
                    )}

                    
                    <Col>
                        <h2>Billing Information</h2>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col}>
                                <Form.Control type="text" placeholder="Enter First Name" />
                                </Form.Group>

                                <Form.Group as={Col}>
                                <Form.Control type="text" placeholder="Enter Last Name" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="formGridEmail">
                                <Form.Control type="email" placeholder="Enter Email" />
                            </Form.Group>

                            

                            <Button variant="primary" type="submit" onClick={this.orderPizza}>
                                Order Pizza
                            </Button>
                        </Form>
                    </Col>

                    </Row>
                </Container> 

                              
            </div>
        )
    }
}