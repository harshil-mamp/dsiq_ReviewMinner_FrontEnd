import React, { useState, useCallback } from "react";
import { Dialog } from "@progress/kendo-react-dialogs";
import PrimaryBtn from "../../common/Buttons/PrimaryBtn";

import { Form, FormGroup } from "react-bootstrap";

// import { Form, FormElement } from "@progress/kendo-react-form";
import { Button } from "@progress/kendo-react-buttons";
import { Stepper } from "@progress/kendo-react-layout";
import RetailerDetails from "./RetailerDetails";
import ProductDetails from "./ProductDetails";

const stepPages = [RetailerDetails, ProductDetails];

const SetupForm = () => {
  const [step, setStep] = useState(0);
  const [retailerDetails, setRetailerDetails] = useState({});
  const [productDetails, setProductDetails] = useState({});
  console.log("*", step);
  console.log("**1", retailerDetails);
  console.log("**2", productDetails);
  const [steps, setSteps] = useState([
    {
      label: "Select Retailers",
      isValid: undefined,
    },
    {
      label: "Select Products",
      isValid: undefined,
    },
    {
      label: "Done",
      isValid: undefined,
    },
  ]);

  const lastStepIndex = steps.length - 1;
  const isLastStep = lastStepIndex === step;
  const onStepSubmit = useCallback(
    (event) => {
      console.log("***", event);
      const { isValid, values } = event;
      const currentSteps = steps.map((currentStep, index) => ({
        ...currentStep,
        isValid: index === step ? isValid : currentStep.isValid,
      }));
      setSteps(currentSteps);
      if (!isValid) {
        return;
      }
      setStep(() => Math.min(step + 1, lastStepIndex));

      if (step === 0) {
        setRetailerDetails(values);
      } else if (step === 1) {
        setProductDetails(values);
      }

      if (isLastStep) {
        alert(JSON.stringify({ ...retailerDetails, ...productDetails }));
      }
    },
    [steps, isLastStep, step, lastStepIndex, retailerDetails, productDetails]
  );

  const onPrevClick = useCallback(
    (event) => {
      event.preventDefault();
      setStep(() => Math.max(step - 1, 0));
    },
    [step, setStep]
  );

  const submitSetup = () => {
    localStorage.setItem("setup_data", true);
    window.location.reload();
  };
  return (
    <div>
      <Dialog className="setup-form-dialog" title={"Please Fill all details"}>
        <h1 className="text-center my-3 font-primary font-lg font-weight-700 letter-spacing-3">
          Get Started
        </h1>
        <p className="text-center font-secondary font-sm font-weight-500 letter-spacing-1">
          Set Up Your Retailers and Products
        </p>
        <hr />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Stepper value={step} items={steps} />
          <Form>
            <span
              style={{
                marginTop: "40px",
              }}
              className={"k-form-separator"}
            />
            <div
              className="my-5"
              style={{
                alignSelf: "center",
              }}
            >
              {step === 0 ? (
                <RetailerDetails
                  details={retailerDetails}
                  setDetails={setRetailerDetails}
                />
              ) : step === 1 ? (
                <ProductDetails
                  details={productDetails}
                  setDetails={setProductDetails}
                />
              ) : null}
            </div>
            <hr />
            <div
              style={{
                justifyContent: "space-between",
                alignContent: "center",
              }}
              className={
                "k-form-buttons k-button k-button-md k-rounded-md k-button-solid k-button-solid-bases-end"
              }
            >
              <span
                style={{
                  alignSelf: "center",
                }}
              >
                Step {step + 1} of 3
              </span>
              <div>
                {step !== 0 ? (
                  <Button
                    style={{
                      marginRight: "16px",
                    }}
                    onClick={onPrevClick}
                  >
                    Previous
                  </Button>
                ) : undefined}
                <Button
                  themeColor={"primary"}
                  type="button"
                  onClick={() => {
                    onStepSubmit({ isValid: true });
                  }}
                >
                  {isLastStep ? "Submit" : "Next"}
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </Dialog>
    </div>
  );
};

export default SetupForm;
