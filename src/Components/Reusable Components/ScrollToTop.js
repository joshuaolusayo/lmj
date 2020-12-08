import React, { useEffect, useState } from "react";

const ScrollToTop = () => {
	const [showScroll, setShowScroll] = useState(false);
	const [mount, setMount] = useState(false);

	const scrollTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", checkScrollTop);
		setMount(true);

		return () => {
			setMount(false);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [mount]);

	const checkScrollTop = () => {
		if (!showScroll && window.pageYOffset > 300) {
			setShowScroll(true);
		} else if (showScroll && window.pageYOffset <= 300) {
			setShowScroll(false);
		}
	};

	if (mount) {
		return (
			<span className={`bg-light rounded-circle shadow ${showScroll ? "d-block" : "d-none"}`} id="scrollTop" onClick={scrollTop}>
				<i className="fa fa-arrow-up text-primary"></i>
			</span>
		);
	} else {
		return "";
	}
	// return (
	// 	<span className={`bg-light rounded-circle shadow ${showScroll ? "d-block" : "d-none"}`} id="scrollTop" onClick={scrollTop}>
	// 		<i className="fa fa-arrow-up text-primary"></i>
	// 	</span>
	// );
};

export default ScrollToTop;
