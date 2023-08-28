import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import BG from "../../../../../assets/img/profile.jpg";
import Heading from "../../heading";
import PrimaryBtn from "../../../../common/Buttons/PrimaryBtn";
import { Dialog, DialogActionsBar } from "@progress/kendo-react-dialogs";
import { Avatar } from "@progress/kendo-react-layout";

import NameInput from "../../../../common/InputFeilds/NameInput";
import EmailInput from "../../../../common/InputFeilds/EmailInput";
import CompanyInput from "../../../../common/InputFeilds/CompanyInput";
import useFormValidation from "../../../../common/useFormValidation.js";

const Profile = () => {
  const [visible, setVisible] = useState(true);
  const toggleDialog = () => {
    setVisible(!visible);
  };
  return (
    <div>
      <Heading image={BG} heading={"Your Profile"} />
      <div className="m-3">
        <div className="shadow-container">
          <div className="p-3 d-flex justify-content-between align-items-center">
            <h3 className="font-md font-primary font-weight-700 letter-spacing-2">
              Your Details
            </h3>
            <PrimaryBtn
              fontWeight={600}
              text={"Edit"}
              icon={"fa-regular fa-pen-to-square"}
              onClick={toggleDialog}
            />
            {visible && (
              <Dialog title={"Edit your details"} onClose={toggleDialog}>
                <Form>
                  <Row>
                    <NameInput />
                  </Row>
                  <Row>
                    <EmailInput />
                  </Row>
                  <Row>
                    <CompanyInput />
                  </Row>
                </Form>
                <DialogActionsBar>
                  <button
                    className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
                    onClick={toggleDialog}
                  >
                    No
                  </button>
                  <button
                    className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
                    onClick={toggleDialog}
                  >
                    Yes
                  </button>
                </DialogActionsBar>
              </Dialog>
            )}
          </div>
          <div className="p-3">
            <Row>
              <Col span={12} md={3}>
                <Avatar
                  rounded="full"
                  type="text"
                  style={{
                    marginRight: 5,
                  }}
                >
                  {"P"}
                </Avatar>
              </Col>
              <Col span={12} md={9}>
                <Row>
                  <Col span={12} md={6}>
                    <div className="d-flex align-items-center">
                      <p className="font-sm font-weight-600 font-primary">
                        First Name:{" "}
                        <span className="ms-2 font-weight-500">Payal</span>
                      </p>
                    </div>
                  </Col>
                  <Col span={12} md={6}>
                    <div className="d-flex align-items-center">
                      <p className="font-sm font-weight-600 font-primary">
                        Last Name:{" "}
                        <span className="ms-2 font-weight-500">Patel</span>
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col span={12} md={6}>
                    <div className="d-flex align-items-center">
                      <p className="font-sm font-weight-600 font-primary">
                        Email:{" "}
                        <span className="ms-2 font-weight-500">
                          payalpatel1@gmail.com
                        </span>
                      </p>
                    </div>
                  </Col>
                  <Col span={12} md={6}>
                    <div className="d-flex align-items-center">
                      <p className="font-sm font-weight-600 font-primary">
                        Phone:{" "}
                        <span className="ms-2 font-weight-500">
                          +91 78768 78652
                        </span>
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col span={12} md={6}>
                    <div className="d-flex align-items-center">
                      <p className="font-sm font-weight-600 font-primary">
                        Address:{" "}
                        <span className="ms-2 font-weight-500">
                          prahladnagar, Ahmedabad, Gujarat.
                        </span>
                      </p>
                    </div>
                  </Col>
                  <Col span={12} md={6}>
                    <div className="d-flex align-items-center">
                      <p className="font-sm font-weight-600 font-primary">
                        Company:
                        <span className="ms-2 font-weight-500">DSIQ</span>
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
