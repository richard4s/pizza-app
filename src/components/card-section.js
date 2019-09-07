import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FiPlusCircle } from "react-icons/fi";

const axios = require('axios');

export default class CardSection extends React.Component {

    // constructor(props) {
    //     super(props);

    // }

    state = {
        isLoading: true,
        pizza: [],
        error: null
      }

    grabPizza() {
        axios
        // // The API we're requesting data from
        // .get("http://127.0.0.1:8000/api/pizzas")
        // // Once we get a response, we'll map the API endpoints to our props
        // .then(response =>
        //   response.data.pizza.map(pizza => ({
        //     productName: `${user.name.first} ${user.name.last}`,
        //     username: `${user.login.username}`,
        //     email: `${user.email}`,
        //     image: `${user.picture.thumbnail}`
        //   }))
        // )
        // // Let's make sure to change the loading state to display the data
        // .then(users => {
        //   this.setState({
        //     pizza,
        //     isLoading: false
        //   });
        // })
        // // We can still use the `.catch()` method since axios is promise-based
        // .catch(error => this.setState({ error, isLoading: false }));
        .get("http://127.0.0.1:8000/api/pizzas")
        .then(response => {
            this.setState({
              pizza: response.data.pizza,
              isLoading: false
            });
          })
        .catch(error => this.setState({ error, isLoading: false }));
    }

    componentDidMount() {
        this.grabPizza();
    }

    render() {

        const { isLoading, pizza, error } = this.state;

        return(
            <div className="card-sec">
                <Container>
                    <Row className="justify-content-md-center">

                    {error ? <p>{error.message}</p> : null}

                    {!isLoading ? (
                        pizza.map(pizzas => {
                        const { productName, productPrice, productImage, productDescription } = pizzas;
                        return ( 
                            <Col style={{marginBottom: '40px'}}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={productImage} />
                                    <Card.Body className="align-center">
                                        <Card.Title> {productName} </Card.Title>
                                        <Card.Text> {productDescription} </Card.Text>
                                        <Card.Text> € {productPrice} </Card.Text>
                                        <Button variant="primary"><FiPlusCircle /> Add to Cart</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                        })
                    ) : (
                        <p>Loading Pizzas <span role="img" aria-label="pizza">🍕</span>...</p>
                    )}

                    </Row>
                </Container>                  
            </div>
        )
    }
}