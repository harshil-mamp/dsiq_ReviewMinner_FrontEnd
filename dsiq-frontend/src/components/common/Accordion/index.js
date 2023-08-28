import React, { useState, useCallback } from "react";

import {
  ExpansionPanel,
  ExpansionPanelContent,
} from "@progress/kendo-react-layout";
import { Reveal } from "@progress/kendo-react-animation";

const Accordion = ({ data }) => {
  const initialExpanded = data.reduce(
    (acc, cur) => ({
      ...acc,
      [cur.id]: false,
    }),
    {}
  );
  const [expanded, setExpanded] = useState({
    ...initialExpanded,
    1: true,
  });
  const onAction = useCallback(
    (id) => {
      setExpanded({
        ...expanded,
        [id]: !expanded[id],
      });
    },
    [expanded]
  );
  return (
    <div className="wrapper">
      {data.map((item) => (
        <ExpansionPanel
          title={item.title}
          expanded={expanded[item.id]}
          tabIndex={0}
          key={item.id}
          onAction={onAction.bind(undefined, item.id)}
        >
          <Reveal transitionEnterDuration={150} transitionExitDuration={150}>
            {expanded[item.id] && (
              <ExpansionPanelContent>
                <div className="content">
                  <span className="content-text font-weight-500 letter-spacing-1 font-secondary font-xs">
                    {item.text}
                  </span>
                </div>
              </ExpansionPanelContent>
            )}
          </Reveal>
        </ExpansionPanel>
      ))}
    </div>
  );
};

export default Accordion;
