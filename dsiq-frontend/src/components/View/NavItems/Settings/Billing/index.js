import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import BG from "../../../../../assets/img/billing.jpg";
import Heading from "../../heading";
import ToggleSwitch from "../../../../common/ToggleSwitch";

const Billing = () => {
  const [checked, setChecked] = useState(false);
  const onChange = (event) => {
    setChecked(event.target.value);
  };
  return (
    <div>
      <Heading image={BG} heading={"Billing"} />
      <div className="m-3">
        <div className="p-2 p-sm-3">
          <h1 className="font-xl text-center font-primary font-weight-700 letter-spacing-2">
            Choose the best plan for your business
          </h1>
          <div className="py-3 d-flex justify-content-center align-items-center">
            <p
              className={`font-xs pe-2  letter-spacing-1 ${
                checked
                  ? "font-weight-400 font-secondary"
                  : "font-weight-700 font-primary"
              }`}
            >
              Pay Annually
            </p>
            <div className="billing-switch">
              <ToggleSwitch checked={checked} onChange={onChange} />
            </div>
            <p
              className={`font-xs ps-2 letter-spacing-1 ${
                checked
                  ? "font-weight-700 font-primary"
                  : "font-weight-400 font-secondary"
              }`}
            >
              Pay Monthly
            </p>
          </div>
        </div>
        <Row className="pt-5 mt-3 d-flex justify-content-between">
          <Col span={4}>
            <div className="shadow-container bg-gray position-relative">
              <div className="px-3 py-5 d-flex flex-column justify-content-center align-items-center">
                <p className="font-sm text-center font-primary font-weight-700 letter-spacing-2">
                  Starter
                </p>
                <p className="font-xl py-3 text-center font-primary font-weight-700 letter-spacing-2">
                  {checked ? "$12.99" : "$9.99"}
                  <span className="font-xs text-center font-primary font-weight-400 letter-spacing-2">
                    /month
                  </span>
                </p>
                <div className="w-100 py-3">
                  {/* <p className="p-2 w-100 cursor-pointer d-flex flex-column justify-content-center align-items-center font-sm text-center font-white bg-primary font-weight-600 letter-spacing-2">
                    Buy Now
                  </p> */}
                  <p className="p-2 w-100 cursor-pointer d-flex flex-column justify-content-center align-items-center font-sm text-center font-primary bg-gray font-weight-700 letter-spacing-2">
                    Current Plan
                  </p>
                </div>
                {/* <p
                  style={{ borderBottom: "1px solid #2A3741" }}
                  className="pb-4 w-100 font-xs text-center font-primary font-weight-500 letter-spacing-2 cursor-pointer"
                >
                  START FREE TRIAL
                </p> */}
              </div>
              <div className="px-3 pb-5">
                <div className="d-flex align-items-center pb-2">
                  <i
                    className="font-sm fa-solid fa-check"
                    style={{ color: "#198754" }}
                  ></i>
                  <p className="ps-2 font-xs font-primary font-weight-500 letter-spacing-1">
                    50 Number of listings
                  </p>
                </div>
                <div className="d-flex align-items-center pb-2">
                  <i
                    className="font-sm fa-solid fa-check"
                    style={{ color: "#198754" }}
                  ></i>
                  <p className="ps-2 font-xs font-primary font-weight-500 letter-spacing-1">
                    Maximum 3 Retailers
                  </p>
                </div>
                <div className="d-flex align-items-center pb-2">
                  <i
                    className="font-sm fa-solid fa-check"
                    style={{ color: "#198754" }}
                  ></i>
                  <p className="ps-2 font-xs font-primary font-weight-500 letter-spacing-1">
                    Maximum 3 Team Members
                  </p>
                </div>
                <div className="d-flex align-items-center pb-2">
                  <i
                    className="font-sm fa-solid fa-check"
                    style={{ color: "#198754" }}
                  ></i>
                  <p className="ps-2 font-xs font-primary font-weight-500 letter-spacing-1">
                    Email Alerts
                  </p>
                </div>
                <div className="d-flex align-items-center pb-2">
                  <i
                    className="font-sm fa-solid fa-xmark"
                    style={{ color: "#FF0000" }}
                  ></i>
                  <p className="ps-2 font-xs font-primary font-weight-500 letter-spacing-1">
                    ReviewMiner
                  </p>
                </div>
                <div className="d-flex align-items-center pb-2">
                  <i
                    className="font-sm fa-solid fa-xmark"
                    style={{ color: "#FF0000" }}
                  ></i>
                  <p className="ps-2 font-xs font-primary font-weight-500 letter-spacing-1">
                    Review Media
                  </p>
                </div>
                <div className="d-flex align-items-center pb-2">
                  <i
                    className="font-sm fa-solid fa-xmark"
                    style={{ color: "#FF0000" }}
                  ></i>
                  <p className="ps-2 font-xs font-primary font-weight-500 letter-spacing-1">
                    ReviewMiner AI
                  </p>
                </div>
                <div className="d-flex align-items-center pb-2">
                  <i
                    className="font-sm fa-solid fa-check"
                    style={{ color: "#198754" }}
                  ></i>
                  <p className="ps-2 font-xs font-primary font-weight-500 letter-spacing-1">
                    Export Reviews
                  </p>
                </div>
              </div>
            </div>
          </Col>

          <Col span={4}>
            <div className="shadow-container position-relative">
              <p
                style={{ top: "-36px", height: "36px" }}
                className="position-absolute p-2 w-100 d-flex flex-column justify-content-center align-items-center font-sm text-center font-white bg-secondary font-weight-600 letter-spacing-2"
              >
                Most Popular
              </p>
              <div className="px-3 py-5 d-flex flex-column justify-content-center align-items-center">
                <p className="font-sm text-center font-primary font-weight-700 letter-spacing-2">
                  Business
                </p>
                <p className="font-xl py-3 text-center font-primary font-weight-700 letter-spacing-2">
                  {checked ? "$59.99" : "$49.99"}
                  <span className="font-xs text-center font-primary font-weight-400 letter-spacing-2">
                    /month
                  </span>
                </p>
                <div className="w-100 py-3">
                  <p className="p-2 w-100 cursor-pointer d-flex flex-column justify-content-center align-items-center font-sm text-center font-white bg-primary font-weight-600 letter-spacing-2">
                    Buy Now
                  </p>
                </div>
                <p
                  style={{ borderBottom: "1px solid #2A3741" }}
                  className="pb-4 w-100 font-xs text-center font-primary font-weight-500 letter-spacing-2 cursor-pointer"
                >
                  START FREE TRIAL
                </p>
              </div>
              <div className="px-3 pb-5">
                <div className="d-flex align-items-center pb-2">
                  <i
                    className="font-sm fa-solid fa-check"
                    style={{ color: "#198754" }}
                  ></i>
                  <p className="ps-2 font-xs font-primary font-weight-500 letter-spacing-1">
                    200 Number of listings
                  </p>
                </div>
                <div className="d-flex align-items-center pb-2">
                  <i
                    className="font-sm fa-solid fa-check"
                    style={{ color: "#198754" }}
                  ></i>
                  <p className="ps-2 font-xs font-primary font-weight-500 letter-spacing-1">
                    Maximum 5 Retailers
                  </p>
                </div>
                <div className="d-flex align-items-center pb-2">
                  <i
                    className="font-sm fa-solid fa-check"
                    style={{ color: "#198754" }}
                  ></i>
                  <p className="ps-2 font-xs font-primary font-weight-500 letter-spacing-1">
                    Maximum 10 Team Members
                  </p>
                </div>
                <div className="d-flex align-items-center pb-2">
                  <i
                    className="font-sm fa-solid fa-check"
                    style={{ color: "#198754" }}
                  ></i>
                  <p className="ps-2 font-xs font-primary font-weight-500 letter-spacing-1">
                    Email Alerts
                  </p>
                </div>
                <div className="d-flex align-items-center pb-2">
                  <i
                    className="font-sm fa-solid fa-check"
                    style={{ color: "#198754" }}
                  ></i>
                  <p className="ps-2 font-xs font-primary font-weight-500 letter-spacing-1">
                    ReviewMiner
                  </p>
                </div>
                <div className="d-flex align-items-center pb-2">
                  <i
                    className="font-sm fa-solid fa-check"
                    style={{ color: "#198754" }}
                  ></i>
                  <p className="ps-2 font-xs font-primary font-weight-500 letter-spacing-1">
                    Review Media
                  </p>
                </div>
                <div className="d-flex align-items-center pb-2">
                  <i
                    className="font-sm fa-solid fa-check"
                    style={{ color: "#198754" }}
                  ></i>
                  <p className="ps-2 font-xs font-primary font-weight-500 letter-spacing-1">
                    ReviewMiner AI
                  </p>
                </div>
                <div className="d-flex align-items-center pb-2">
                  <i
                    className="font-sm fa-solid fa-check"
                    style={{ color: "#198754" }}
                  ></i>
                  <p className="ps-2 font-xs font-primary font-weight-500 letter-spacing-1">
                    Export Reviews
                  </p>
                </div>
              </div>
            </div>
          </Col>

          <Col span={4}>
            <div className="shadow-container position-relative">
              <div className="px-3 py-5 d-flex flex-column justify-content-center align-items-center">
                <p className="font-sm text-center font-primary font-weight-700 letter-spacing-2">
                  Enterprise
                </p>
                <p className="font-xl py-3 text-center font-primary font-weight-700 letter-spacing-2">
                  {checked ? "$224.99" : "$249.00"}
                  <span className="font-xs text-center font-primary font-weight-400 letter-spacing-2">
                    /month
                  </span>
                </p>
                <div className="w-100 py-3">
                  <p className="p-2 w-100 cursor-pointer d-flex flex-column justify-content-center align-items-center font-sm text-center font-white bg-primary font-weight-600 letter-spacing-2">
                    Buy Now
                  </p>
                </div>
                <p
                  style={{ borderBottom: "1px solid #2A3741" }}
                  className="pb-4 w-100 font-xs text-center font-primary font-weight-500 letter-spacing-2 cursor-pointer"
                >
                  START FREE TRIAL
                </p>
              </div>
              <div className="px-3 pb-5">
                <div className="d-flex align-items-center pb-2">
                  <i
                    className="font-sm fa-solid fa-check"
                    style={{ color: "#198754" }}
                  ></i>
                  <p className="ps-2 font-xs font-primary font-weight-500 letter-spacing-1">
                    500 Number of listings
                  </p>
                </div>
                <div className="d-flex align-items-center pb-2">
                  <i
                    className="font-sm fa-solid fa-check"
                    style={{ color: "#198754" }}
                  ></i>
                  <p className="ps-2 font-xs font-primary font-weight-500 letter-spacing-1">
                    All Retailers
                  </p>
                </div>
                <div className="d-flex align-items-center pb-2">
                  <i
                    className="font-sm fa-solid fa-check"
                    style={{ color: "#198754" }}
                  ></i>
                  <p className="ps-2 font-xs font-primary font-weight-500 letter-spacing-1">
                    Unlimited
                  </p>
                </div>
                <div className="d-flex align-items-center pb-2">
                  <i
                    className="font-sm fa-solid fa-check"
                    style={{ color: "#198754" }}
                  ></i>
                  <p className="ps-2 font-xs font-primary font-weight-500 letter-spacing-1">
                    Email Alerts
                  </p>
                </div>
                <div className="d-flex align-items-center pb-2">
                  <i
                    className="font-sm fa-solid fa-check"
                    style={{ color: "#198754" }}
                  ></i>
                  <p className="ps-2 font-xs font-primary font-weight-500 letter-spacing-1">
                    ReviewMiner
                  </p>
                </div>
                <div className="d-flex align-items-center pb-2">
                  <i
                    className="font-sm fa-solid fa-check"
                    style={{ color: "#198754" }}
                  ></i>
                  <p className="ps-2 font-xs font-primary font-weight-500 letter-spacing-1">
                    Review Media
                  </p>
                </div>
                <div className="d-flex align-items-center pb-2">
                  <i
                    className="font-sm fa-solid fa-check"
                    style={{ color: "#198754" }}
                  ></i>
                  <p className="ps-2 font-xs font-primary font-weight-500 letter-spacing-1">
                    ReviewMiner AI
                  </p>
                </div>
                <div className="d-flex align-items-center pb-2">
                  <i
                    className="font-sm fa-solid fa-check"
                    style={{ color: "#198754" }}
                  ></i>
                  <p className="ps-2 font-xs font-primary font-weight-500 letter-spacing-1">
                    Export Reviews
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Billing;
