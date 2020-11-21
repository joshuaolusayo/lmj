import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

const NavBar = () => {
	const [show, setShow] = useState(false);
	const btn = useRef(null);

	function showTargetElement() {
		disableBodyScroll(btn);
	}

	function hideTargetElement() {
		enableBodyScroll(btn);
	}

	useEffect(() => {
		if (show) {
			showTargetElement();
		} else {
			hideTargetElement();
		}
		return () => {
			hideTargetElement();
			clearAllBodyScrollLocks();
		};
	}, [show]);
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
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse justify-content-lg-end" id="collapsibleNavId">
					<ul className="navbar-nav mr-auto mr-md-0 h-100">
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
							<Link className="nav-link text-dark d-inline-block p-4" to="/gallery">
								Gallery
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link text-dark d-inline-block p-4" to="/contact">
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
