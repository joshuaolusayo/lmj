import React, { lazy, Suspense } from "react";
import { HashLoader } from "react-spinners";
const Footer = lazy(() => require("../Reusable Components/Footer"));
const NavBar = lazy(() => require("../Reusable Components/Navbar"));
const Banner = lazy(() => require("./Banner"));
const BlogSection = lazy(() => require("./BlogSection"));
const Subscribe = lazy(() => require("../Reusable Components/Subscribe"));
const ScrollToTop = lazy(() => require("../Reusable Components/ScrollToTop"));

const Blog = () => {
	return (
		<Suspense
			fallback={
				<div className="fallback">
					<HashLoader color={"#1c3ae3"} loading />
				</div>
			}
		>
			<div className="blog">
				<NavBar />
				<Banner />
				<BlogSection />
				<Subscribe />
				<Footer />
				<ScrollToTop />
			</div>
		</Suspense>
	);
};

export default Blog;
