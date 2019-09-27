import React from 'react';
import { Container, Row, Col, Card, Button, Modal, InputGroup, FormControl } from 'react-bootstrap';
import { FiPlusCircle } from "react-icons/fi";

// import { BrowserRouter as Route, Link, Switch } from "react-router-dom";
// import Checkout from '../checkout';

import { withRouter, Link } from 'react-router-dom';

const axios = require('axios');
const uuid = require("uuid");

class CardSection extends React.Component {

    constructor(props) {
        super(props);

        // this.addPizza = this.routeChange.bind(this);

        this.state = {
            isLoading: true,
            pizza: [],
            error: null,
            // value: null
          }
    }
    
    grabPizza() {
        axios
        .get("https://pizza-laravel-api.herokuapp.com/api/pizzas")
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
        console.log('Cart: ' + localStorage.getItem('cart'));
    }

    goToCheckout = () => {
        // this.props.history.push('/checkout');
        this.props.router.push('checkout')
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
                        const { id, productName, productPrice, productImage, productDescription } = pizzas;
                        return ( 
                            <Col style={{marginBottom: '40px'}}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={productImage} />
                                    <Card.Body className="align-center">
                                        <Card.Title> {productName} </Card.Title>
                                        <Card.Text> {productDescription} </Card.Text>
                                        <Card.Text> € {productPrice} </Card.Text>
                                        <App img={productImage} pizzaID={id} />
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


function addPizza(pizzaID) {
    var value = uuid.v4();

    localStorage.setItem('session', JSON.stringify(value));
    localStorage.setItem('pizzaID', JSON.stringify(pizzaID));

    localStorage.setItem('cart', (parseInt(localStorage.getItem('cart')) + 1));

    // let mover = new CardSection();
    // mover.goToCheckout();
 

    // let path = `checkout`;
    // this.props.history.push(path);

    // return this.setRedirect("/checkout");

    // return (
    //     <Router>
    //         <div>
    //             <nav>
    //             <ul>
    //                 <li>
    //                 <Link to="/">Home</Link>
    //                 </li>
    //                 <li>
    //                 <Link to="/about/">About</Link>
    //                 </li>
    //                 <li>
    //                 <Link to="/users/">Users</Link>
    //                 </li>
    //             </ul>
    //             </nav>
    //             <Route path="/checkout/" component={Checkout} />
    //         </div>
    //     </Router>
    //     )

    // axios
    // .post("http://127.0.0.1:8000/api/addCart", {
    //     id: pizzaID,
    //     token: value
    //   })
    // .then(function (response) {
    //     localStorage.setItem('session', JSON.stringify(value));
    //     console.log(response.data.success);
    // })
    // .catch(function (error) {
    // console.log(error);
    // });
}

function App(props) {
    const [show, setShow] = React.useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setShow(true)}><FiPlusCircle /> Add to Cart</Button>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    Buy Pizza
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col>
                                1
                            </Col>

                            <Col>
                                <img alt="pizza" width="65" src={props.img} />
                            </Col>

                            <Col>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>+</InputGroup.Text>
                                    </InputGroup.Prepend>
                                        <FormControl aria-label="Quantity of pizza" placeholder="1" />
                                    <InputGroup.Append>
                                        <InputGroup.Text>-</InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Col>
                            
                        </Row>

                        

                        <Row className="justify-content-md-center">
                            <Col>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="Firstname"
                                        aria-label="firstname"
                                        aria-describedby="basic-addon1"
                                    />&nbsp;&nbsp;
                                    <FormControl
                                        placeholder="Lastname"
                                        aria-label="lastname"
                                        aria-describedby="basic-addon1"
                                    />&nbsp;&nbsp;
                                    <FormControl
                                        placeholder="Email"
                                        aria-label="em"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>

                        <Row className="justify-content-md-center">
                            <Col className="mx-auto" style={{ textAlign: 'center' }}>
                                {/* <Link to={{ pathname: '/schedule/7' }}>Player #7</Link> */}
                                {/* <Switch>
                                    <Route path='/checkout' component={Checkout}/>
                                </Switch> */}
                            </Col>
                            <Col className="mx-auto" style={{ textAlign: 'right' }}>

                                <Link to="/checkout">
                                    <Button variant="success" onClick={() => addPizza(props.pizzaID)}><FiPlusCircle /> Add to Cart</Button>
                                </Link>
                                
                            </Col>
                        </Row>
                    </Container>
                    
                    
                </Modal.Body>
            </Modal>
        </>
    );
}

export default withRouter(CardSection);