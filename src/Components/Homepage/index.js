import React from "react";
import NavBar from "../Reusable Components/Navbar";
import About from "./About";
import BlogLatest from "./BlogLatest";
import Slides from "./Slides";
import Footer from "../Reusable Components/Footer"
import ScrollToTop from "../Reusable Components/ScrollToTop"

const Homepage = () => {
	return (
		<div className="homepage">
			<NavBar />
			<Slides />
			<About />
			<BlogLatest />
			<Footer />
			<ScrollToTop />
		</div>
	);
};

export default Homepage;
