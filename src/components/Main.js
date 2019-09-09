import React from 'react';

import { Route } from 'react-router-dom';
import HomePage from './HomePage';

import About from './about';
import Checkout from './checkout';

export default class Main extends React.Component {
    render() {
        return(
            <>
                <Route exact path="/" component={HomePage} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/about" component={About} />
            </>
        )
    }
}