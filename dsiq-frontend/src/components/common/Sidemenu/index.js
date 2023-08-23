import React from "react";
import menuItems from "./menuItems";
import { useNavigate } from "react-router-dom";
import {
  PanelBar,
  PanelBarItem,
  PanelBarUtils,
} from "@progress/kendo-react-layout";

const Sidemenu = ({ props, initialExpandedItems, onSelect }) => {
  const navigate = useNavigate();
  let components = PanelBarUtils.mapItemsToComponents(menuItems);
  const handleSelect = (event) => {
    navigate(event.target.props.data.route);
    if (event.expandedItems) {
      onSelect(event.expandedItems);
    }
  };
  return (
    <div className="panelbar-wrapper">
      <PanelBar
        expanded={initialExpandedItems}
        children={components}
        onSelect={handleSelect}
      >
        {menuItems.map((item, index) => (
          <PanelBarItem
            data={{ route: item.route }}
            key={index}
            title={item.title}
            expanded={item.expanded}
          >
            {item.children &&
              item.children.map((child, childIndex) => (
                <PanelBarItem
                  data={{ route: child.route }}
                  key={childIndex}
                  title={child.title}
                >
                  {child.children &&
                    child.children.map((subChild, subChildIndex) => (
                      <PanelBarItem
                        data={{ route: subChild.route }}
                        key={subChildIndex}
                        title={subChild.title}
                      />
                    ))}
                </PanelBarItem>
              ))}
          </PanelBarItem>
        ))}
      </PanelBar>
    </div>
  );
};

export default Sidemenu;
