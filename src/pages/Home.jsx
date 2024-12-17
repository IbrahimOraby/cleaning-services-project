import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AffordablePricing from "../components/AffordablePricing";
import WorkingExperts from "../components/WorkingExperts";
import Specialist from "../components/Specialist";
import FeedBack from "../components/FeedBack";

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
