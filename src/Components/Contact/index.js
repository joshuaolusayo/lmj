import React, { lazy, Suspense } from "react";
import { HashLoader } from "react-spinners";

const NavBar = lazy(() => require("../Reusable Components/Navbar"));
const ContactPane = lazy(() => require("./ContactPane"));
const Footer = lazy(() => require("../Reusable Components/Footer"));
const ScrollToTop = lazy(() => require("../Reusable Components/ScrollToTop"));

const Contact = () => {
	return (
		<Suspense
			fallback={
				<div className="fallback">
					<HashLoader color={"#1c3ae3"} loading />
				</div>
			}
		>
			<div className="contact">
				<NavBar />
				<ContactPane />
				<Footer />
				<ScrollToTop />
			</div>
		</Suspense>
	);
};

export default Contact;
