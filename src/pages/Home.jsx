import React from "react";
import AffordablePricing from "../components/AffordablePricing";
import WorkingExperts from "../components/working_experts/WorkingExperts";
import Specialist from "../components/Specialist";
import FeedBack from "../components/feedback/FeedBack";
import LatestBlogs from "../components/latest_blogs/LatestBlogs";

export default function Home() {
  return (
    <>
      <AffordablePricing />
      <WorkingExperts />
      <Specialist />
      <FeedBack />
      <LatestBlogs />
    </>
  );
}
