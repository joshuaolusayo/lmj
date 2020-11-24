import React, { useEffect } from "react";
import AOS from "aos";

const Banner = () => {
	useEffect(() => {
		AOS.init({ duration: 600, once: true });
	});

	return (
		<div
			className="container-fluid px-0 banner w-100"
			style={{ background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/lmj007.JPG') 40% 60%` }}
		>
			<div
				className="container d-flex flex-column justify-content-center align-items-center h-100 text-center text-light"
				data-aos="zoom-out"
			>
				<h1 className="font-weight-bold">Welcome to my blog</h1>
				<p className="text-secondary">Humanity | Farming | Politics</p>
			</div>
		</div>
	);
};

export default Banner;
