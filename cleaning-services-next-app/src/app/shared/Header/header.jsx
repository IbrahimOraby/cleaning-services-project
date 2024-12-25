"use client";
import React from "react";
import logo from "../../assets/images/logo-dark.png";
import "../../assets/styles/home.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
	const pathname = usePathname();
	return (
		<>
			<div className="bg-main text-white d-none d-md-flex">
				<div className="container d-flex justify-content-between align-items-center">
					<div className="">
						<Link href={"#"}>
							<i className="p-1 text-white fa-brands fa-facebook-f"></i>
						</Link>
						<Link href={"#"}>
							<i className="p-1 text-white fa-brands fa-twitter"></i>
						</Link>
						<Link href={"#"}>
							<i className="p-1 text-white fa-brands fa-google-plus-g"></i>
						</Link>
						<Link href={"#"}>
							<i className="p-1 text-white fa-brands fa-pinterest"></i>
						</Link>
						<Link href={"#"}>
							<i className="p-1 text-white fa-brands fa-snapchat"></i>
						</Link>
						<span className="m-3">
							{" "}
							<i className="text-white p-1 fa-regular fa-clock"></i> Mon - Fri:
							09.00am - 10.00pm{" "}
						</span>
					</div>
					<Link
						href={"#"}
						className="Quote btn d-flex align-items-center fw-bold"
					>
						<i className="p-2 fa-solid fa-bell"></i> Get A Quote
					</Link>
				</div>
			</div>

			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container">
					<Link className="navbar-brand" href={"/"}>
						<Image
							src={logo}
							alt="Logo"
							className="d-inline-block align-text-top"
						/>
					</Link>

					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div
						className="collapse navbar-collapse justify-content-center text-center"
						id="navbarNav"
					>
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link
									href="/"
									className={`nav-link main-color ${
										pathname === "/" ? "active" : ""
									}`}
								>
									Home
								</Link>
							</li>
							<li className="main-color  nav-item">
								<Link
									href="about"
									className={`nav-link main-color ${
										pathname === "about" ? "active" : ""
									}`}
								>
									About
								</Link>
							</li>
							<li className="main-color  nav-item">
								<Link
									href="services"
									className={`nav-link main-color ${
										pathname === "services" ? "active" : ""
									}`}
								>
									Services
								</Link>
							</li>
							<li className="main-color  nav-item">
								<Link
									href="blog"
									className={`nav-link main-color ${
										pathname === "blog" ? "active" : ""
									}`}
								>
									Blog
								</Link>
							</li>
							<li className="main-color  nav-item">
								<Link
									href="contact"
									className={`nav-link main-color ${
										pathname === "contact" ? "active" : ""
									}`}
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					<div className="d-none d-lg-flex align-items-center">
						<div className="me-2">
							<i className="fs-3 fa-solid fa-phone"></i>
						</div>

						<div className="d-flex flex-column">
							<span className="me-2">Quick Contact:</span>
							<span className="fw-bold">+985 8844 000</span>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}
