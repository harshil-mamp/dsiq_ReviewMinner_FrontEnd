import React, { useState } from "react";
import { List, XLg } from "react-bootstrap-icons";

import "./index.css";

const Sidebar = () => {
  const [show, setShow] = useState(true);

  const toggleSidebar = () => {
    setShow(!show);
  };

  return (
    <div
      className={
        show ? "sidebar-wrapper sidebar-close" : "sidebar-wrapper sidebar-open"
      }
    >
      <div>
        <div className="d-flex pt-2 w-100" onClick={toggleSidebar}>
          {show ? (
            <List className="sidebar-icons mx-auto p-2" color="#fff" />
          ) : (
            <div className="sidebar-heading w-100 d-flex align-items-center justify-content-center px-2">
              <h3>ReviewMinner</h3>
              <XLg className="sidebar-icons ms-auto p-2" color="#fff" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
