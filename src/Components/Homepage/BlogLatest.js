import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchLatest } from "../../actions/blogActions";
import { isEmpty } from "lodash";
import AOS from "aos";

const BlogLatest = (props) => {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		if (loading) {
			AOS.init({ duration: 500, once: true });
			props.fetchLatest().then(() => setLoading(false));
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loading]);

	const post = props.post;

	return !loading && !isEmpty(post) ? (
		<div className="container-fluid px-0">
			<div className="container my-6 my-lg-8 blog-latest">
				<h3 className="font-weight-bold mb-4">Latest blog post</h3>
				<div className="row align-items-stretch">
					<div className="col-lg-6 mb-3 mb-lg-0">
						<img className="w-100" src={post.image} alt={post.heading} />
					</div>
					<div className="col-lg-6">
						<h4 className="font-weight-bold">{post.heading}</h4>
						<p>{post.intro}</p>
						<Link key={post.id} to={`/blog-article/${post.heading}`}>
							<button className="btn btn-outline-primary">Read more</button>
						</Link>
					</div>
				</div>
			</div>

			<div className="blog-news" style={{ background: `url('/images/lmj001.jpg') no-repeat` }}>
				<div className="overlay w-100 h-100 py-6 py-lg-8">
					<div className="container d-flex flex-column h-100 justify-content-center align-items-start">
						<h2 className="text-light font-weight-bold">Blog News</h2>
						<div className="row">
							<div className="col-lg-4 my-3">
								<div className="card border-0 shadow h-100" data-aos="fade-up">
									<img className="card-img-top" src="/images/lmj013.JPG" alt="LMJ receiving certificate" />
									<div className="card-body d-flex flex-column justify-content-between">
										<h4 className="card-title font-weight-bold">Politics</h4>
										<p className="card-text">
											Praying and hoping for change is not enough to birth the new Nigeria we are expecting. It is
											important that we take proactive actions as youths and get involved in national service. As a
											politician committed to serving the community, my engagement is to ensure a new Nigeria we can
											all be proud of is born.
										</p>
										<div className="mb-0">
											<Link to="/blog" className="bg-dark text-light btn more">
												Read more in Blog
											</Link>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 my-3">
								<div className="card border-0 shadow h-100" data-aos="fade-up">
									<img className="card-img-top" src="/images/lmj-on-farm.jpg" alt="Farmland" />
									<div className="card-body d-flex flex-column justify-content-between">
										<h4 className="card-title font-weight-bold">Agriculture</h4>
										<p className="card-text">
											One of the core needs of man is food. By providing food for the nation, farmers do not only
											reduce the mortality rate but also equip the citizens with the energy to do their respective
											work effectively through the provision of farm products. I am glad to be part of this noble
											profession.
										</p>
										<div className="mb-0">
											<Link to="/blog" className="bg-dark text-light btn more">
												Read more in Blog
											</Link>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 my-3">
								<div className="card border-0 shadow h-100" data-aos="fade-up">
									<img className="card-img-top" src="/images/lmj012.JPG" alt="LMJ with primary school pupils" />
									<div className="card-body d-flex flex-column justify-content-between">
										<h4 className="card-title font-weight-bold">Philanthropy</h4>
										<p className="card-text">
											I do not see giving to others as a thing only specific people can do. If a nation will grow, it
											is important the citizens learn to give back to the community. Everybody may not have cash or
											material thing to give. However, it is important to note that everybody has something to offer
											towards the growth and development of the community. I do not only believe this, but I practice
											it also.
										</p>
										<div className="mb-0">
											<Link to="/blog" className="bg-dark text-light btn more">
												Read more in Blog
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	) : (
		<div className="my-5 text-center lead">Loading...</div>
	);
};

const mapStateToProps = (state) => ({
	post: state.posts.latestPost,
});

export default connect(mapStateToProps, { fetchLatest })(BlogLatest);
