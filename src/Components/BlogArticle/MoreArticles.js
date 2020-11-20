import React from "react";
import { Link } from "react-router-dom";

const MoreArticles = () => {
	return (
		<div className="container mb-8 recent">
			<h4 className="font-weight-bold text-dark">Recent Posts</h4>
			<div className="row">
				<div className="col-md-6 col-lg-4 my-3">
					<Link to="blog-article">
						<div className="card mb-lg-4">
							<img className="card-img-top" src="/images/lmj010.JPG" alt="LMJ" loading="lazy" />
							<div className="card-body">
								<h6 className="text-primary mb-3">POLITICS</h6>
								<h4 className="card-title text-black">This is the heading</h4>
							</div>
							<div className="card-footer text-muted border-0 bg-transparent">
								<span>
									<i className="fa fa-clock-o"></i> November 13, 2020
								</span>
							</div>
						</div>
					</Link>
				</div>
				<div className="col-md-6 col-lg-4 my-3">
					<Link to="blog-article">
						<div className="card mb-lg-4">
							<img className="card-img-top" src="/images/lmj010.JPG" alt="LMJ" loading="lazy" />
							<div className="card-body">
								<h6 className="text-primary mb-3">POLITICS</h6>
								<h4 className="card-title text-black">This is the heading</h4>
							</div>
							<div className="card-footer text-muted border-0 bg-transparent">
								<span>
									<i className="fa fa-clock-o"></i> November 13, 2020
								</span>
							</div>
						</div>
					</Link>
				</div>
				<div className="col-md-6 col-lg-4 my-3">
					<Link to="blog-article">
						<div className="card mb-lg-4">
							<img className="card-img-top" src="/images/lmj010.JPG" alt="LMJ" loading="lazy" />
							<div className="card-body">
								<h6 className="text-primary mb-3">POLITICS</h6>
								<h4 className="card-title text-black">This is the heading</h4>
							</div>
							<div className="card-footer text-muted border-0 bg-transparent">
								<span>
									<i className="fa fa-clock-o"></i> November 13, 2020
								</span>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default MoreArticles;
