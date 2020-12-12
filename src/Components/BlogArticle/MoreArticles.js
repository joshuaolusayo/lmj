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
				{recentPosts.map((post) => (
					<div key={post._id} className="col-md-6 col-lg-4 post h-100 my-3">
						<div className="card mb-lg-4 border-0 shadow-sm">
							<img className="card-img-top" src={post.image} alt="LMJ" loading="lazy" />
							<div className="card-header pt-4 bg-transparent border-0">
								<span className="bg-primary px-2 text-center text-light d-inline-block rounded text-sm">{post.tag}</span>
							</div>
							<div className="card-body py-2">
								<h4 className="card-title text-black font-weight-bold mb-0 limit">{post.heading}</h4>
								<p className="card-text text-dark limit">{post.intro}</p>
							</div>
							<div className="card-footer pb-4 text-muted border-0 bg-transparent">
								<Link className="text-primary" key={post.id} to={`/blog-article/${post.heading}`}>
									Read more
								</Link>
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
