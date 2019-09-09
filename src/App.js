import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar';
import PizzaSection from './components/pizza-section';
import CardSection from './components/card-section';
import Footer from './components/footer';

// import { BrowserRouter as Router, Route } from "react-router-dom";
import { Router } from 'react-router-dom';

import Main from './components/Main';

function App() {
  return (
    // <Router>
      <div>
        {/* <MyNavbar /> */}
        {/* <SearchSection /> */}
        {/* <CardSection />
        <PropertyPrices /> */}
        <Main />
      </div>
    // </Router>
    
    
  );
}

export default App;
