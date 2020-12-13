import React from "react";
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton } from "react-share";

const ShareArticle = ({ tag, title, img, intro }) => {
	const param = {
		url: window.location.href, // to share current page
		title: "Steadylearner Website",
		shareImage: { img },
		size: "14px",
	};

	return (
		<div className="mt-5 d-flex flex-column justify-content-center align-items-center share">
			<h4 className="mb-3">Share this post</h4>
			<div>
				<FacebookShareButton url={param.url} quote={title} hashtag={tag}>
					<div className="d-inline-block rounded-circle bg-primary text-center mx-2 btn-outline-secondary link">
						<i className="fa fa-facebook text-light"></i>
					</div>
				</FacebookShareButton>
				<TwitterShareButton url={param.url} title={title}>
					<div className="d-inline-block rounded-circle bg-primary text-center mx-2 btn-outline-secondary link">
						<i className="fa fa-twitter text-light"></i>
					</div>
				</TwitterShareButton>
				<LinkedinShareButton url={param.url} title={title} summary={intro} source={param.url}>
					<div className="d-inline-block rounded-circle bg-primary text-center mx-2 btn-outline-secondary link">
						<i className="fa fa-linkedin text-light"></i>
					</div>
				</LinkedinShareButton>
				<WhatsappShareButton url={param.url} title={title}>
					<div className="d-inline-block rounded-circle bg-primary text-center mx-2 btn-outline-secondary link">
						<i className="fa fa-whatsapp text-light"></i>
					</div>
				</WhatsappShareButton>
			</div>
		</div>
	);
};

export default ShareArticle;
