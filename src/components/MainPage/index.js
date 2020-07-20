import React, { Component } from 'react'

import Navbar from './Navbar/'
import LandingPage from './LandingPage'
import Section from './Section'
import Footer from './Footer'

class MainPage extends Component{
    render() {
        return (
            <div>
                <Navbar />
                <LandingPage />
                <Section />
                <Footer />
            </div>
        )
    }
}

export default MainPage