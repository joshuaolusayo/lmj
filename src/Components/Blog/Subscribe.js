import React from "react";

const Subscribe = () => {
	return (
		<div className="container-fluid bg-primary py-6 subscribe">
			<div className="container text-center">
				<div className="col-md-8 col-lg-6 mx-auto">
					<h3 className="text-light font-weight-bold mb-3">Subscribe to our newsletters</h3>
					<form action="#">
						<div className="form-group mb-2 d-flex flex-column">
							<input
								className="p-2 px-md-4 rounded-top w-100 border-0"
								type="email"
								placeholder="yourname@email.com"
								required
							/>
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
