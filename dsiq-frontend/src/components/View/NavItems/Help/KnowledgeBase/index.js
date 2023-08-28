import React from "react";
import BG from "../../../../../assets/img/knowledge.jpg";
import Heading from "../../heading";
import Accordion from "../../../../common/Accordion";
import { faqsData } from "../../../../../data/FAQs/faqsData";

const KnowledgeBase = () => {
  return (
    <div>
      <Heading image={BG} heading={"Knowlegde Base"} />
      <div className="m-3">
        <Accordion data={faqsData} />
      </div>
    </div>
  );
};

export default KnowledgeBase;
