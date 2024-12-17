import React from "react";
import AffordablePricing from "../components/AffordablePricing";
import WorkingExperts from "../components/working_experts/WorkingExperts";
import Specialist from "../components/Specialist";
import FeedBack from "../components/feedback/FeedBack";
import LatestBlogs from "../components/latest_blogs/LatestBlogs";
import Slider from "../components/Slider/Slider";
import Booking from "../components/Booking/Booking";

export default function Home() {
  return (
    <>
      <Slider />
      <Booking />
      <AffordablePricing />
      <WorkingExperts />
      <Specialist />
      <FeedBack />
      <LatestBlogs />
    </>
  );
}
