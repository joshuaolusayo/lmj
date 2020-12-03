import React, { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HashLoader } from "react-spinners";

import componentLoader from "../Reusable Components/componentLoader";

const Footer = lazy(() => componentLoader(() => import("../Reusable Components/Footer")));
const NavBar = lazy(() => componentLoader(() => import("../Reusable Components/Navbar")));
const ScrollToTop = lazy(() => componentLoader(() => import("../Reusable Components/ScrollToTop")));
const AboutLMJ = lazy(() => componentLoader(() => import("./AboutLMJ")));

const AboutPage = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<div className="aboutPage">
			<Suspense
				fallback={
					<div className="fallback">
						<HashLoader color={"#1c3ae3"} loading />
					</div>
				}
			>
				<NavBar />
				<AboutLMJ />
				<Footer />
				<ScrollToTop />
			</Suspense>
		</div>
	);
};

export default AboutPage;
