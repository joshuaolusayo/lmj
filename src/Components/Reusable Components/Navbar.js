import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
	const [show, setShow] = useState(false);
	const btn = useRef(null);
	const location = useLocation();

	useEffect(() => {
		if (show) {
			document.querySelector("body").style.overflow = "hidden";
		} else {
			document.querySelector("body").style.overflow = "scroll";
		}

		return () => {
			document.querySelector("body").style.overflow = "scroll";
		};
	}, [show, location.pathname]);

	return (
		<header className="container-fluid px-0 shadow bg-transparent navbar">
			<nav className="container navbar navbar-expand-lg navbar-light px-2 py-0 px-lg-0 justify-content-between align-items-center">
				<Link className="navbar-brand font-weight-bold text-primary" to="/">
					<img className="logo" src="/images/logo-white-bg.jpeg" alt="LMJ logo" />
				</Link>
				<button
					className="navbar-toggler d-lg-none p-0 border-0"
					type="button"
					data-toggle="collapse"
					data-target="#collapsibleNavId"
					aria-controls="collapsibleNavId"
					aria-expanded="false"
					aria-label="Toggle navigation"
					id="button"
					ref={btn}
					onClick={() => setShow(!show)}
				>
					{!show ? <span className="navbar-toggler-icon"></span> : <span>X</span>}
				</button>
				<div className="collapse navbar-collapse justify-content-lg-end" id="collapsibleNavId">
					<ul className="navbar-nav mr-auto mr-md-0 h-100">
						<li className="nav-item">
							<Link
								className={`nav-link ${location.pathname === "/" ? "text-primary" : "text-dark"} d-inline-block p-4`}
								to="/"
							>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className={`nav-link ${location.pathname === "/about" ? "text-primary" : "text-dark"} d-inline-block p-4`}
								to="/about"
							>
								About
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className={`nav-link ${
									location.pathname === "/blog" || location.pathname === "blog-article/:heading"
										? "text-primary"
										: "text-dark"
								} d-inline-block p-4`}
								to="/blog"
							>
								Blog
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className={`nav-link ${location.pathname === "/gallery" ? "text-primary" : "text-dark"} d-inline-block p-4`}
								to="/gallery"
							>
								Gallery
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className={`nav-link ${location.pathname === "/contact" ? "text-primary" : "text-dark"} d-inline-block p-4`}
								to="/contact"
							>
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
