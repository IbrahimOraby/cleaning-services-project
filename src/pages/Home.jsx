import React from "react";
import AffordablePricing from "../components/AffordablePricing";
import WorkingExperts from "../components/working_experts/WorkingExperts";
import Specialist from "../components/Specialist";
import FeedBack from "../components/feedback/FeedBack";
import LatestBlogs from "../components/latest_blogs/LatestBlogs";
import Slider from "../components/Slider/Slider";
import Booking from "../components/Booking/Booking";
import CleaningServices from "../components/Cleaning-Services/CleaningServices";
import Estimate from "../components/Estimation/Estimate";
import RequstingEstimation from "../components/RequstingEstimation/RequstingEstimation";

export default function Home() {
  return (
    <>
      <Slider />
      <Booking />
      <CleaningServices />
      <Estimate />
      <RequstingEstimation />
      <AffordablePricing />
      <WorkingExperts />
      <Specialist />
      <FeedBack />
      <LatestBlogs />
    </>
  );
}
