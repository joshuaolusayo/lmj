import React, { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { Helmet, HelmetProvider } from "react-helmet-async";

import componentLoader from "../Reusable Components/componentLoader";

const NavBar = lazy(() => componentLoader(() => import("../Reusable Components/Navbar")));
const ContactPane = lazy(() => componentLoader(() => import("./ContactPane")));
const Footer = lazy(() => componentLoader(() => import("../Reusable Components/Footer")));
const ScrollToTop = lazy(() => componentLoader(() => import("../Reusable Components/ScrollToTop")));

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
				<HelmetProvider>
					<Helmet>
						<title>Contact me</title>
						<meta name="description" content="Contact Hon Olamijuwonlo Alao-Akala" />
						<meta name="author" content="Joshua Oyeleke" />
						<meta
							name="keywords"
							content="Contact Olamijuwonlo Alao-Akala, Contact Honourable Olamijuwonlo, lamijuakala, Chairman Ogbomoso North, Hon Olamijuwonlo Alao phone number, Olamijuwonlo Alao email address"
						/>
					</Helmet>
					<NavBar />
					<ContactPane />
					<Footer />
					<ScrollToTop />
				</HelmetProvider>
			</Suspense>
		</div>
	);
};

export default Contact;
