import React, { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HashLoader } from "react-spinners";
import Galleries from "./Galleries";
// import GalleryGrid from "./GalleryGrid";

const NavBar = lazy(() => import("../Reusable Components/Navbar"));
const Footer = lazy(() => import("../Reusable Components/Footer"));
const ScrollToTop = lazy(() => import("../Reusable Components/ScrollToTop"));

const Gallery = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<div className="gallery">
			<Suspense
				fallback={
					<div className="fallback">
						<HashLoader color={"#1c3ae3"} loading />
					</div>
				}
			>
				<NavBar />
				<Galleries />
				{/* <GalleryGrid /> */}
				<Footer />
				<ScrollToTop />
			</Suspense>
		</div>
	);
};

export default Gallery;
