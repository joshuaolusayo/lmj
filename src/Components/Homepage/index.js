import React, { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { Helmet, HelmetProvider } from "react-helmet-async";

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
				<HelmetProvider>
					<Helmet>
						<title>Homepage - Welcome to Hon. Olamijuwonlo website</title>
						<meta name="description" content="Honourable Olamijuwonlo Alao-Akala website" />
						<meta name="description" content="Joshua Oyeleke" />
						<meta
							name="keywords"
							content="Olamijuwonlo Alao-Akala, Honourable Olamijuwonlo, lamijuakala, Chairman Ogbomoso North"
						/>
					</Helmet>
					<NavBar />
					<Slides />
					<About />
					<BlogLatest />
					<Footer />
					<ScrollToTop />
				</HelmetProvider>
			</Suspense>
		</div>
	);
};

export default Homepage;
