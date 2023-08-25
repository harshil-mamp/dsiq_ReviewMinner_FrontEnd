import React, { useState, useEffect } from "react";
import Sidemenu from "../../common/Sidemenu";

import "./index.css";

const Sidebar = (props) => {
  const [show, setShow] = useState(true);
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleSidebar = () => {
    setShow(!show);
  };

  useEffect(() => {
    const storedExpandedItems = localStorage.getItem("expandedItems");
    if (storedExpandedItems) {
      setExpandedItems(JSON.parse(storedExpandedItems));
    }
  }, []);

  const handleSidebarSelect = (expandedItems) => {
    setExpandedItems(expandedItems);
    localStorage.setItem("expandedItems", JSON.stringify(expandedItems));
  };
  return (
    <div
      className={
        show
          ? "sidebar-wrapper sidebar-width-close sidebar-close"
          : "sidebar-wrapper sidebar-width-open sidebar-open"
      }
    >
      <div>
        <div className="d-flex w-100">
          {show ? (
            <div className="sidebar-nav-height w-100 d-flex justify-content-center align-items-center">
              <i
                onClick={toggleSidebar}
                className="fa-solid fa-bars sidebar-icons mx-auto p-2 cursor-pointer"
                style={{ color: "#fff" }}
              ></i>
            </div>
          ) : (
            <div className="w-100">
              <div className="sidebar-nav-height w-100 d-flex align-items-center justify-content-between px-2">
                <h3>ReviewMiner</h3>
                <i
                  onClick={toggleSidebar}
                  style={{ color: "#fff" }}
                  className="fa-solid fa-xmark sidebar-icons ms-auto p-2 cursor-pointer"
                ></i>
              </div>
              <div className="sidebar-menu">
                <Sidemenu
                  initialExpandedItems={expandedItems}
                  onSelect={handleSidebarSelect}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
