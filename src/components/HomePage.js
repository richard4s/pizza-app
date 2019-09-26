import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './navbar';
import PizzaSection from './pizza-section';
import CardSection from './card-section';
import Footer from './footer';

// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Checkout from './checkout';

function HomePage() {
  return (
      <div>
        <div className="pizza-bg" >
          <Navbar />
          <PizzaSection />
        </div>

        <CardSection />
        <Footer />
    </div>
  );
}

export default HomePage;
