import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchRecent } from "../../actions/blogActions";

const MoreArticles = (props) => {
	useEffect(() => {
		props.fetchRecent();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const recentPosts = props.recentPosts;

	return recentPosts ? (
		<div className="container mb-8 recent">
			<h4 className="font-weight-bold text-dark">Recent Posts</h4>
			<div className="row">
				{recentPosts.map((post, index) => (
					<div key={index} className="col-md-6 col-lg-4 my-3">
						<div key={post.id} to={`/blog-article/${post.heading}`}>
							<div className="card mb-lg-4">
								<img className="card-img-top" src={post.image} alt="LMJ" loading="lazy" />
								<div className="card-body">
									<h6 className="text-primary mb-3">{post.tag}</h6>
									<h4 className="card-title text-black font-weight-bold">{post.heading}</h4>
									<p className="card-text text-dark">{post.intro}</p>
									<Link className="text-primary" key={post.id} to={`/blog-article/${post.heading}`}>Read more</Link>
								</div>
								<div className="card-footer text-muted border-0 bg-transparent">
									<span>
										<i className="fa fa-clock-o"></i> {post.date}
									</span>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	) : (
		<div className="my-5 text-center lead">Loading...</div>
	);
};

const mapStateToProps = (state) => ({
	recentPosts: state.posts.recents,
});

export default connect(mapStateToProps, { fetchRecent })(MoreArticles);
