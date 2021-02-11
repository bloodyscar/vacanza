import React from 'react'
import "assets/scss/style.scss"
import Header from "parts/Header"
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from 'pages/LandingPage';
import Example from 'pages/Example';
import DetailsPage from 'pages/DetailsPage';
import Checkout from 'pages/Checkout';

function App(props) {
  return (
    <BrowserRouter>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/properties/:id" component={DetailsPage} />
    <Route exact path="/checkout" component={Checkout} />
    </BrowserRouter>

    
  );
}

export default App;
