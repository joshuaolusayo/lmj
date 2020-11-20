import React from "react";

const ContactPane = () => {
	return (
		<div
			className="container-fluid px-0 banner w-100 d-flex justify-content-center align-items-center contact-pane"
			style={{
				background: `linear-gradient(rgba(28, 58, 227, 0.7), rgba(28, 58, 227, 0.7)), url('/images/contact-bg.jpg') 40% 60%`,
				height: "700px",
			}}
		>
			<div className="container px-3 px-sm-auto">
				<div className="row no-gutters">
					<div className="col-md-8 col-lg-10 mx-auto bg-light px-0">
						<div className="row w-100 h-100 flex-column flex-lg-row no-gutters">
							<div className="col-lg-4 bg-primary h-100 d-none p-3 p-lg-4 my-auto d-lg-flex justify-content-center align-items-center">
								<div>
									<h2 className="text-light mb-4">Contact Us</h2>
									<p className="d-flex align-items-center">
										<i className="fa fa-map-marker text-secondary" aria-hidden="true"></i>
										<span className="text-light">Randa, Ogbomoso, Oyo state, Nigeria</span>
									</p>
									<p className="d-flex align-items-center">
										<i className="fa fa-envelope text-secondary" aria-hidden="true"></i>
										<span className="text-light">lmjalao@gmail.com</span>
									</p>
									<p className="d-flex align-items-center">
										<i className="fa fa-facebook text-secondary" aria-hidden="true"></i>
										<span className="text-light">Lamiju Akala</span>
									</p>
									<p className="d-flex align-items-center">
										<i className="fa fa-instagram text-secondary" aria-hidden="true"></i>
										<span className="text-light">Lamiju Akala</span>
									</p>
									<p className="d-flex align-items-center">
										<i className="fa fa-twitter text-secondary" aria-hidden="true"></i>
										<span className="text-light">Lamiju Akala</span>
									</p>
								</div>
							</div>
							<div className="col-lg-8 p-3 p-lg-4 bg-light">
								<h2 className="text-primary">Send a message</h2>
								<p className="text-muted">Feel free to drop a message for us below</p>
								<form action="#">
									<div className="form-group mb-0">
										<label htmlFor="name"></label>
										<input
											type="text"
											className="form-control"
											name="name"
											id="name"
											aria-describedby="emailHelpId"
											placeholder="Fullname"
											required
										/>
									</div>
									<div className="form-group mb-0">
										<label htmlFor="email"></label>
										<input
											type="email"
											className="form-control"
											name="email"
											id="email"
											aria-describedby="emailHelpId"
											placeholder="email"
											required
										/>
									</div>
									<div className="form-group mb-0">
										<label htmlFor="message"></label>
										<textarea
											className="form-control"
											name="message"
											id="message"
											rows="5"
											placeholder="Your message"
										></textarea>
									</div>
									<button className="btn-outline-primary my-4 btn" type="submit">
										Submit
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactPane;
