import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import AOS from "aos";
import axios from "axios";

const ContactPane = () => {
	useEffect(() => {
		AOS.init({ duration: 600, once: true });
	}, []);

	const [contact, setContact] = useState({
		name: "",
		email: "",
		message: "",
		subject: "",
	});

	const [result, setResult] = useState(null);

	const [sending, setSending] = useState(false);

	const getForm = (e) => {
		e.preventDefault();
		setSending(true);
		axios
			.post("/send", { ...contact })
			.then((response) => {
				setResult(response.data);
				setContact({
					name: "",
					email: "",
					message: "",
					subject: "",
				});
			})
			.catch(() => {
				setResult({
					success: false,
					message: "Something went wrong. Try again later",
				});
			})
			.finally(() => {
				setSending(false);
			});
	};

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
							<div
								className="col-lg-4 bg-primary h-100 d-none p-3 p-lg-4 my-auto d-lg-flex justify-content-center align-items-center"
								data-aos="fade-right"
							>
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
										<span className="text-light">Hon. Olamijuwonlo A. Alao JP</span>
									</p>
									<p className="d-flex align-items-center">
										<i className="fa fa-instagram text-secondary" aria-hidden="true"></i>
										<span className="text-light">@lamijuakala</span>
									</p>
									<p className="d-flex align-items-center">
										<i className="fa fa-twitter text-secondary" aria-hidden="true"></i>
										<span className="text-light">@lamijuakala</span>
									</p>
								</div>
							</div>
							<div className="col-lg-8 p-3 p-lg-4 bg-light">
								<h2 className="text-primary">Send a message</h2>
								<p className="text-muted">Feel free to drop a message for us below</p>
								{result && <p className={`${result.success ? "text-success" : "text-danger"}`}>{result.message}</p>}
								<form onSubmit={getForm}>
									<div className="form-group mb-0">
										<label htmlFor="name"></label>
										<input
											type="text"
											className="form-control"
											value={contact.name}
											onChange={(e) => {
												setContact({ ...contact, [e.target.name]: [e.target.value] });
											}}
											name="name"
											id="name"
											aria-describedby="emailHelpId"
											placeholder="Fullname"
											autoComplete="on"
											required
										/>
									</div>
									<div className="form-group mb-0">
										<label htmlFor="email"></label>
										<input
											type="email"
											className="form-control"
											value={contact.email}
											onChange={(e) => {
												setContact({ ...contact, [e.target.name]: [e.target.value] });
											}}
											name="email"
											id="email"
											aria-describedby="emailHelpId"
											placeholder="Email"
											autoComplete="on"
											required
										/>
									</div>
									<div className="form-group mb-0">
										<label htmlFor="subject"></label>
										<input
											type="text"
											className="form-control"
											value={contact.subject}
											onChange={(e) => {
												setContact({ ...contact, [e.target.name]: [e.target.value] });
											}}
											name="subject"
											id="subject"
											aria-describedby="emailHelpId"
											placeholder="Subject"
											autoComplete="on"
											required
										/>
									</div>
									<div className="form-group mb-0">
										<label htmlFor="message"></label>
										<textarea
											className="form-control"
											value={contact.message}
											onChange={(e) => {
												setContact({ ...contact, [e.target.name]: [e.target.value] });
											}}
											name="message"
											id="message"
											rows="5"
											placeholder="Your message"
											required
										></textarea>
									</div>
									<button className="btn-outline-primary my-4 btn" type="submit">
										Submit
									</button>
									{sending ? (
										<span className="m-4 d-inline-block">
											<ClipLoader size={30} color={"#1c3ae3"} loading />
										</span>
									) : (
										""
									)}
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
