import React, { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HashLoader } from "react-spinners";
import Galleries from "./Galleries";
import { Helmet, HelmetProvider } from "react-helmet-async";
// import GalleryGrid from "./GalleryGrid";

import componentLoader from "../Reusable Components/componentLoader";

const NavBar = lazy(() => componentLoader(() => import("../Reusable Components/Navbar")));
const Footer = lazy(() => componentLoader(() => import("../Reusable Components/Footer")));
const ScrollToTop = lazy(() => componentLoader(() => import("../Reusable Components/ScrollToTop")));

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
				<HelmetProvider>
					<Helmet>
						<title>Gallery</title>
						<meta name="description" content="Hon Olamijuwonlo Alao-Akala Picture Gallery" />
						<meta name="author" content="Joshua Oyeleke" />
						<meta
							name="keywords"
							content="Olamijuwonlo Alao-Akala Picture, Honourable Olamijuwonlo Gallery, lamijuakala, Chairman Ogbomoso North, Lamijuakala pictures"
						/>
					</Helmet>
					<NavBar />
					<Galleries />
					{/* <GalleryGrid /> */}
					<Footer />
					<ScrollToTop />
				</HelmetProvider>
			</Suspense>
		</div>
	);
};

export default Gallery;
