import React from "react";
import {
  Menu,
  MenuItem,
  AppBar,
  AppBarSection,
} from "@progress/kendo-react-layout";
import { useNavigate } from "react-router-dom";
import Searchbar from "../../common/Searchbar";
import { countries } from "../../../data/countries";
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
      <div className="navbar-wrap">
        <AppBar>
          <AppBarSection className="w-100">
            <div className="w-100">
              <div className="nav-items-wrap d-flex justify-content-between align-items-center">
                <div>
                  <Menu onSelect={onSelect}>
                    <MenuItem
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
                    ></MenuItem>
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
                    <i
                      className="fa-solid mx-3 fa-question"
                      style={{ color: "#fff" }}
                    ></i>
                    <i
                      className="fa-solid mx-3 fa-gear"
                      style={{ color: "#fff" }}
                    ></i>
                    <i
                      className="fa-solid mx-3 fa-user"
                      style={{ color: "#fff" }}
                    ></i>
                  </div>
                </div>
              </div>
              <div
                style={{
                  padding: 10,
                }}
              >
                {props.children}
              </div>
            </div>
          </AppBarSection>
        </AppBar>
      </div>
    </div>
  );
};

export default Navbars;
