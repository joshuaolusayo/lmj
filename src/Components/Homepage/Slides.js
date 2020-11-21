import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slides = () => {
	let settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		cssEase: "linear",
	};

	return (
		<div className="container-fluid px-0 mx-0 slides">
			<Slider {...settings}>
				<div className="slide">
					<img src="/images/lmj-at-office.jpg" alt="LMJ at office" />
					<div className="overlay w-100 rounded-top text-center p-2 px-md-5 py-md-3 d-flex flex-column justify-content-center align-items-center text-light">
						<>
							<span className="font-italic">Welcome to the official website of</span>
							<span className="font-weight-bold text-bold">Hon Olamijuwonlo Alao-Akala</span>
							{/* <br /><button className="btn-outline-light btn px- px-lg-4 py-3">Learn more</button> */}
						</>
					</div>
				</div>
				<div className="slide">
					<img src="/images/lmj-with-others.jpg" alt="LMJ" />
					<div className="overlay w-100 rounded-top text-center p-2 px-md-5 py-md-3 d-flex flex-column justify-content-center align-items-center text-light">
						<>
							<span className="font-italic">Welcome to the official website of</span>
							<span className="font-weight-bold text-bold">Hon Olamijuwonlo Alao-Akala</span>
						</>
					</div>
				</div>
				<div className="slide">
					<img src="/images/lmj002.JPG" alt="Lamiju" />
					<div className="overlay w-100 rounded-top text-center p-2 px-md-5 py-md-3 d-flex flex-column justify-content-center align-items-center text-light">
						<>
							<span className="font-italic">Welcome to the official website of</span>
							<span className="font-weight-bold text-bold">Hon Olamijuwonlo Alao-Akala</span>
						</>
					</div>
				</div>
				<div className="slide">
					<img src="/images/lmj-with-osinbajo.JPG" alt="Lamiju with Osinbajo" />
					<div className="overlay w-100 rounded-top text-center p-2 px-md-5 py-md-3 d-flex flex-column justify-content-center align-items-center text-light">
						<>
							<span className="font-italic">Welcome to the official website of</span>
							<span className="font-weight-bold text-bold">Hon Olamijuwonlo Alao-Akala</span>
						</>
					</div>
				</div>
				<div className="slide">
					<img src="/images/lmj-with-daddy.JPG" alt="LMJ with his father" />
					<div className="overlay w-100 rounded-top text-center p-2 px-md-5 py-md-3 d-flex flex-column justify-content-center align-items-center text-light">
						<>
							<span className="font-italic">Welcome to the official website of</span>
							<span className="font-weight-bold text-bold">Hon Olamijuwonlo Alao-Akala</span>
						</>
					</div>
				</div>
			</Slider>
		</div>
	);
};

export default Slides;
