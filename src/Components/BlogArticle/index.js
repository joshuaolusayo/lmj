import React, { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HashLoader } from "react-spinners";

import componentLoader from "../Reusable Components/componentLoader";

const NavBar = lazy(() => componentLoader(() => import("../Reusable Components/Navbar")));
const Article = lazy(() => componentLoader(() => import("./Article")));
const MoreArticles = lazy(() => componentLoader(() => import("./MoreArticles")));
const Subscribe = lazy(() => componentLoader(() => import("../Reusable Components/Subscribe")));
const Footer = lazy(() => componentLoader(() => import("../Reusable Components/Footer")));
const ScrollToTop = lazy(() => componentLoader(() => import("../Reusable Components/ScrollToTop")));

const BlogArticle = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<div className="blog-article">
			<Suspense
				fallback={
					<div className="fallback">
						<HashLoader color={"#1c3ae3"} loading />
					</div>
				}
			>
				<NavBar />
				<Article />
				<MoreArticles />
				<Subscribe />
				<Footer />
				<ScrollToTop />
			</Suspense>
		</div>
	);
};

export default BlogArticle;
