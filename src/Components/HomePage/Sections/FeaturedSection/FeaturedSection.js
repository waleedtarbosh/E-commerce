import React from "react";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import Featured from "../../../Featured/index";

const FeaturedSection = () => {
  return (
    <div>
      <SectionWrapper title="Featured" heading="New Arrival">
        <Featured />
      </SectionWrapper>
    </div>
  );
};

export default FeaturedSection;
