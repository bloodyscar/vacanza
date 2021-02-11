import React, { Component } from 'react'

import Header from 'parts/Header'
import Hero from 'parts/Hero'

import landingPage from 'json/landingPage.json'
import MostPicked from 'parts/MostPicked'
import Categories from 'parts/Categories'
import Testimony from 'parts/Testimony'
import Footer from 'parts/Footer'

export default class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.reftMostPicked = React.createRef()
        
    }
    componentDidMount() {
        window.title = "Staycation | Home";
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <>
                <Header {...this.props} />
                <Hero refMostPicked={this.reftMostPicked} data={landingPage.hero} />
                <MostPicked refMostPicked={this.reftMostPicked} data={landingPage.mostPicked} />
                <Categories data={landingPage.categories} />
                <Testimony data={landingPage.testimonial} />
                <Footer />
            </>
        )
    }
}
