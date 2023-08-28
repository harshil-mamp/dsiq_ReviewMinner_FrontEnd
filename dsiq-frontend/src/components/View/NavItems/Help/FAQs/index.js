import React from "react";
import BG from "../../../../../assets/img/faqs.jpg";
import Heading from "../../heading";
import Accordion from "../../../../common/Accordion";
import { faqsData } from "../../../../../data/FAQs/faqsData";

const FAQs = () => {
  return (
    <div>
      <Heading image={BG} heading={"FAQs"} />
      <div className="m-3">
        <Accordion data={faqsData} />
      </div>
    </div>
  );
};

export default FAQs;
