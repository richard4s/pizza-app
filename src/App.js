import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar';
import PizzaSection from './components/pizza-section';
import CardSection from './components/card-section';
import Footer from './components/footer';

function App() {
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

export default App;
