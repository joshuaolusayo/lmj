import React, { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HashLoader } from "react-spinners";

const Footer = lazy(() => import("../Reusable Components/Footer"));
const NavBar = lazy(() => import("../Reusable Components/Navbar"));
const Banner = lazy(() => import("./Banner"));
const BlogSection = lazy(() => import("./BlogSection"));
const Subscribe = lazy(() => import("../Reusable Components/Subscribe"));
const ScrollToTop = lazy(() => import("../Reusable Components/ScrollToTop"));

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
