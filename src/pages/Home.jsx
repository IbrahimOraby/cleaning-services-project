import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AffordablePricing from "../components/AffordablePricing";
import WorkingExperts from "../components/working_experts/WorkingExperts";
import Specialist from "../components/Specialist";
import FeedBack from "../components/feedback/FeedBack";

export default function Home() {
  return (
    <>
      <AffordablePricing />
	  <WorkingExperts/>
	  <Specialist/>
	  <FeedBack/>
    </>
  );
}
