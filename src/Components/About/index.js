import React from 'react'
import Footer from '../Reusable Components/Footer'
import NavBar from '../Reusable Components/Navbar'
import ScrollToTop from '../Reusable Components/ScrollToTop'
import AboutLMJ from './AboutLMJ'

const AboutPage = () => {
    return (
        <div className="aboutPage">
            <NavBar />
            <AboutLMJ />
            <Footer />
            <ScrollToTop />
        </div>
    )
}

export default AboutPage
