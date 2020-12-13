import React, { useEffect, useState, lazy } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { fetchArticle } from "../../actions/blogActions";
import { isEmpty } from "lodash";

import componentLoader from "../Reusable Components/componentLoader";

const ShareArticle = lazy(() => componentLoader(() => import("./ShareArticle")));

const Article = (props) => {
	let params = useParams();
	const [loading, setLoading] = useState(true);
	const [prevRoute, setPrevRoute] = useState("");

	useEffect(() => {
		if (prevRoute && window.location.href !== prevRoute) {
			setLoading(true);
		}

		if (loading) {
			setPrevRoute(window.location.href);
			props.fetchArticle(params.heading).then(() => setLoading(false));
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [window.location.href, loading]);

	const article = props.article;
	return !loading && !isEmpty(article) ? (
		<HelmetProvider>
			<div className="container-fluid article px-0">
				<Helmet>
					<title>{article.heading}</title>
					<meta name="description" content={article.heading} />
					<meta name="keywords" content={`${article.heading}, ${article.tag}`} />
				</Helmet>
				<div
					className="banner"
					style={{ background: `linear-gradient(rgba(0,0,0.2), rgba(0,0,0,0.2)), url(${article.image}) 15% 0%` }}
				>
					<div className="container d-flex flex-column justify-content-center align-items-center h-100 text-light">
						<span className="text-uppercase mb-3">{article.tag}</span>
						<h3 className="font-weight-bold text-center">{article.heading}</h3>
						<span className="mt-2">
							<i className="fa fa-clock-o"></i> {article.date}
						</span>
					</div>
				</div>

				<div className="container mt-5 mb-8 px-2 px-sm-auto">
					<div className="row no-gutters">
						<div className="w-100">
							<div className="text-center mb-5">
								<q className="lead">{article.quoteStart}</q>
								<br />
								<span>- {article.quoteStartAuthor}</span>
							</div>
							<p>{article.intro}</p>
							{article.section.map((data, index) => (
								<div key={index} className="my-5">
									<h4 className="font-weight-bold">{data.heading}</h4>
									{data.para.map((paragraph, index) => (
										<p key={index}>{paragraph}</p>
									))}
								</div>
							))}
							<div className="text-center mb-5">
								<q className="lead">{article.quoteEnd}</q>
								<br />
								<span>- {article.quoteEndAuthor}</span>
							</div>

							<ShareArticle tag={article.tag} heading={article.heading} img={article.image} intro={article.intro} />
						</div>
					</div>
				</div>
			</div>
		</HelmetProvider>
	) : (
		// <div>Loaded</div>
		<div className="my-5 text-center lead">Loading...</div>
	);
};

const mapStateToProps = (state) => ({
	article: state.posts.article,
});

export default connect(mapStateToProps, { fetchArticle })(Article);
