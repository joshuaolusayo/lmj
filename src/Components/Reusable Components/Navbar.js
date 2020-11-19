import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<header className="container-fluid px-0 shadow bg-transparent navbar">
			<nav className="container navbar navbar-expand-sm navbar-light p-0 justify-content-between align-items-center">
				<Link className="navbar-brand font-weight-bold text-primary" to="/">
					<img className="logo" src="/images/logo-white-bg.jpeg" alt="LMJ logo" />
				</Link>
				<button
					className="navbar-toggler d-lg-none"
					type="button"
					data-toggle="collapse"
					data-target="#collapsibleNavId"
					aria-controls="collapsibleNavId"
					aria-expanded="false"
					aria-label="Toggle navigation"
				></button>
				<div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
					<ul className="navbar-nav mr-auto mr-md-0">
						<li className="nav-item">
							<Link className="nav-link text-dark d-inline-block p-4" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link text-dark d-inline-block p-4" to="/about">
								About
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link text-dark d-inline-block p-4" to="/blog">
								Blog
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link text-dark d-inline-block p-4" to="/">
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default NavBar;
