import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="container-fluid bg-black text-light footer pt-lg-5">
			<div className="container py-5">
				<div className="row align-items-stretch justify-content-between">
					<div className="col-lg-6 d-flex flex-column justify-content-between mt-5 mt-lg-0 text-muted">
						<div>
							<div className="text-secondary font-weight-bold mb-3">
								<img className="logo" src="/images/logo-white-bg.jpeg" alt="LMJ Logo" />
							</div>
						</div>
						<p className="pr-lg-5">
							This is the official website of Hon Olamujuwonlo Alao-Akala. To discover any latest information or programmes
							from him, you can keep checking here. Beware of fraudsters.
						</p>
						<p className="pr-lg-5">
							Follow us:&nbsp;
							<a
								href="http://www.facebook.com/lamijuakala"
								className="mx-2 d-inline-block link text-center rounded-circle"
								rel="nofollow"
							>
								<i className="fa fa-facebook"></i>
							</a>
							<a
								href="http://www.instagram.com/lamijuakala"
								className="mx-2 d-inline-block link text-center rounded-circle"
								rel="nofollow"
							>
								<i className="fa fa-instagram"></i>
							</a>
							<a
								href="http://www.twitter.com/lamijuakala"
								className="mx-2 d-inline-block link text-center rounded-circle"
								rel="nofollow"
							>
								<i className="fa fa-twitter"></i>
							</a>
						</p>
					</div>
					<div className="col-lg-3 d-flex flex-column justify-content-between mt-5 mt-lg-0">
						<h3 className="text-light">Quick Links</h3>
						<Link to="/" className="text-muted mt-3">
							Homepage
						</Link>
						<Link to="/about" className="text-muted mt-3">
							About LMJ
						</Link>
						<Link to="/blog" className="text-muted mt-3">
							Blog
						</Link>
						<Link to="/gallery" className="text-muted mt-3">
							Gallery
						</Link>
						<Link to="/contact" className="text-muted mt-3">
							Contact
						</Link>
					</div>
					<div className="col-lg-3 d-flex flex-column justify-content-between my-5 my-lg-0">
						<h3 className="text-light">Contact Us</h3>
						<a className="text-muted py-2 py-lg-auto" href="tel:+234 816 308 7542">
							+234 816 308 7542
						</a>
						<a className="text-muted py-2 py-lg-auto" href="mailto:info@lamijuakala.com">
							info@lamijuakala.com
						</a>
						<a className="text-muted py-2 py-lg-auto" href="mailto:olamijuwonlo@gmail.com">
							olamijuwonlo@gmail.com
						</a>
						<span className="text-muted py-2 py-lg-auto">Randa, Ogbomoso, Oyo state, Nigeria</span>
					</div>
				</div>
			</div>
			<hr className="bg-secondary" />
			<div className="container pb-4 pt-lg-3 pb-lg-5 px-2">
				<div className="row flex-column flex-md-row">
					<div className="col-lg-6 my-2">
						<p className="text-center text-lg-left text-muted mb-0">Copyright &copy; 2020. All rights reserved.</p>
					</div>
					<div className="col-lg-6 my-2">
						<p className="text-center text-lg-right text-muted mb-0">
							Made with <i className="fa fa-heart text-danger"></i> by{" "}
							<a className="text-light" href="mailto:joshuaooyeleke@gmail.com">
								Joshua Oyeleke
							</a>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
