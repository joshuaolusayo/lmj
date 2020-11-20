import React from "react";

const Article = () => {
	return (
		<div className="container-fluid article px-0">
			<div
				className="banner"
				style={{ background: `linear-gradient(rgba(0,0,0.2), rgba(0,0,0,0.2)), url('/images/lmj013.jpg') 15% 30%` }}
			>
				<div className="container d-flex flex-column justify-content-center align-items-center h-100 text-light">
					<span className="text-uppercase mb-3">Politics</span>
					<h3 className="font-weight-bold">This is the heading</h3>
					<span className="mt-2">
						<i className="fa fa-clock-o"></i> November 13, 2020
					</span>
				</div>
			</div>

			<div className="container mt-5 mb-8 px-2 px-sm-auto">
				<div className="row no-gutters">
					<div className="w-100">
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat omnis porro, quam suscipit nobis minus ipsum
							tenetur excepturi officiis impedit eum, molestias numquam, odit voluptatem magnam voluptatum. Dignissimos ipsum,
							quae eum sapiente eius corrupti necessitatibus velit labore praesentium quam dolorem ea illum asperiores fugit
							obcaecati consectetur enim laborum veniam alias.
						</p>
						<div className="my-5">
							<h4 className="font-weight-bold">Subheading</h4>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae odio tempora perspiciatis sed eius,
								veritatis vero fuga id autem culpa natus ex error maiores pariatur ad ratione enim velit ipsum quasi animi
								mollitia dolor. Sapiente nihil error fugit numquam.
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, obcaecati. Voluptas sit soluta nam excepturi
								quae quasi accusamus pariatur inventore eum nobis, placeat repellat eius tenetur voluptatum, qui tempore!
								Inventore sit dignissimos, beatae harum, labore corporis deleniti voluptatem totam ducimus magnam excepturi
								culpa porro, ut corrupti consequuntur placeat odit provident nisi ea fugiat officia. Quis eaque quod aperiam
								vero eos aliquid provident magni exercitationem odio, aliquam perferendis molestias cupiditate maiores.
							</p>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores commodi earum officia fuga ea molestiae,
								non ipsam temporibus consequuntur velit. Doloribus, ad impedit. Facere eum dolores ipsum est saepe eos
								veritatis! Nihil quidem quibusdam esse fugiat vel asperiores tempora dolorem, ratione doloremque distinctio,
								incidunt a inventore velit maiores ullam corrupti est.
							</p>
						</div>

						<div className="my-5">
							<h4 className="font-weight-bold">Another subheading</h4>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae odio tempora perspiciatis sed eius,
								veritatis vero fuga id autem culpa natus ex error maiores pariatur ad ratione enim velit ipsum quasi animi
								mollitia dolor. Sapiente nihil error fugit numquam.
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, obcaecati. Voluptas sit soluta nam excepturi
								quae quasi accusamus pariatur inventore eum nobis, placeat repellat eius tenetur voluptatum, qui tempore!
								Inventore sit dignissimos, beatae harum, labore corporis deleniti voluptatem totam ducimus magnam excepturi
								culpa porro, ut corrupti consequuntur placeat odit provident nisi ea fugiat officia. Quis eaque quod aperiam
								vero eos aliquid provident magni exercitationem odio, aliquam perferendis molestias cupiditate maiores.
							</p>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores commodi earum officia fuga ea molestiae,
								non ipsam temporibus consequuntur velit. Doloribus, ad impedit. Facere eum dolores ipsum est saepe eos
								veritatis! Nihil quidem quibusdam esse fugiat vel asperiores tempora dolorem, ratione doloremque distinctio,
								incidunt a inventore velit maiores ullam corrupti est.
							</p>
						</div>

						<div className="mt-5 d-flex flex-column justify-content-center align-items-center share">
							<h4 className="mb-3">Share this post</h4>
							<div>
								<a href="javascript;;" className="d-inline-block rounded-circle bg-primary text-center mx-2 btn-outline-secondary">
									<i className="fa fa-facebook"></i>
								</a>
								<a href="javascript;;" className="d-inline-block rounded-circle bg-primary text-center mx-2 btn-outline-secondary">
									<i className="fa fa-twitter"></i>
								</a>
								<a href="javascript;;" className="d-inline-block rounded-circle bg-primary text-center mx-2 btn-outline-secondary">
									<i className="fa fa-linkedin"></i>
								</a>
								<a href="javascript;;" className="d-inline-block rounded-circle bg-primary text-center mx-2 btn-outline-secondary">
									<i className="fa fa-instagram"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Article;
