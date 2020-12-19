import React, { useEffect } from "react";
import AOS from "aos";

const AboutLMJ = () => {
	useEffect(() => {
		AOS.init({ duration: 500, once: true });
	});

	return (
		<div className="container-fluid px-0 overflow-x-hidden">
			<div className="bg-primary meet">
				<h1 className="text-center font-weight-bold text-light mb-0 py-5">Meet LMJ</h1>
			</div>
			<div className="container z-1">
				<img data-aos="zoom-in" className="coverImg mb-3" src="/images/lmj003.JPG" alt="LMJ at office" loading="lazy" />
				<p data-aos="fade-right">
					Olamijuwonlo is an astute business professional highly skilled in strategic planning, establishing priorities,
					delegating tasks, and motivating teams. He is a visionary leader with strong persuasive instincts and extensive
					knowledge of local and international politics. He is not only motivated, versatile, and organized with strong work
					ethics, but also a social influencer passionate about the plight of the common people of the society.
				</p>
				<p data-aos="fade-right">
					As a committed patriot, he has embarked on the mission of transforming lives by being a pacesetter and philanthropist
					who is conscious of the education of this generation. He believes education can be a strong leverage for anyone who
					desires to make a change and contribute meaningfully to the progress and development of their local community and the
					nation at large.
				</p>

				<div className="row align-items-center my-5 my-lg-6">
					<div className="col-lg-8">
						<h2 className="font-weight-bold">Background</h2>
						<p data-aos="fade-right">
							<span className="font-weight-bold">Olamijuwonlo Alao-Akala</span> hails from Ogbomoso, a city in Oyo state. He
							was born on the 9th of September into the family of His Excellency, Otunba Christopher Adebayo Alao-Akala, the
							former executive governor of Oyo state.
						</p>
						<p data-aos="fade-right">
							At a young age, he developed an interest in activities like reading, participation in seminars and developmental
							programs or workshops, Golf, Basketball, Swimming, and Research. He was able to manage all these activities
							while still in school. He was able to learn how to multitask efficiently from a young age.
						</p>
					</div>
					<div className="col-lg-4 d-flex justify-content-center align-items-center d-b4">
						<img data-aos="zoom-in"
							className="rounded-circle abtImg d-block mx-auto"
							src="/images/lmj-with-siblings-1.jpeg"
							alt="LMJ with siblings"
							loading="lazy"
						/>
					</div>
				</div>

				<div className="row align-items-center my-5 my-lg-6">
					<div className="col-lg-8">
						<h2 className="font-weight-bold">Education</h2>
						<p data-aos="fade-right">
							He started his elementary education at the age of 4 at the St Mary Private School, Lagos Island. He proceeded to
							Federal Government College, Ogbomoso for his junior secondary school. He later proceeded to Rainbow College,
							Surulere, Lagos State for his secondary school leaving certificate in 2001. He enrolled in Covenant University
							where he studied Computer Engineering. Due to his curiosity to be a problem solver, he enrolled in Lead City
							University, Ibadan, Oyo state to study Computer & Information Sciences where he bagged his Bachelor of Science
							degree.
						</p>
						<p data-aos="fade-right">
							He later proceeded to the University of Buckingham, the United Kingdom for his master's degree where he studied
							Service Management. This helped to prepare him for Service Marketing, Operations, Leadership, Finances, and
							Project Management. He bagged his master's degree in 2011.
						</p>
						<p data-aos="fade-right">He emerged as the winner in the Automotive Sector Simulation at Buckingham Business School, London in 2010.</p>
					</div>
					<div className="col-lg-4 d-flex justify-content-center align-items-center">
						<img data-aos="zoom-in" className="rounded-circle abtImg d-block mx-auto" src="/images/lmj005.JPG" alt="LMJ" loading="lazy" />
					</div>
				</div>

				<div className="row align-items-center my-5 my-lg-6">
					<div className="col-lg-8">
						<h2 className="font-weight-bold">Marital life</h2>
						<p data-aos="fade-right">
							He was engaged to Hadiza Okoya, the daughter of the foremost industrialist Chief Rasaq Akanni Okoya who is also
							the Aare of Lagos and the founder and chaiman of Eleganza group of companies. The engagement culminated into
							marriage as Olamijuwonlo finally tied the knot with Mrs Hadiza Alao-Akala (nee Okoya) on April 20, 2014.
						</p>
					</div>
					<div className="col-lg-4 d-flex justify-content-center align-items-center d-b4">
						<img data-aos="zoom-in"
							className="rounded-circle abtImg d-block mx-auto"
							src="/images/lmj-wife.jpg"
							alt="LMJ with his wife"
							loading="lazy"
						/>
					</div>
				</div>

				<div className="row align-items-center my-5 my-lg-6" id="business">
					<div className="col-lg-8">
						<h2 className="font-weight-bold">Business Career</h2>
						<p data-aos="fade-right">
							He made his entry into the business world in 2011 when he was appointed as the Business Development Executive at
							Tulcan Energy Resources Limited, Victoria Island, Lagos state.
						</p>
						<p data-aos="fade-right">
							Due to his experiences and training, he is currently the Chairman of Parrot FM Radio Station, Ogbomoso, Oyo
							State. He is also the Chief Executive Officer of TDB Global Venture whose headquarters is located in Ikoyi,
							Lagos State.
						</p>
						<p data-aos="fade-right">
							He loves farming and investing in Agriculture generally. He has farmlands where he practices crop production,
							livestock rearing, and Agro real estate{" "}
							<a className="text-primary" href="//umera.ng" target="_blank" rel="noreferrer">
								Agro real estate
							</a>
							.
						</p>
					</div>
					<div className="col-lg-4 d-flex justify-content-center align-items-center">
						<img data-aos="zoom-in"
							className="rounded-circle abtImg d-block mx-auto"
							src="/images/lmj004.JPG"
							alt="LMJ at office"
							loading="lazy"
						/>
					</div>
				</div>

				<div className="row align-items-center my-5 my-lg-6" id="politics">
					<div className="col-lg-8">
						<h2 className="font-weight-bold">Political Career</h2>
						<p data-aos="fade-right">
							As a youth with a passion to see a change in the ways things are handled in the political sector, Olamijuwonlo
							dived into politics in order to take responsibility and bring about the desired change in the community. His
							topmost priority is to ensure that the economy of the community is boosted and the need of the citizens
							especially the workers, pupils, and students are well taken care of.
						</p>
						<p data-aos="fade-right">
							While serving as the Executive Chairman of the Ogbomoso North Local Government, his topmost priority was the
							interest of the citizens. This was made manifested through the various structures he put in place and different
							innovative and empowerment programs he organized where a lot of citizens were trained and empowered to be their
							own boss.
						</p>
						<p data-aos="fade-right">
							Some of his achievements include the procuring of tractors, fertilizers, among other farm machines and equipment
							so as to ensure the citizens engage in activities that feed the community. His investment in the Agricultural
							sector helped to boost the availability of agricultural produce in the community which in turn helps to keep the
							economy thriving.
						</p>
					</div>
					<div className="col-lg-4 d-flex justify-content-center align-items-center d-b4">
						<img data-aos="zoom-in"
							className="rounded-circle abtImg d-block mx-auto"
							src="/images/lmj006.JPG"
							alt="LMJ political career"
							loading="lazy"
						/>
					</div>
				</div>

				<div className="row align-items-center my-5 my-lg-6" id="philanthropy">
					<div className="col-lg-8">
						<h2 className="font-weight-bold">Philanthropic Service</h2>
						<p data-aos="fade-right">
							Hon. Olamijuwonlo Alao-Akala has committed himself to help people before, during, and after his service as the
							Executive Chairman of Ogbomoso North Local Government. He strongly believes in the need to give back to society
							and invest in the upcoming generation so as to raise more responsible and mature citizens who will work together
							to ensure the progress and the development of the community.
						</p>
						<p data-aos="fade-right">
							Through his foundation, Olamijuwonlo Foundation, Hon Olamijuwonlo Alao-Akala has been able to reach out to the
							less privileged citizens, kids, and students in order to ensure they have quality education. He has also been
							able to help a few small-scale businesses with funds in order to keep their businesses growing.
						</p>
					</div>
					<div className="col-lg-4 d-flex justify-content-center align-items-center">
						<img data-aos="zoom-in"
							className="rounded-circle abtImg d-block mx-auto"
							src="/images/lmj03.jpg"
							alt="LMJ attending to people's needs"
							loading="lazy"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutLMJ;
