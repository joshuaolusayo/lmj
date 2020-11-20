import React, { lazy, Suspense } from "react";
import { HashLoader } from "react-spinners";

const Footer = lazy(() => import("../Reusable Components/Footer"));
const NavBar = lazy(() => import("../Reusable Components/Navbar"));
const ScrollToTop = lazy(() => import("../Reusable Components/ScrollToTop"));
const AboutLMJ = lazy(() => import("./AboutLMJ"));

const AboutPage = () => {
	return (
		<Suspense
			fallback={
				<div className="fallback">
					<HashLoader loading />
				</div>
			}
		>
			<div className="aboutPage">
				<NavBar />
				<AboutLMJ />
				<Footer />
				<ScrollToTop />
			</div>
		</Suspense>
	);
};

export default AboutPage;
