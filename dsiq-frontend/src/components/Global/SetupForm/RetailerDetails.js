import React from "react";
import { Row, Form } from "react-bootstrap";

import DropWithSearch from "../../common/Dropdown/DropWithSearch";
import retailersData from "../../../data/Retailers/retailers";

const RetailerDetails = ({ setDetails }) => {
  const handleSelect = (event) => {
    console.log("Retailer Selected:", event);
    if (setDetails) {
    }
    setDetails(event);
  };
  return (
    <div>
      <Form>
        <Row>
          <DropWithSearch
            // onChange={handleAddRetailer}
            label={"Select Retailers: "}
            searchData={retailersData.sort((a, b) =>
              a.text.localeCompare(b.text)
            )}
            suggest={true}
            onChange={(value) => handleSelect(value)}
          />
        </Row>
      </Form>
    </div>
  );
};

export default RetailerDetails;
