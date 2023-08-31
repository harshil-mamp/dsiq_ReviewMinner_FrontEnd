import React, { useState } from "react";
import { Dialog } from "@progress/kendo-react-dialogs";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import OutlineBtn from "../Buttons/OutlineBtn";

const DeleteDilog = ({ type, toggle, submit }) => {
  return (
    <div>
      <Dialog title={"Delete " + type} onClose={toggle}>
        <p className="font-xs font-primary font-weight-500 letter-spacing-1">
          Are you sure you want to delete {type}?
        </p>
        <div className="mt-3 ms-auto" style={{ width: "max-content" }}>
          <div className="d-flex align-items-center">
            <OutlineBtn text={"Cancel"} onClick={toggle} />
            <div className="ms-2">
              <PrimaryBtn text={"Submit"} onClick={submit} />
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default DeleteDilog;
