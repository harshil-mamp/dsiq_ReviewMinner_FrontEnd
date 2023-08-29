import React, { useCallback, useState, useMemo } from "react";
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

import { DropDownTree } from "@progress/kendo-react-dropdowns";
import { processTreeData, expandedState } from "./tree-data-operations";
const selectField = "selected";
const expandField = "expanded";
const dataItemKey = "id";
const textField = "text";
const subItemsField = "items";
const fields = {
  selectField,
  expandField,
  dataItemKey,
  subItemsField,
};

const Navbars = (props) => {
  const navigate = useNavigate();
  const [value, setValue] = useState(null);
  const allItemIds = settingsMenuItems.map((item) => item[dataItemKey]);
  const [expanded, setExpanded] = useState(allItemIds);
  const onChangeDropDownTree = (event) => {
    setValue(event.value);
    if (event.value.route === "/login") {
      localStorage.removeItem("access_token");
      navigate("/login");
      window.location.reload();
    } else {
      if (event.value.route) {
        navigate(event.value.route);
      }
    }
  };
  const onExpandChange = useCallback(
    (event) => setExpanded(expandedState(event.item, dataItemKey, expanded)),
    [expanded]
  );
  const treeData = useMemo(
    () =>
      processTreeData(
        settingsMenuItems,
        {
          expanded,
          value,
        },
        fields
      ),
    [expanded, value]
  );

  const handleSignOut = () => {
    localStorage.removeItem("access_token");
  };

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
                    {/* <IconDropdown
                      data={settingsMenuItems}
                      icon={"fa-solid mx-lg-2 mx-1 fa-gear"}
                    /> */}
                    <DropDownTree
                      className="navitem-dropdown mx-lg-2 mx-1"
                      style={{
                        width: "max-content",
                      }}
                      data={treeData}
                      value={value}
                      onChange={onChangeDropDownTree}
                      placeholder="Please select ..."
                      textField={textField}
                      dataItemKey={dataItemKey}
                      selectField={selectField}
                      expandField={expandField}
                      onExpandChange={onExpandChange}
                      popupSettings={{
                        popupClass: "navitem-dropdown-popup",
                      }}
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
