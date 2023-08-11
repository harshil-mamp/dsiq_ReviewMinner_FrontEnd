import React, { useState } from "react";
import { List, XLg } from "react-bootstrap-icons";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

import "./index.css";

const Sidebar = () => {
  const [show, setShow] = useState(true);
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSidebar = () => {
    setShow(!show);
  };

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <div
      className={
        show ? "sidebar-wrapper sidebar-close" : "sidebar-wrapper sidebar-open"
      }
    >
      <div>
        <div className="d-flex pt-2 w-100">
          {show ? (
            <List
              onClick={toggleSidebar}
              className="sidebar-icons mx-auto p-2 cursor-pointer"
              color="#fff"
            />
          ) : (
            <div className="w-100">
              <div className="sidebar-heading w-100 d-flex align-items-center justify-content-between px-2">
                <h3>ReviewMinner</h3>
                <XLg
                  onClick={toggleSidebar}
                  className="sidebar-icons ms-auto p-2 cursor-pointer"
                  color="#fff"
                />
              </div>
              <div className="sidebar-menu">
                {/* <Navbar bg="dark" variant="dark" className="sidebar">
                  <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link href="/home">
                      <List className="mr-2" />
                      Home
                    </Nav.Link>
                    <Nav.Link href="/profile">
                      <List className="mr-2" />
                      Profile
                    </Nav.Link>
                    <NavDropdown
                      title="Settings"
                      id="settings-dropdown"
                      show={showSubMenu}
                      onClick={toggleSubMenu}
                    >
                      <NavDropdown.Item href="/settings/general">
                        <List className="mr-2" />
                        General
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/settings/account">
                        <List className="mr-2" />
                        Account
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
