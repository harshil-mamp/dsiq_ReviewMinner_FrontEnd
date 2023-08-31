import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import BG from "../../../../../assets/img/profile.jpg";
import Heading from "../../heading";
import PrimaryBtn from "../../../../common/Buttons/PrimaryBtn";
import { Dialog } from "@progress/kendo-react-dialogs";
import { Upload } from "@progress/kendo-react-upload";
import { Avatar } from "@progress/kendo-react-layout";

import NameInput from "../../../../common/InputFeilds/NameInput";
import EmailInput from "../../../../common/InputFeilds/EmailInput";
import CompanyInput from "../../../../common/InputFeilds/CompanyInput";
import PhoneInput from "../../../../common/InputFeilds/PhoneInput";
import AddressInput from "../../../../common/InputFeilds/AddressInput";
import useFormValidation from "../../../../common/useFormValidation.js";

import bgImg from "../../../../../assets/img/user-bg.png";

const Profile = () => {
  const {
    email,
    validateEmail,
    emailError,
    fname,
    fNameError,
    validateFName,
    lname,
    lNameError,
    validateLName,
    company,
    companyError,
    validateCompany,
    address,
    addressError,
    validateAddress,
  } = useFormValidation();

  const [visible, setVisible] = useState(false);
  const toggleDialog = () => {
    setVisible(!visible);
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const onAdd = (event) => {
    const selectedFile = event.affectedFiles[0];
    setSelectedImage(URL.createObjectURL(selectedFile.getRawFile()));
  };

  return (
    <div>
      <Heading image={BG} heading={"Your Profile"} />
      <div className="m-3">
        <div className="shadow-container">
          <div className="p-2 p-sm-3 d-flex justify-content-between align-items-center">
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
                  <div className="mb-3 d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <Avatar
                        rounded="full"
                        type={"image"}
                        size="large"
                        style={{
                          marginRight: 5,
                        }}
                      >
                        {selectedImage ? (
                          <img
                            src={selectedImage}
                            alt={"Selected Avatar"}
                            style={{
                              width: 64,
                              height: 64,
                            }}
                          />
                        ) : (
                          <img
                            src={bgImg}
                            alt="KendoReact Avatar Customer Image"
                            style={{
                              width: 64,
                              height: 64,
                            }}
                          />
                        )}
                      </Avatar>
                    </div>
                    <Upload
                      className="w-100"
                      batch={false}
                      multiple={false}
                      onAdd={onAdd}
                      withCredentials={false}
                      saveUrl={
                        "https://demos.telerik.com/kendo-ui/service-v4/upload/save"
                      }
                      removeUrl={
                        "https://demos.telerik.com/kendo-ui/service-v4/upload/remove"
                      }
                    />
                  </div>
                  <Row>
                    <NameInput
                      fvalue={fname}
                      onChangeF={validateFName}
                      fNameError={fNameError}
                      lvalue={lname}
                      onChangeL={validateLName}
                      lNameError={lNameError}
                    />
                  </Row>
                  <Row>
                    <EmailInput
                      value={email}
                      onChange={validateEmail}
                      emailError={emailError}
                    />
                  </Row>
                  <Row>
                    <CompanyInput
                      value={company}
                      onChange={validateCompany}
                      companyError={companyError}
                    />
                  </Row>
                  <Row>
                    <PhoneInput />
                  </Row>
                  <Row>
                    <AddressInput
                      value={address}
                      onChange={validateAddress}
                      companyError={addressError}
                    />
                  </Row>
                  <PrimaryBtn text={"Submit"} />
                </Form>
                {/* <DialogActionsBar>
                  <button
                    className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
                    onClick={toggleDialog}
                  >
                    Cancel
                  </button>
                  <button
                    className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
                    onClick={toggleDialog}
                  >
                    Submit
                  </button>
                </DialogActionsBar> */}
              </Dialog>
            )}
          </div>
          <div className="p-2 p-sm-3">
            <Row>
              <Col xs={2} lg={1} className="d-flex align-items-center">
                <Avatar
                  rounded="full"
                  type={"image"}
                  size="large"
                  style={{
                    marginRight: 5,
                  }}
                >
                  <img
                    src={selectedImage ? selectedImage : bgImg}
                    alt="KendoReact Avatar Customer Image"
                    style={{
                      width: 64,
                      height: 64,
                    }}
                  />
                </Avatar>
              </Col>
              <Col xs={10} lg={11}>
                <Row>
                  <Col span={12} sm={6}>
                    <div className="d-flex align-items-center">
                      <p className="font-sm font-weight-600 font-primary">
                        First Name:{" "}
                        <span className="ms-2 font-weight-500">Payal</span>
                      </p>
                    </div>
                  </Col>
                  <Col span={12} sm={6}>
                    <div className="d-flex align-items-center">
                      <p className="font-sm font-weight-600 font-primary">
                        Last Name:{" "}
                        <span className="ms-2 font-weight-500">Patel</span>
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col span={12} sm={6}>
                    <div className="d-flex align-items-center">
                      <p className="font-sm font-weight-600 font-primary">
                        Email:{" "}
                        <span className="ms-2 font-weight-500">
                          payalpatel1@gmail.com
                        </span>
                      </p>
                    </div>
                  </Col>
                  <Col span={12} sm={6}>
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
                  <Col span={12} sm={6}>
                    <div className="d-flex align-items-center">
                      <p className="font-sm font-weight-600 font-primary">
                        Address:{" "}
                        <span className="ms-2 font-weight-500">
                          Prahladnagar, Ahmedabad, Gujarat.
                        </span>
                      </p>
                    </div>
                  </Col>
                  <Col span={12} sm={6}>
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
