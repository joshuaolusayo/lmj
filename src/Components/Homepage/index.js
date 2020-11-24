import React, { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HashLoader } from "react-spinners";

const NavBar = lazy(() => import("../Reusable Components/Navbar"));
const About = lazy(() => import("./About"));
const BlogLatest = lazy(() => import("./BlogLatest"));
const Slides = lazy(() => import("./Slides"));
const Footer = lazy(() => import("../Reusable Components/Footer"));
const ScrollToTop = lazy(() => import("../Reusable Components/ScrollToTop"));

const Homepage = () => {
	const { pathname } = useLocation();

	useEffect(() => {
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
