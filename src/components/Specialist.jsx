import React from "react";
import specialistImg from '../assets/images/specialist.jpg'
function Specialist() {
  return (
    <section class="specialist_section position-relative py-5 w-100">
      <img src={specialistImg} alt="specialists-bg" />
      <div class="container mt-5 mb-5">
        <div class="row p-0 m-0">
          <section class="col-12 col-md-6 col-lg-5 shadow-sm specialist_info bg-white py-5 px-1 text-center rounded-2">
            <h3 class="lh-base sub-heading mb-5">
              All of our Specialists <br />
              are Fully Trained
            </h3>
            <div class="stats d-flex align-items-center justify-content-center gap-5 mb-3">
              <div class="stat_card position-relative z-1">
                <h3 class="stat_number fw-bold fs-1">11</h3>
                <p class="stat-text fs-6">Project Done</p>
                <div class="stat_icon position-absolute w-100 h-100 d-flex justify-content-center align-items-center">
                  <i class="fa-regular fa-thumbs-up regular-paragraph"></i>
                </div>
              </div>
              <div class="stat_card position-relative z-1">
                <h3 class="stat_number fw-bold fs-1">142</h3>
                <p class="stat-text fs-6">Happy Clients</p>
                <div class="stat_icon position-absolute w-100 h-100 d-flex justify-content-center align-items-center opacity-25">
                  <i class="fa-regular fa-face-smile regular-paragraph"></i>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Specialist;
