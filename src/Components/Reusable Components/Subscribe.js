import React, { useState } from "react";
import axios from "axios";

const Subscribe = () => {
	const [email, setEmail] = useState("");
	const [showError, setShowError] = useState(false);
	const [success, setSuccess] = useState(false);
	const [sending, setSending] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setEmail(email);
		setSending(true);

		if (email !== "") {
			axios
				.post("/subscribe", { email })
				.then(() => {
					setEmail("");
					setSending(false);
					setSuccess(true);
				})
				.catch(() => {
					setSending(false);
					setShowError(true);
				})
				.finally(() => {
					setTimeout(() => {
						setSuccess(false);
						setShowError(false);
					}, 10000);
				});
		}
	};

	return (
		<div className="container-fluid bg-primary py-6 subscribe">
			<div className="container text-center">
				<div className="col-md-8 col-lg-6 mx-auto">
					<h3 className="text-light font-weight-bold mb-3">Subscribe to our newsletters</h3>
					<form action="/subscribe" method="POST" onSubmit={handleSubmit}>
						<div className="form-group mb-2 d-flex flex-column">
							<input
								className="p-2 px-md-4 rounded-top w-100 border-0"
								type="email"
								name="email"
								placeholder="yourname@email.com"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
								pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
							/>
							{sending ? <p className="lead mt-2 text-secondary">Subscribing...</p> : ""}
							{showError ? <p className="lead mt-2 text-danger">Please, enter an email</p> : ""}
							{success ? <p className="lead mt-2 text-light">Please, confirm your email address</p> : ""}
							<button id="submit" className="btn bg-primary__light text-light p-2 rounded-bottom" type="submit">
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Subscribe;
