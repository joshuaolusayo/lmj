import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";

const About = () => {
	useEffect(() => {
		AOS.init({ duration: 600, once: true });
	});

	return (
		<div className="container-fluid about bg-light px-0">
			<div className="container jumbotron mb-0 bg-transparent">
				<p className="text-center quote font-italic" data-aos="fade-up">
					<q>
						Together, we <span className="font-weight-bold">the people</span> will arise and take responsibility in our country.
						I am for the people, available and accessible.
					</q>
				</p>
			</div>
			<div className="bg-primary">
				<div className="container text-light py-5">
					<div className="row justify-content-lg-between">
						<div className="col-lg-5 text-center text-lg-left mb-5 mb-lg-0 d-lg-flex flex-column justify-content-between align-items-start">
							<h2 className="font-weight-bold">About Me</h2>
							<p>Who I am in three words.</p>
							<Link to="/about" className="btn text-secondary px-0 abt">
								Read more
							</Link>
						</div>
						<div className="col-md-8 mx-auto col-lg-6 d-flex justify-content-between">
							<Link
								to="/about#philanthropy"
								className="d-flex flex-column justify-content-between align-items-center h-100 text-light"
								data-aos="zoom-in"
							>
								<span className="priority text-center shadow d-inline-block rounded-circle mb-4 mb-lg-4">
									<i className="fa fa-gift text-light"></i>
								</span>
								<p className="text-justify mb-0">Philanthropist</p>
							</Link>
							<Link
								to="/about#politics"
								className="d-flex flex-column justify-content-between align-items-center h-100 text-light"
								data-aos="zoom-in"
							>
								<span className="priority text-center shadow d-inline-block rounded-circle mb-4 mb-lg-4">
									<i className="fa fa-gift text-light"></i>
								</span>
								<p className="text-justify mb-0">Politician</p>
							</Link>
							<Link
								to="/about"
								className="d-flex flex-column justify-content-between align-items-center h-100 text-light"
								data-aos="zoom-in"
							>
								<span className="priority text-center shadow d-inline-block rounded-circle mb-4 mb-lg-4">
									<i className="fa fa-gift text-light"></i>
								</span>
								<p className="text-justify mb-0">Farmer</p>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
