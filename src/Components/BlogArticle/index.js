import React, { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HashLoader } from "react-spinners";
const NavBar = lazy(() => import("../Reusable Components/Navbar"));
const Article = lazy(() => import("./Article"));
const MoreArticles = lazy(() => import("./MoreArticles"));
const Subscribe = lazy(() => import("../Reusable Components/Subscribe"));
const Footer = lazy(() => import("../Reusable Components/Footer"));

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
			</Suspense>
		</div>
	);
};

export default BlogArticle;
