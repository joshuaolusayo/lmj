import React, { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HashLoader } from "react-spinners";
import Helmet from "react-helmet";

import componentLoader from "../Reusable Components/componentLoader";

// import { createStore } from "redux";

const Footer = lazy(() => componentLoader(() => import("../Reusable Components/Footer")));
const NavBar = lazy(() => componentLoader(() => import("../Reusable Components/Navbar")));
const Banner = lazy(() => componentLoader(() => import("./Banner")));
const BlogSection = lazy(() => componentLoader(() => import("./BlogSection")));
const Subscribe = lazy(() => componentLoader(() => import("../Reusable Components/Subscribe")));
const ScrollToTop = lazy(() => componentLoader(() => import("../Reusable Components/ScrollToTop")));

const Blog = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<div className="blog">
			<Suspense
				fallback={
					<div className="fallback">
						<HashLoader color={"#1c3ae3"} loading />
					</div>
				}
			>
				<Helmet>
					<title>Blog</title>
					<meta name="description" content="Honourable Olamijuwonlo Alao-Akala blog site" />
					<meta
						name="keywords"
						content="Olamijuwonlo Alao-Akala blog, Honourable Olamijuwonlo blog, lamijuakala blog, Olamiju blog"
					/>
				</Helmet>
				<NavBar />
				<Banner />
				<BlogSection />
				<Subscribe />
				<Footer />
				<ScrollToTop />
			</Suspense>
		</div>
	);
};

export default Blog;
