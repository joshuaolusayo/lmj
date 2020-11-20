import React, { lazy, Suspense } from "react";
import { HashLoader } from "react-spinners";
const NavBar = lazy(() => import("../Reusable Components/Navbar"));
const About = lazy(() => import("./About"));
const BlogLatest = lazy(() => import("./BlogLatest"));
const Slides = lazy(() => import("./Slides"));
const Footer = lazy(() => import("../Reusable Components/Footer"));
const ScrollToTop = lazy(() => import("../Reusable Components/ScrollToTop"));

const Homepage = () => {
	return (
		<Suspense
			fallback={
				<div className="fallback">
					<HashLoader loading />
				</div>
			}
		>
			<div className="homepage">
				<NavBar />
				<Slides />
				<About />
				<BlogLatest />
				<Footer />
				<ScrollToTop />
			</div>
		</Suspense>
	);
};

export default Homepage;
