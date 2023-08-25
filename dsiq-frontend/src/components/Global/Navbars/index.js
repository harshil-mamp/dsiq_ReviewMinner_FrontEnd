import React from "react";
import {
  Menu,
  MenuItem,
  AppBar,
  AppBarSection,
} from "@progress/kendo-react-layout";
import { DropDownButton } from "@progress/kendo-react-buttons";
import { useNavigate } from "react-router-dom";
import Searchbar from "../../common/Searchbar";
import { countries } from "../../../data/countries";
import IconDropdown from "../../common/Dropdown/IconDropdown";
import helpMenuItems from "../../../data/helpMenuItems";
import userMenuItems from "../../../data/userMenuItems";
import settingsMenuItems from "../../../data/settingsMenuItems";

import "./index.css";

const Navbars = (props) => {
  const handleSignOut = () => {
    localStorage.removeItem("access_token");
  };
  const navigate = useNavigate();

  const onSelect = (event) => {
    if (event.item.data.route) {
      if (event.item.data.route == "/login") {
        localStorage.removeItem("access_token");
        navigate("/login");
        window.location.reload();
      } else {
        navigate(event.item.data.route);
      }
    }
  };

  return (
    <div>
      <div className="navbar-wrap navbar-height navbar-width">
        <AppBar>
          <AppBarSection className="w-100">
            <div className="w-100">
              <div className="nav-items-wrap navbar-width navbar-height d-flex justify-content-between align-items-center">
                <div>
                  <Menu onSelect={onSelect}>
                    {/* <MenuItem
                      text="Home"
                      data={{
                        route: "/",
                      }}
                    />
                    <MenuItem
                      text="Settings"
                      data={{
                        route: "/settings",
                      }}
                    />
                    <MenuItem
                      text="User"
                      data={{
                        route: "/users",
                      }}
                    ></MenuItem> */}
                    <MenuItem
                      text="Sign out"
                      onClick={handleSignOut}
                      data={{
                        route: "/login",
                      }}
                    ></MenuItem>
                  </Menu>
                </div>
                <div className="d-flex align-items-center">
                  <Searchbar searchData={countries} />
                  <div className="d-flex align-items-center navbar-icons">
                    <IconDropdown
                      data={helpMenuItems}
                      icon={"fa-solid mx-lg-2 mx-1 fa-question"}
                    />
                    <IconDropdown
                      data={settingsMenuItems}
                      icon={"fa-solid mx-lg-2 mx-1 fa-gear"}
                    />
                    <IconDropdown
                      data={userMenuItems}
                      icon={"fa-solid mx-lg-2 mx-1 fa-user"}
                    />
                  </div>
                </div>
              </div>
              <div>{props.children}</div>
            </div>
          </AppBarSection>
        </AppBar>
      </div>
    </div>
  );
};

export default Navbars;
