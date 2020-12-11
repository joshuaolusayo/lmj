import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
	const [showScroll, setShowScroll] = useState(false);
	const { pathname } = useLocation();

	const scrollTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", checkScrollTop);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname, showScroll]);

	const checkScrollTop = () => {
		if (!showScroll && window.pageYOffset > 300) {
			setShowScroll(true);
		} else if (showScroll && window.pageYOffset <= 300) {
			setShowScroll(false);
		}
	};

	if (showScroll) {
		return (
			<span className={`bg-light rounded-circle shadow ${showScroll ? "d-block" : "d-none"}`} id="scrollTop" onClick={scrollTop}>
				<i className="fa fa-arrow-up text-primary"></i>
			</span>
		);
	} else {
		return "";
	}
};

export default ScrollToTop;
