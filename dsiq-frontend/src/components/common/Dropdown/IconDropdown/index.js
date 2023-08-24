import React from "react";
import { DropDownButton } from "@progress/kendo-react-buttons";
import { useNavigate } from "react-router-dom";

const IconDropdown = ({ data, icon }) => {
  const navigate = useNavigate();

  const onItemClick = (item) => {
    if (item.item.route === "/login") {
      localStorage.removeItem("access_token");
      navigate("/login");
      window.location.reload();
    } else {
      if (item.item.route) {
        navigate(item.item.route);
      }
    }
  };
  return (
    <div>
      <DropDownButton
        className="buttons-container-button icon-dropdown-btn"
        items={data}
        iconClass={icon}
        onItemClick={onItemClick}
      />
    </div>
  );
};

export default IconDropdown;
