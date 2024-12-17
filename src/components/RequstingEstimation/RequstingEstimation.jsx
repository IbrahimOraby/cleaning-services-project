import React from 'react'
import "./RequstingEstimation.css";
const RequstingEstimation = () => {
    return (
        <>
            <section className="requsting-estimate-section py-5">
                <div className="container">
                    <div className="Wrapper d-flex flex-column flex-lg-row">
                        {/* <!-- Content Section --> */}
                        <div className="content w-100 px-lg-5 mb-4 mb-lg-0">
                            <h1 className="header fw-bold">Our Goal is to Wow With Every Clean</h1>
                            <p className="fw-bold fs-5 py-3">
                                There are many variations of passages of lorem ispum available,
                                but the majority have suffered alteration in some form
                            </p>
                            <p className="regular-paragraph py-2 fs-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quisquam praesentium ratione, cupiditate
                                repudiandae repellendus amet laborum quasi, cumque illum, nobis odit consequatur! Ipsa et, accusantium
                                nesciunt maxime veritatis amet.
                            </p>
                            <div className="list mt-4">
                                <ul className="list-unstyled">
                                    <li className="mb-2 py-1">
                                        <h2 className="sub-heading"><i className="fa-solid fa-check me-2 p-2"></i> Customer Foucsed Reviews</h2>
                                        <p className="p-2 px-5 mx-3 regular-paragraph">Lorem ipsum dolor sit,
                                            amet consectetur adipisicing elit.
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        </p>
                                    </li>
                                    <li className="mb-2 py-1">
                                        <h2 className="sub-heading"><i className="fa-solid fa-check me-2 p-2"></i> We Are Committed</h2>
                                        <p className="p-2 px-5 mx-3 regular-paragraph">Lorem ipsum dolor sit,
                                            amet consectetur adipisicing elit.
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        </p>
                                    </li>
                                    <li className="mb-2 py-1">
                                        <h2 className="sub-heading"><i className="fa-solid fa-check me-2 p-2"></i> Regular & Monthly Cleaning</h2>
                                        <p className="p-2 px-5 mx-3 regular-paragraph">Lorem ipsum dolor sit,
                                            amet consectetur adipisicing elit.
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* <!-- Form Section --> */}
                        <div className="form w-75 p-5">
                            <h1 className="text-center sub-heading mb-4">Request An Estimate</h1>
                            <form action="">
                                <div className="mb-3">
                                    <input type="text" className="form-control p-3" id="name" placeholder="Residential" required />
                                </div>
                                <div className="two-input-at-row d-flex flex-column justify-content-between">
                                    <div className="mb-3 d-flex">
                                        <input type="text" className="form-control p-3" placeholder="Property" required />
                                        <input type="text" className="form-control p-3" placeholder="-- Approx SF --" required />
                                    </div>
                                    <div className="mb-3 d-flex">
                                        <input type="text" className="form-control p-3" placeholder="-- Bedroom --" required />
                                        <input type="text" className="form-control p-3" placeholder="-- Bathroom --" required />
                                    </div>
                                    <div className="mb-3 d-flex">
                                        <input type="text" className="form-control p-3" placeholder="-- Frequency --" required />
                                        <input type="text" className="form-control p-3" placeholder=" ZIP Code" />
                                    </div>
                                    <div className="mb-3 d-flex">
                                        <input type="text" className="form-control p-3" placeholder="mm/dd/yyyy" />
                                        <input type="time" className="form-control p-3" />
                                    </div>
                                    <div className="mb-3 d-flex">
                                        <input type="text" className="form-control p-3" placeholder=" Name " required />
                                        <input type="number" className="form-control p-3" placeholder=" Phone " required />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <textarea name="Address" className="form-control p-3" id="address" placeholder="Address"></textarea>
                                </div>
                                <div className="d-flex Quote p-2 justify-content-center">
                                    <a href="#" className="btn d-flex align-items-center fw-bold mx-3"> Book Now <i
                                        className="fa-solid fa-chevron-right p-2 "></i></a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RequstingEstimation;