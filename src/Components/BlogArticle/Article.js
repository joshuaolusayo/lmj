import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Helmet from "react-helmet";

const Article = (props) => {
	const [posts, setAllPosts] = useState();
	const [post, setPost] = useState();
	const [loaded, setLoaded] = useState(false);

	let params = useParams();

	useEffect(() => {
		fetch(`/blog/articles.json`, { method: "GET" })
			.then((res) => res.json())
			.then((json) => {
				setAllPosts(json);
				setLoaded(true);
			})
			.catch((e) => console.log(`An error occured: ${e}`));

		if (loaded) {
			posts.map((data) => {
				if (data.heading === params.heading) {
					setPost(data);
					return true;
				}
				return false;
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loaded, params.heading]);

	if (post) {
		return (
			<div className="container-fluid article px-0">
				<Helmet>
					<title>${params.heading}</title>
					<meta name="description" content={params.heading} />
					<meta
						name="keywords"
						content={`${post.heading}, ${post.tag}`}
					/>
				</Helmet>
				<div
					className="banner"
					style={{ background: `linear-gradient(rgba(0,0,0.2), rgba(0,0,0,0.2)), url(${post.image}) 15% 0%` }}
				>
					<div className="container d-flex flex-column justify-content-center align-items-center h-100 text-light">
						<span className="text-uppercase mb-3">{post.tag}</span>
						<h3 className="font-weight-bold text-center">{post.heading}</h3>
						<span className="mt-2">
							<i className="fa fa-clock-o"></i> {post.date}
						</span>
					</div>
				</div>

				<div className="container mt-5 mb-8 px-2 px-sm-auto">
					<div className="row no-gutters">
						<div className="w-100">
							<div className="text-center mb-5">
								<q className="lead">{post.quoteStart}</q>
								<br />
								<span>- {post.quoteStartAuthor}</span>
							</div>
							<p>{post.intro}</p>
							{post.section.map((data, index) => (
								<div key={index} className="my-5">
									<h4 className="font-weight-bold">{data.heading}</h4>
									{data.para.map((paragraph, index) => (
										<p key={index}>{paragraph}</p>
									))}
								</div>
							))}
							<div className="text-center mb-5">
								<q className="lead">{post.quoteEnd}</q>
								<br />
								<span>- {post.quoteEndAuthor}</span>
							</div>

							<div className="mt-5 d-flex flex-column justify-content-center align-items-center share">
								<h4 className="mb-3">Share this post</h4>
								<div>
									<a
										href="javascript;;"
										className="d-inline-block rounded-circle bg-primary text-center mx-2 btn-outline-secondary"
									>
										<i className="fa fa-facebook"></i>
									</a>
									<a
										href="javascript;;"
										className="d-inline-block rounded-circle bg-primary text-center mx-2 btn-outline-secondary"
									>
										<i className="fa fa-twitter"></i>
									</a>
									<a
										href="javascript;;"
										className="d-inline-block rounded-circle bg-primary text-center mx-2 btn-outline-secondary"
									>
										<i className="fa fa-linkedin"></i>
									</a>
									<a
										href="javascript;;"
										className="d-inline-block rounded-circle bg-primary text-center mx-2 btn-outline-secondary"
									>
										<i className="fa fa-instagram"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	} else return <div className="my-5 text-center lead">Loading...</div>;
};

export default Article;
