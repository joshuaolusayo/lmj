import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BlogSection = () => {
	const [APIResponse, setAPIResponse] = useState();

	function callAPI() {
		fetch("/blog/articles.json")
			.then((res) => res.json())
			.then((res) => setAPIResponse(res))
			.catch((err) => console.log(err));
	}

	useEffect(() => {
		callAPI();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return APIResponse ? (
		<div className="container blog-section my-5">
			<h2 className="font-weight-bold mb-4">Blog Articles</h2>
			<div className="card-columns">
				{APIResponse.map((post) => (
					<Link key={post.id} to={`/blog-article/${post.heading}`}>
						<div className="card mb-lg-4">
							<img className="card-img-top" src={post.image} alt="LMJ" loading="lazy" />
							<div className="card-body">
								<h6 className="text-primary mb-3">{post.tag}</h6>
								<h4 className="card-title text-black font-weight-bold">{post.heading}</h4>
								<p className="card-text text-dark">{post.intro}</p>
							</div>
							<div className="card-footer text-muted border-0 bg-transparent">
								<span>
									<i className="fa fa-clock-o"></i> {post.date}
								</span>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	) : (
		<div className="my-5 text-center lead">Loading...</div>
	);
};

export default BlogSection;
