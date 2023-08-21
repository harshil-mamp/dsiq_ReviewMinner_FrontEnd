import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  Notification,
  NotificationGroup,
} from "@progress/kendo-react-notification";
import { Fade } from "@progress/kendo-react-animation";
const Alert = ({ type, success, onClose, position }) => {
  const location = {
    topLeft: {
      top: 0,
      left: 0,
      alignItems: "flex-start",
    },
    topCenter: {
      top: 0,
      left: "50%",
      transform: "translateX(-50%)",
    },
    topRight: {
      top: 0,
      right: 0,
      alignItems: "flex-end",
    },
    bottomLeft: {
      bottom: 0,
      left: 0,
      alignItems: "flex-start",
    },
    bottomCenter: {
      bottom: 0,
      left: "50%",
      transform: "translateX(-50%)",
    },
    bottomRight: {
      bottom: 0,
      right: 0,
      alignItems: "flex-end",
    },
  };
  return (
    <React.Fragment>
      <NotificationGroup style={location[position]}>
        <Fade>
          {success && (
            <Notification
              type={{
                style: type,
                icon: true,
              }}
              closable={true}
              onClose={onClose}
            >
              <span>Your data has been saved.</span>
            </Notification>
          )}
        </Fade>
      </NotificationGroup>
    </React.Fragment>
  );
};
export default Alert;
