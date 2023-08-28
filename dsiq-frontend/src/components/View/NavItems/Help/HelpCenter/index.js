import React from "react";
import BG from "../../../../../assets/img/help.jpg";
import Heading from "../../heading";
import Accordion from "../../../../common/Accordion";
import { faqsData } from "../../../../../data/FAQs/faqsData";

const HelpCenter = () => {
  return (
    <div>
      <Heading image={BG} heading={"Help Center"} />
      <div className="m-3">
        <Accordion data={faqsData} />
      </div>
    </div>
  );
};

export default HelpCenter;
