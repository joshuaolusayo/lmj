import React from "react";
import { Link } from "react-router-dom";

const BlogLatest = () => {
	return (
		<div className="container-fluid px-0">
			<div className="container my-5 blog-latest">
				<h3 className="font-weight-bold">Latest blog post</h3>
				<div className="row">
					<div className="col-lg-6 mb-3 mb-lg-5">
						<img className="w-100" src="/images/lmj02.jpg" alt="LMJ sitting with an elderly woman" />
					</div>
					<div className="col-lg-6">
						<h4 className="font-weight-bold">Reaching out to the underprivileged</h4>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, amet saepe corrupti esse mollitia minus
							voluptate! Nulla reiciendis placeat, iusto in explicabo at quisquam tenetur, nemo magni laboriosam sed. Eum, vel
							voluptatum. Eligendi temporibus aspernatur assumenda? Eius maxime facilis quod?...
						</p>
						<Link to="/blog-article">
							<button className="btn btn-outline-primary">Read more</button>
						</Link>
					</div>
				</div>
			</div>

			<div className="blog-news" style={{ background: `url('/images/lmj-sit.jpg') no-repeat` }}>
				<div className="overlay w-100 h-100 py-5">
					<div className="container d-flex flex-column h-100 justify-content-center align-items-start">
						<h2 className="text-light font-weight-bold">Blog News</h2>
						<div className="row">
							<div className="col-md-6 col-lg-4 my-3">
								<div className="card shadow">
									<img className="card-img-top" src="/images/lmj-portrait.jpg" alt="LMJ Portrait" />
									<div className="card-body">
										<h4 className="card-title font-weight-bold">Politics</h4>
										<p className="card-text">
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat fugit voluptatum, unde nesciunt
											enim sed asperiores nam, impedit non, nobis blanditiis corporis sequi odio? Nobis autem quos
											voluptatibus in quia.
										</p>
										<Link to="/" className="bg-primary__light text-secondary__light btn more">Read more</Link>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-lg-4 my-3">
								<div className="card shadow">
									<img className="card-img-top" src="/images/lmj-pic.jpg" alt="LMJ Portrait" />
									<div className="card-body">
										<h4 className="card-title font-weight-bold">Politics</h4>
										<p className="card-text">
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat fugit voluptatum, unde nesciunt
											enim sed asperiores nam, impedit non, nobis blanditiis corporis sequi odio? Nobis autem quos
											voluptatibus in quia.
										</p>
										<Link to="/" className="bg-primary__light text-secondary__light btn more">Read more</Link>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-lg-4 my-3">
								<div className="card shadow">
									<img className="card-img-top" src="/images/lmj-portrait.jpg" alt="LMJ Portrait" />
									<div className="card-body">
										<h4 className="card-title font-weight-bold">Politics</h4>
										<p className="card-text">
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat fugit voluptatum, unde nesciunt
											enim sed asperiores nam, impedit non, nobis blanditiis corporis sequi odio? Nobis autem quos
											voluptatibus in quia.
										</p>
										<Link to="/" className="bg-primary__light text-secondary__light btn more">Read more</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogLatest;
