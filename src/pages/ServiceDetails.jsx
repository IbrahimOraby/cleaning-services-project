import React from "react";
import { Link } from "react-router";
import "../assets/styles/service-details.css";
import blogHeaderPic from "../assets/images/kitchen-1.jpg";
import experiencePic from "../assets/images/service-1.jpg";
import adPic from "../assets/images/read-more.webp";

export default function ServiceDetails() {
	return (
		<>
			{/* <!-- banner --> */}
			<header className="head-banner text-center py-5">
				<div className="container py-5">
					<h1 className="pb-3 head-banner-header">Kitchen Cleaning Service</h1>
					<div className="pb-3">
						<span className="head-banner-breadcrumb">
							<Link to="/">Home</Link>
						</span>
						<span>
							<i className="fa fa-angle-double-right"> </i>
						</span>
						<span className="head-banner-breadcrumb">
							<Link to="../services">Services</Link>
						</span>
						<span>
							<i className="fa fa-angle-double-right"> </i>
						</span>
						<span className="head-banner-breadcrumb__current">
							<Link to="../services/service-details">Kitchen Cleaning</Link>
						</span>
					</div>
				</div>
			</header>

			{/* <!-- main-content --> */}
			<main className="main-content ">
				<div className="container py-5">
					<div className="row">
						{/* <!-- left-panel-content --> */}
						<div className="col-lg-8">
							{/* <!-- service details post --> */}
							<section className="service-details-post">
								<img
									src={blogHeaderPic}
									alt="blog-header-picture"
									className="service-details-img mb-4 rounded-2 img-fluid"
								/>
								<h2 className="mb-4 service-details-post-title sub-heading">
									Kitchen Cleaning Service
								</h2>
								<p>
									Ahen an unknown printer took a galley of type and scrambled it
									to make a type specimen book arelt hasear survived not only
									five centuries, but also the leap into electronic typesetting,
									remaining essential yellow aw unchangedh the release of
									Letraset sheets containing and more recently with desktop.Ahen
									an unknown printer took a galley of type and scrambled it to
									make a type.
								</p>
								<div className="row py-4">
									<div className="col-lg-6 d-flex flex-row gap-4 mb-4 mb-lg-0">
										<span>
											{" "}
											<i className="fa fa-check"></i>
										</span>
										<span>
											<h5 className="mb-4">Quality We Ensure</h5>
											<p>
												Aorem ipsum dolor sit amet consectetur adipiscing elit
												sed doeiusmod tempor incididunt ut labore et dolore.
											</p>
										</span>
									</div>
									<div className="col-lg-6 d-flex flex-row gap-4">
										<span>
											{" "}
											<i className="fa fa-check"></i>
										</span>
										<span>
											<h5 className="mb-4">Experienced Workers</h5>
											<p>
												Aorem ipsum dolor sit amet consectetur adipiscing elit
												sed doeiusmod tempor incididunt ut labore et dolore.
											</p>
										</span>
									</div>
								</div>
								<p className="pb-5">
									Ahen an unknown printer took a galley of type and scrambled it
									to make a type specimen book arelt hasear survived not only
									five centuries, but also the leap into electronic typesetting,
									remaining essentiall yellow aw unchangedh the release o type.
									Ahen an unknown printer took a galley of type and scrambled it
									to make a type specimen book arelt hasear survived not only
									five centuries.
								</p>
							</section>
							<section>
								{/* <!-- experienced people --> */}
								<div className="row">
									<div className="col-lg-6">
										<img
											src={experiencePic}
											alt="experience-picture"
											className="img-fluid rounded-2 mb-4 mb-lg-0"
										/>
									</div>
									<div className="col-lg-6">
										<h4 className="pb-4">
											Experienced People can help you more
										</h4>
										<p className="pb-4">
											Ahen an unknown printer took a galley of type andty
											scrambled it to make a type specimen book arelter hasear
											survived not only five centuries, but also the leap into
											electronic type.
										</p>
										<ul className="experience-service-list list-group">
											<li className="pb-3">
												<i className="fas fa-check pe-2"></i>
												<span>Gas Silendar Clean</span>
											</li>
											<li className="pb-3">
												<i className="fas fa-check pe-2"></i>
												<span>Frozen Pipe Clean</span>
											</li>
											<li className="pb-3">
												<i className="fas fa-check pe-2"></i>
												<span>Water Pipe Clean</span>
											</li>
											<li className="pb-3">
												<i className="fas fa-check pe-2"></i>
												<span>Toilet Clean</span>
											</li>
											<li className="pb-3">
												<i className="fas fa-check pe-2"></i>
												<span>Toilet Clean</span>
											</li>
										</ul>
									</div>
								</div>
							</section>
							{/* <!-- service information --> */}
							<section className="service-info p-5 my-5 rounded-2 row mx-1 mx-sm-0">
								<h5 className="col-12 heading-border-inline-start ps-3 mb-4">
									Service Information
								</h5>
								<div className="col-12 row service-info-row">
									<div className="col-lg-4 col-md-6 col-12 d-flex flex-column p-4">
										<span className="mb-2">Price :</span>
										<span>$150.00</span>
									</div>
									<div className="col-lg-4 col-md-6 col-12 d-flex flex-column p-4">
										<span className="mb-2">Cleaning Hours :</span>
										<span>1-3 Hours</span>
									</div>
									<div className="col-lg-4 col-md-6 col-12 d-flex flex-column p-4">
										<span className="mb-2">Number of Cleaners :</span>
										<span>02 Cleaner</span>
									</div>
									<div className="col-lg-4 col-md-6 col-12 d-flex flex-column p-4">
										<span className="mb-2">Visiting Hours :</span>
										<span>09.00am - 06.00pm</span>
									</div>
									<div className="col-lg-4 col-md-6 col-12 d-flex flex-column p-4">
										<span className="mb-2">Contact :</span>
										<span>+88 9504200</span>
									</div>
									<div className="col-lg-4 col-md-6 col-12 d-flex flex-column p-4">
										<span className="mb-2">E-mail :</span>
										<span>info@clenix.com</span>
									</div>
								</div>
							</section>

							{/* <!-- FAQ --> */}
							<section className="faq mb-lg-0 mb-5">
								<h5 className="faq-title mb-4">Frequently Asked Questions</h5>
								<p>
									Ahen an unknown printer took a galley of type and scrambled it
									to make a type specimen book arelt hasear survived not only
									five centuries, but also the leap into electronic typesetting,
									remaining essentiall yellow aw unchangedh the release o
									type.Ahen an unknown printer took a galley of type scram.
								</p>
								{/* <!-- custom-accordion --> */}
								<div
									className="custom-accordion mt-4"
									id="custom-accordionExample"
								>
									<div className="custom-accordion-item">
										<h6 className="custom-accordion-header">
											<button
												className="custom-accordion-button rounded-2"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseOne"
												aria-expanded="true"
												aria-controls="collapseOne"
											>
												<i className="fa-solid fa-angle-right"></i>
												<i className="fa-solid fa-angle-down"></i>
												Modern Equipment We Use
											</button>
										</h6>
										<div
											id="collapseOne"
											className="custom-accordion-collapse collapse show"
											data-bs-parent="#custom-accordionExample"
										>
											<div className="custom-accordion-body">
												<p>
													Ahen an unknown printer took a galley of type and
													scrambled it to make a type specimen book arelt hasear
													survived not only five centuries, but also the leap
													into electronic typesetting, remaining essentiall
													yellow aw unchangedh.
												</p>
											</div>
										</div>
									</div>
									<div className="custom-accordion-item">
										<h6 className="custom-accordion-header">
											<button
												className="custom-accordion-button rounded-2 collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseTwo"
												aria-expanded="false"
												aria-controls="collapseTwo"
											>
												<i className="fa-solid fa-angle-right"></i>
												<i className="fa-solid fa-angle-down"></i>
												Qualified Workers
											</button>
										</h6>
										<div
											id="collapseTwo"
											className="custom-accordion-collapse collapse"
											data-bs-parent="#custom-accordionExample"
										>
											<div className="custom-accordion-body">
												<p>
													Ahen an unknown printer took a galley of type and
													scrambled it to make a type specimen book arelt hasear
													survived not only five centuries, but also the leap
													into electronic typesetting, remaining essentiall
													yellow aw unchangedh.
												</p>
											</div>
										</div>
									</div>
									<div className="custom-accordion-item">
										<h6 className="custom-accordion-header">
											<button
												className="custom-accordion-button rounded-2 collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseThree"
												aria-expanded="false"
												aria-controls="collapseThree"
											>
												<i className="fa-solid fa-angle-right"></i>
												<i className="fa-solid fa-angle-down"></i>
												Modern Equipment We Use
											</button>
										</h6>
										<div
											id="collapseThree"
											className="custom-accordion-collapse collapse"
											data-bs-parent="#custom-accordionExample"
										>
											<div className="custom-accordion-body">
												<p>
													Ahen an unknown printer took a galley of type and
													scrambled it to make a type specimen book arelt hasear
													survived not only five centuries, but also the leap
													into electronic typesetting, remaining essentiall
													yellow aw unchangedh.
												</p>
											</div>
										</div>
									</div>
									<div className="custom-accordion-item">
										<h6 className="custom-accordion-header">
											<button
												className="custom-accordion-button rounded-2 collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseFour"
												aria-expanded="false"
												aria-controls="collapseFour"
											>
												<i className="fa-solid fa-angle-right"></i>
												<i className="fa-solid fa-angle-down"></i>
												Modern Equipment We Use
											</button>
										</h6>
										<div
											id="collapseFour"
											className="custom-accordion-collapse collapse"
											data-bs-parent="#custom-accordionExample"
										>
											<div className="custom-accordion-body">
												<p>
													Ahen an unknown printer took a galley of type and
													scrambled it to make a type specimen book arelt hasear
													survived not only five centuries, but also the leap
													into electronic typesetting, remaining essentiall
													yellow aw unchangedh.
												</p>
											</div>
										</div>
									</div>
									<div className="custom-accordion-item">
										<h6 className="custom-accordion-header">
											<button
												className="custom-accordion-button rounded-2 collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseFive"
												aria-expanded="false"
												aria-controls="collapseFive"
											>
												<i className="fa-solid fa-angle-right"></i>
												<i className="fa-solid fa-angle-down"></i>
												Modern Equipment We Use
											</button>
										</h6>
										<div
											id="collapseFive"
											className="custom-accordion-collapse collapse"
											data-bs-parent="#custom-accordionExample"
										>
											<div className="custom-accordion-body">
												<p>
													Ahen an unknown printer took a galley of type and
													scrambled it to make a type specimen book arelt hasear
													survived not only five centuries, but also the leap
													into electronic typesetting, remaining essentiall
													yellow aw unchangedh.
												</p>
											</div>
										</div>
									</div>
								</div>
							</section>
						</div>
						{/* <!-- right-panel -->
					<!-- aside --> */}
						<div className="col-lg-4">
							<aside>
								{/* <!-- categories --> */}
								<div className="categories-card aside-card p-5 mb-5 rounded-2">
									<h5 className="aside-card-title heading-border-inline-start ps-3 mb-4">
										Categories
									</h5>
									<ul className="aside-card-list list-group">
										<li className="p-3 rounded-1 d-flex">
											<span>
												<i className="fa-solid fa-angle-right"></i>
											</span>
											<span>
												<p>Office Cleaning</p>
											</span>
										</li>
										<li className="p-3 rounded-1 d-flex">
											<span>
												{" "}
												<i className="fa-solid fa-angle-right"></i>{" "}
											</span>
											<span>
												<p>Kitchen Cleaning</p>
											</span>
										</li>
										<li className="p-3 rounded-1 d-flex">
											<span>
												<i className="fa-solid fa-angle-right"></i>
											</span>
											<span>
												<p>Bathroom Cleaning</p>
											</span>
										</li>
										<li className="p-3 rounded-1 d-flex">
											<span>
												<i className="fa-solid fa-angle-right"></i>
											</span>
											<span>
												<p>Window Cleaning</p>
											</span>
										</li>
										<li className="p-3 rounded-1 d-flex">
											<span>
												<i className="fa-solid fa-angle-right"></i>
											</span>
											<span>
												<p>Bedroom Cleaning</p>
											</span>
										</li>
										<li className="p-3 rounded-1 d-flex">
											<span>
												<i className="fa-solid fa-angle-right"></i>
											</span>
											<span>
												<p>Car Wash</p>
											</span>
										</li>
										<li className="p-3 rounded-1 d-flex">
											<span>
												<i className="fa-solid fa-angle-right"></i>
											</span>
											<span>
												<p>Carpet Cleaning</p>
											</span>
										</li>
										<li className="p-3 rounded-1 d-flex">
											<span>
												<i className="fa-solid fa-angle-right"></i>
											</span>
											<span>
												<p>Floor Cleaning</p>
											</span>
										</li>
									</ul>
								</div>

								{/* <!-- download --> */}
								<div className="download-card aside-card p-5 mb-5 rounded-2">
									<h5 className="aside-card-title heading-border-inline-start ps-3 mb-4">
										Download Now
									</h5>
									<ul className="aside-card-list list-group">
										<li className="p-3 rounded-1 d-flex">
											<span>
												<i className="fa-solid fa-file-pdf"></i>
											</span>
											<span>
												<p>Download Pdf file</p>
											</span>
										</li>
										<li className="p-3 rounded-1 d-flex">
											<span>
												<i className="fa-solid fa-file-word"></i>
											</span>
											<span>
												<p>Download Doc file</p>
											</span>
										</li>
										<li className="p-3 rounded-1 d-flex">
											<span>
												<i className="fa-brands fa-youtube"></i>
											</span>
											<span>
												<p>Video Download</p>
											</span>
										</li>
									</ul>
								</div>

								{/* <!-- questions form --> */}
								<div className="questions-form-card aside-card p-5 mb-5 rounded-2">
									<h5 className="aside-card-title heading-border-inline-start ps-3 mb-4">
										Have You Any Questions?
									</h5>
									<form className="d-flex flex-column">
										<div className="questions-form-input">
											{/* <i className="fa-solid fa-user"></i>  */}
											<input
												type="text"
												name="name"
												placeholder="Name"
												className="questions-form-control rounded-1"
											/>
										</div>

										<div className="questions-form-input">
											{/*  <i className="fa-regular fa-envelope"></i>  */}
											<input
												type="email"
												name="email-address"
												placeholder="E-mail Address"
												className="questions-form-control rounded-1"
											/>
										</div>

										<div className="questions-form-input">
											{/*  <i className="fa-solid fa-phone"></i> */}
											<input
												type="text"
												name="phone"
												placeholder="Phone"
												className="questions-form-control rounded-1"
											/>
										</div>

										<div className="questions-form-input">
											{/*  <i className="fa-solid fa-question"></i>  */}
											<input
												type="text"
												name="subject"
												placeholder="Subject"
												className="questions-form-control rounded-1"
											/>
										</div>

										<div className="questions-form-input d-flex">
											{/* <i className="fa-regular fa-comments"></i>  */}
											<textarea
												type="text"
												name="address"
												placeholder="Address"
												className="questions-form-control rounded-1"
											></textarea>
										</div>
										<button className="yellow-btn fw-medium" type="submit">
											Send Message
										</button>
									</form>
								</div>

								{/* <!-- discount ad --> */}
								<div className="discount-ad d-flex flex-column">
									<img src={adPic} alt="ad-picture" className="rounded-top-2" />
									<div className="offer-section d-flex flex-column align-items-center px-5 pt-2 pb-5 rounded-bottom-2">
										<h3 className="offer-section-title d-flex flex-column mb-4">
											<span className="offer-discount">
												<strong>30</strong>% Discount
											</span>
											<span className="offer-duration">
												Promotion Offer 16 Days
											</span>
										</h3>
										<button className="yellow-btn fw-medium contact-us-btn">
											Contact With Us
										</button>
									</div>
								</div>
							</aside>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
