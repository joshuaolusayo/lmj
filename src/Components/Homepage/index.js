import React, { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HashLoader } from "react-spinners";

import componentLoader from "../Reusable Components/componentLoader";

const NavBar = lazy(() => componentLoader(() => import("../Reusable Components/Navbar")));
const About = lazy(() => componentLoader(() => import("./About")));
const BlogLatest = lazy(() => componentLoader(() => import("./BlogLatest")));
const Slides = lazy(() => componentLoader(() => import("./Slides")));
const Footer = lazy(() => componentLoader(() => import("../Reusable Components/Footer")));
const ScrollToTop = lazy(() => componentLoader(() => import("../Reusable Components/ScrollToTop")));


const Homepage = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		// componentLoader(NavBar, 5);
		// componentLoader(About, 5);
		// componentLoader(BlogLatest, 5);
		// componentLoader(Slides, 5);
		// componentLoader(Footer, 5);
		// componentLoader(ScrollToTop, 5);
		
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<div className="homepage">
			<Suspense
				fallback={
					<div className="fallback">
						<HashLoader color={"#1c3ae3"} loading />
					</div>
				}
			>
				<NavBar />
				<Slides />
				<About />
				<BlogLatest />
				<Footer />
				<ScrollToTop />
			</Suspense>
		</div>
	);
};

export default Homepage;
