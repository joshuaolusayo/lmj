import React, { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HashLoader } from "react-spinners";

const NavBar = lazy(() => import("../Reusable Components/Navbar"));
const ContactPane = lazy(() => import("./ContactPane"));
const Footer = lazy(() => import("../Reusable Components/Footer"));
const ScrollToTop = lazy(() => import("../Reusable Components/ScrollToTop"));

const Contact = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<div className="contact">
			<Suspense
				fallback={
					<div className="fallback">
						<HashLoader color={"#1c3ae3"} loading />
					</div>
				}
			>
				<NavBar />
				<ContactPane />
				<Footer />
				<ScrollToTop />
			</Suspense>
		</div>
	);
};

export default Contact;
