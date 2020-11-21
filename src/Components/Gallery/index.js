import React, { lazy, Suspense } from "react";
import { HashLoader } from "react-spinners";
import Galleries from "./Galleries";
// import GalleryGrid from "./GalleryGrid";

const NavBar = lazy(() => import("../Reusable Components/Navbar"))
const Footer = lazy(() => import("../Reusable Components/Footer"))

const Gallery = () => {
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
			</Suspense>
		</div>
	);
};

export default Gallery;
