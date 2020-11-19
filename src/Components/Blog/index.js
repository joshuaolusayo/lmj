import React from 'react'
import Footer from '../Reusable Components/Footer'
import NavBar from '../Reusable Components/Navbar'
import Banner from './Banner'
import BlogSection from './BlogSection'
import Subscribe from './Subscribe'
import ScrollToTop from '../Reusable Components/ScrollToTop'

const Blog = () => {
    return (
        <div className="blog">
            <NavBar />
            <Banner />
            <BlogSection />
            <Subscribe />
            <Footer />
            <ScrollToTop />
        </div>
    )
}

export default Blog
