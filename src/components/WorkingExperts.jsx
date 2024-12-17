import React from "react";
import figure_working_experts from "../assets/images/figure1.png";
import bubble_working_experts  from "../assets/images/bubble1.png";
import teamOne from "../assets/images/team1.png"

import SectionTitle from "./SectionTitle";
function WorkingExperts() {
  return (
    <>
      <section className="working_experts position-relative py-5">
        <div className="container">
          <SectionTitle
            imgSrc={figure_working_experts}
            title="Our Working Experts"
            wrapper="working_experts"
            colorHeading="heading_primary_blue"
            colorParagraph="regular-paragraph"
          />
          <div className="row mt-5 mb-5">
            {/*Column One */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="card border-0 d-flex align-items-center position-relative">
                <div className="bubble_img w-100 d-none d-lg-block position-absolute">
                  <img
                    className="bubble position-absolute h-100"
                    src={bubble_working_experts}
                    alt="bubble1.png"
                  />
                </div>
                <div className="working_experts_image overflow-hidden position-relative rounded-circle">
                  <img
                    className="image w-100 h-100 position-absolute z-1"
                    src={teamOne}
                    alt="latestBlogImg"
                  />
                </div>
              </div>
              <div className="card-body text-center p-0">
                <h3 className="fw-bold mt-5 heading_primary_blue">
                  Richard Powel
                </h3>
                <span className="regular-paragraph mt-3">Office Cleaner</span>

                <ul className="working_experts_social list-unstyled d-flex align-items-center justify-content-center my-3">
                  <li className="mx-2 rounded-circle d-flex justify-content-center align-items-center">
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="mx-2 rounded-circle d-flex justify-content-center align-items-center">
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li className="mx-2 rounded-circle d-flex justify-content-center align-items-center">
                    <a href="#">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="mx-2 rounded-circle d-flex justify-content-center align-items-center">
                    <a href="#">
                      <i className="fa-brands fa-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/*Column Two */}
            <div className="col-12 col-sm-6 col-lg-4 mt-sm-0 mt-4">
              <div className="card border-0 d-flex align-items-center position-relative">
                <div className="bubble_img w-100 d-none d-lg-block position-absolute">
                  <img
                    className="bubble position-absolute h-100"
                    src={bubble_working_experts}
                    alt="bubble1.png"
                  />
                </div>
                <div className="working_experts_image overflow-hidden position-relative rounded-circle">
                  <img
                    className="image w-100 h-100 position-absolute z-1"
                    src={teamOne}
                    alt="latestBlogImg"
                  />
                </div>
              </div>
              <div className="card-body text-center p-0">
                <h3 className="fw-bold mt-5 heading_primary_blue">
                  Merry Patel
                </h3>
                <span className="regular-paragraph mt-3">Kitchen Cleaner</span>

                <ul className="working_experts_social list-unstyled d-flex align-items-center justify-content-center my-3">
                  <li className="mx-2 rounded-circle d-flex justify-content-center align-items-center">
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="mx-2 rounded-circle d-flex justify-content-center align-items-center">
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li className="mx-2 rounded-circle d-flex justify-content-center align-items-center">
                    <a href="#">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="mx-2 rounded-circle d-flex justify-content-center align-items-center">
                    <a href="#">
                      <i className="fa-brands fa-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/*Column Three */}

            <div className="col-12 col-sm-6 col-lg-4 mt-lg-0 mt-4">
              <div className="card border-0 d-flex align-items-center position-relative">
                <div className="bubble_img d-none d-lg-block w-100 position-absolute">
                  <img
                    className="bubble position-absolute h-100"
                    src={bubble_working_experts}
                    alt="bubble1.png"
                  />
                </div>
                <div className="working_experts_image overflow-hidden position-relative rounded-circle">
                  <img
                    className="image w-100 h-100 position-absolute z-1"
                    src={teamOne}
                    alt="latestBlogImg"
                  />
                </div>
              </div>
              <div className="card-body text-center p-0">
                <h3 className="fw-bold mt-5 heading_primary_blue">
                  Johnson Jack
                </h3>
                <span className="regular-paragraph mt-3">Floor Cleaner</span>

                <ul className="working_experts_social list-unstyled d-flex align-items-center justify-content-center my-3">
                  <li className="mx-2 rounded-circle d-flex justify-content-center align-items-center">
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="mx-2 rounded-circle d-flex justify-content-center align-items-center">
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li className="mx-2 rounded-circle d-flex justify-content-center align-items-center">
                    <a href="#">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="mx-2 rounded-circle d-flex justify-content-center align-items-center">
                    <a href="#">
                      <i className="fa-brands fa-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WorkingExperts;
