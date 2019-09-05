import React from 'react';
// import pizzaLogo from '../img/pizza-logo.png'
import { Navbar, Nav, Badge, NavDropdown } from 'react-bootstrap';
import { FiShoppingCart } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";

const CartIcon = (props) => {
    return(
        <div>
            <FiShoppingCart className="thick-white" />&nbsp; 
                <Badge pill variant="info">
                    {props.nos}
                </Badge>  
        </div>
    )
    
}

export default class MainNavbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cart: 0
        }
    }    

    render() {
        return(
            <Navbar className="trans-bg" collapseOnSelect expand="lg" bg="transparent" variant="dark">
                <Navbar.Brand className="brand-name" href="#home">{'Pizza App'}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        
                    </Nav>

                    <Nav>
                        <Nav.Link href="#features" className="thick-white"><FiSearch /></Nav.Link>
                        <Nav.Link href="#features" className="thick-white">About</Nav.Link>
                        <Nav.Link href="#pricing" className="thick-white">
                            
                        </Nav.Link>

                        <NavDropdown title={<CartIcon nos={this.state.cart} />} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Your Cart is Empty</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="#deets" className="thick-white">Login</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes" className="thick-white">Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}