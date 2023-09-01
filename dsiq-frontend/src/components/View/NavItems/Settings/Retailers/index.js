import React, { useState, useEffect } from "react";
import { Row, Col, Form } from "react-bootstrap";
import BG from "../../../../../assets/img/retailers.jpg";
import Heading from "../../heading";
import PrimaryBtn from "../../../../common/Buttons/PrimaryBtn";
import OutlineBtn from "../../../../common/Buttons/OutlineBtn";
import { Dialog } from "@progress/kendo-react-dialogs";
import DeleteDilog from "../../../../common/DeleteDilog";
import DropWithSearch from "../../../../common/Dropdown/DropWithSearch";
import retailersData from "./retailers";

const Retailers = () => {
  const [retailers, setRetailers] = useState([]);
  const [filteredRetailers, setFilteredRetailers] = useState([]);
  const [selectedRetailer, setSelectedRetailer] = useState(null);
  useEffect(() => {
    const savedRetailers = JSON.parse(localStorage.getItem("retailers")) || [];
    const filteredData = retailersData.filter(
      (retailerData) =>
        !savedRetailers.some(
          (savedRetailer) => savedRetailer.name === retailerData.text
        )
    );
    filteredData.sort((a, b) => a.text.localeCompare(b.text));
    setFilteredRetailers(filteredData);
    setRetailers(savedRetailers);
  }, []);

  const [visibleAddRetailer, setVisibleAddRetailer] = useState(false);
  const toggleDialogAddRetailer = () => {
    setVisibleAddRetailer(!visibleAddRetailer);
  };

  const handleAddRetailer = (selectedRetailer) => {
    setSelectedRetailer(selectedRetailer);
  };

  const handleSubmit = () => {
    if (selectedRetailer) {
      const newRetailer = {
        name: selectedRetailer.text,
        logo: selectedRetailer.logo,
      };
      const updatedRetailers = [...retailers, newRetailer];

      setRetailers(updatedRetailers);
      localStorage.setItem("retailers", JSON.stringify(updatedRetailers));

      const updatedFilteredRetailers = filteredRetailers.filter(
        (retailerData) => retailerData.text !== selectedRetailer.text
      );
      setFilteredRetailers(updatedFilteredRetailers);
      toggleDialogAddRetailer();
      setSelectedRetailer(null);
    }
  };

  // Delete Retailer
  const handleRemoveRetailer = (index) => {
    const removedRetailer = retailers[index];

    const updatedRetailers = [...retailers];
    updatedRetailers.splice(index, 1);
    setRetailers(updatedRetailers);
    localStorage.setItem("retailers", JSON.stringify(updatedRetailers));

    setFilteredRetailers((prevFilteredRetailers) => [
      ...prevFilteredRetailers,
      {
        id: removedRetailer.id,
        text: removedRetailer.name,
        logo: removedRetailer.logo,
      },
    ]);
  };

  const [deleteDialogVisible, setDeleteDialogVisible] = useState(false);
  const [deleteDialogIndex, setDeleteDialogIndex] = useState(null);
  const openDeleteDialog = (index) => {
    setDeleteDialogIndex(index);
    setDeleteDialogVisible(true);
  };

  return (
    <div>
      <Heading image={BG} heading={"Manage Retailers"} />
      <div className="m-3">
        <div className="shadow-container p-2 p-sm-3">
          <div className="py-4 px-2 d-flex justify-content-between align-items-center">
            <h3 className="font-md font-primary font-weight-700 letter-spacing-2">
              Your Retailers
            </h3>
            <PrimaryBtn
              fontWeight={600}
              text={"Add Retailer"}
              icon={"fa-solid fa-plus"}
              onClick={toggleDialogAddRetailer}
            />
          </div>
          <Row className="my-3">
            {retailers &&
              retailers.map((retailer, index) => (
                <Col xs={3} className="p-3">
                  <div className="shadow-container p-2 d-flex flex-column justify-content-center align-items-center">
                    <img className="py-2" src={retailer.logo} alt="Logo" />
                    <h3 className="py-3 font-md text-center font-primary font-weight-700 letter-spacing-2">
                      {retailer.name}
                    </h3>
                    <div className="pb-3">
                      <OutlineBtn
                        fontWeight={600}
                        text={"Delete Retailer"}
                        icon={"fa-solid fa-trash"}
                        onClick={() => openDeleteDialog(index)}
                      />
                    </div>
                  </div>
                  {deleteDialogVisible && deleteDialogIndex === index && (
                    <DeleteDilog
                      type={"Retailer"}
                      toggle={() => setDeleteDialogVisible(false)}
                      submit={() => {
                        handleRemoveRetailer(index);
                        setDeleteDialogVisible(false);
                      }}
                    />
                  )}
                </Col>
              ))}
          </Row>
        </div>
      </div>
      {visibleAddRetailer && (
        <Dialog title="Add Retailer" onClose={toggleDialogAddRetailer}>
          <Form>
            <Row>
              <DropWithSearch
                onChange={handleAddRetailer}
                searchData={filteredRetailers.sort((a, b) =>
                  a.text.localeCompare(b.text)
                )}
                suggest={true}
              />
            </Row>
            <div style={{ width: "max-content" }} className="mt-4 ms-auto">
              <PrimaryBtn
                disable={!selectedRetailer}
                text={"Submit"}
                onClick={handleSubmit}
              />
            </div>
          </Form>
        </Dialog>
      )}
    </div>
  );
};

export default Retailers;
