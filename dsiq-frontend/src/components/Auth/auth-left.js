import React from "react";
import OutlineBtn from "../common/Buttons/OutlineBtn";
import DashboardImg from "../../assets/img/dashboard-img.svg";

const AuthLeft = () => {
  return (
    <div className="login-left-part-wrap vh-100 d-flex flex-column justify-content-between">
      <div>
        <h3>
          Start your free trial. No credit card required, no software to
          install.
        </h3>
        <p className="my-3">With your trial you get:</p>
        <div className="mb-3 d-flex align-items-center">
          <i class="fa-solid fa-check" style={{ color: "#198754" }}></i>
          <p className="ps-2">Preloaded data or upload your own</p>
        </div>
        <div className="mb-3 d-flex align-items-center">
          <i class="fa-solid fa-check" style={{ color: "#198754" }}></i>
          <p className="ps-2">
            Preconfigured processes, reports and dashboards
          </p>
        </div>
        <div className="mb-3 d-flex align-items-center">
          <i class="fa-solid fa-check" style={{ color: "#198754" }}></i>
          <p className="ps-2">
            Guided experience for sales, reps, leaders and administrators
          </p>
        </div>
        <div className="mb-3 d-flex align-items-center">
          {/* <CheckAll cursor="pointer" color="#198754" /> */}
          <i class="fa-solid fa-check" style={{ color: "#198754" }}></i>
          <p className="ps-2">Online training and live onboarding webinars</p>
        </div>
        {/* <Button variant="outline-primary">START MY FREE TRIAL</Button> */}
        <OutlineBtn text={"START MY FREE TRIAL"} />
      </div>
      <div className="vh-50">
        <img src={DashboardImg} alt="Dashboard" />
      </div>
    </div>
  );
};

export default AuthLeft;
