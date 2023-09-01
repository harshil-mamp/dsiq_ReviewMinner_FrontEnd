import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import BG from "../../../../../assets/img/billing.jpg";
import Heading from "../../heading";
import ToggleSwitch from "../../../../common/ToggleSwitch";
import plans from "./plansdata.json";
import ScreenWidth from "../../../../common/ScreenWidth";

const Billing = () => {
  const { screenWidth } = ScreenWidth();

  const [checked, setChecked] = useState(false);
  const onChange = (event) => {
    setChecked(event.target.value);
  };

  const renderPlan = (plan) => {
    return (
      <Col className="px-md-2 px-1" key={plan.id} span={4}>
        <div
          className={`shadow-container h-100 position-relative ${
            plan.currentPlan ? "bg-gray" : "bg-white"
          }`}
        >
          {plan.popular && (
            <p
              style={{
                top: screenWidth < 768 ? "-26px" : "-36px",
                height: screenWidth < 768 ? "26px" : "36px",
              }}
              className="position-absolute p-2 w-100 d-flex flex-column justify-content-center align-items-center font-sm text-center font-white bg-secondary font-weight-600 letter-spacing-2"
            >
              Most Popular
            </p>
          )}
          <div className="px-2 px-md-3 py-3 py-md-5 d-flex flex-column justify-content-center align-items-center">
            <p className="font-sm text-center font-primary font-weight-700 letter-spacing-2">
              {plan.name}
            </p>
            <p className="font-xl py-3 text-center font-primary font-weight-700 letter-spacing-2">
              {checked ? plan.annualPrice : plan.monthlyPrice}
              <span className="font-xs text-center font-primary font-weight-400 letter-spacing-2">
                /month
              </span>
            </p>
            <div
              style={{
                height: screenWidth < 768 ? "65px" : "115px",
                borderBottom: "1px solid #2A3741",
              }}
              className="w-100"
            >
              {plan.currentPlan ? (
                <>
                  <div className="w-100 py-md-3 py-2">
                    <p className="p-2 w-100 cursor-pointer d-flex flex-column justify-content-center align-items-center font-sm text-center font-primary bg-gray font-weight-700 letter-spacing-2">
                      Current Plan
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-100 py-md-3 py-2">
                    <p className="p-md-2 p-1 w-100 cursor-pointer d-flex flex-column justify-content-center align-items-center font-sm text-center font-white bg-primary font-weight-600 letter-spacing-2">
                      Buy Now
                    </p>
                  </div>
                  <p className="pb-md-4 pb-3 w-100 font-xs text-center font-primary font-weight-500 letter-spacing-2 cursor-pointer">
                    START FREE TRIAL
                  </p>
                </>
              )}
            </div>
          </div>
          <div className="px-2 px-md-3 pb-md-5 pb-3">
            <div className="d-flex align-items-center pb-2">
              <i
                className="font-sm fa-solid fa-check"
                style={{ color: "#198754" }}
              ></i>
              <p className="ps-2 font-xs font-primary font-weight-500 letter-spacing-1">
                {plan.listings} Number of listings
              </p>
            </div>
            <div className="d-flex align-items-center pb-2">
              <i
                className="font-sm fa-solid fa-check"
                style={{ color: "#198754" }}
              ></i>
              <p className="ps-2 font-xs font-primary font-weight-500 letter-spacing-1">
                Maximum {plan.retailers} Retailers
              </p>
            </div>
            <div className="d-flex align-items-center pb-2">
              <i
                className="font-sm fa-solid fa-check"
                style={{ color: "#198754" }}
              ></i>
              <p className="ps-2 font-xs font-primary font-weight-500 letter-spacing-1">
                Maximum {plan.teamMembers} Team Members
              </p>
            </div>
            <div className="d-flex align-items-center pb-2">
              <i
                className={`font-sm fa-solid ${
                  plan.emailAlerts ? "fa-check" : "fa-xmark"
                }`}
                style={{ color: plan.emailAlerts ? "#198754" : "#FF0000" }}
              ></i>
              <p className="ps-2 font-xs font-primary font-weight-500 letter-spacing-1">
                Email Alerts
              </p>
            </div>
            <div className="d-flex align-items-center pb-2">
              <i
                className={`font-sm fa-solid ${
                  plan.reviewMiner ? "fa-check" : "fa-xmark"
                }`}
                style={{ color: plan.reviewMiner ? "#198754" : "#FF0000" }}
              ></i>
              <p className="ps-2 font-xs font-primary font-weight-500 letter-spacing-1">
                ReviewMiner
              </p>
            </div>
            <div className="d-flex align-items-center pb-2">
              <i
                className={`font-sm fa-solid ${
                  plan.reviewMedia ? "fa-check" : "fa-xmark"
                }`}
                style={{ color: plan.reviewMedia ? "#198754" : "#FF0000" }}
              ></i>
              <p className="ps-2 font-xs font-primary font-weight-500 letter-spacing-1">
                Review Media
              </p>
            </div>
            <div className="d-flex align-items-center pb-2">
              <i
                className={`font-sm fa-solid ${
                  plan.reviewMinerAI ? "fa-check" : "fa-xmark"
                }`}
                style={{ color: plan.reviewMinerAI ? "#198754" : "#FF0000" }}
              ></i>
              <p className="ps-2 font-xs font-primary font-weight-500 letter-spacing-1">
                ReviewMiner AI
              </p>
            </div>
            <div className="d-flex align-items-center pb-2">
              <i
                className={`font-sm fa-solid ${
                  plan.exportReviews ? "fa-check" : "fa-xmark"
                }`}
                style={{ color: plan.exportReviews ? "#198754" : "#FF0000" }}
              ></i>
              <p className="ps-2 font-xs font-primary font-weight-500 letter-spacing-1">
                Export Reviews
              </p>
            </div>
          </div>
        </div>
      </Col>
    );
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
        <Row
          style={{ maxWidth: "1200px", margin: "0 auto" }}
          className="pt-4 pt-md-5 mt-md-3 mt-1 d-flex justify-content-between"
        >
          {Object.values(plans).map((plan) => renderPlan(plan))}
        </Row>
      </div>
    </div>
  );
};

export default Billing;
