import React from "react";

function FeedbackCard({ quote, name, role, rate, responsive }) {
  return (
    <div class={`col-12 col-sm-6 col-lg-4  ${responsive ? responsive : ""}`}>
      <div class="card rounded-0 position-relative text-center p-5">
        <span class="position-absolute quote rounded-circle p-4 fw-bold">
          <i class="fa-solid fa-quote-left"></i>
        </span>
        <div class="card-body p-0">
          <p class="regular-paragraph lh-base">{quote}</p>
          <span class="fw-bold mt-3 d-block">{name}</span>
          <span class="regular-paragraph">{role}</span>
          <ul class="rate_feedback list-unstyled d-flex justify-content-center mt-3">
            {Array(rate)
              .fill()
              .map((_, index) => (
                <li key={index}>
                  <i class="fa-solid fa-star"></i>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FeedbackCard;
