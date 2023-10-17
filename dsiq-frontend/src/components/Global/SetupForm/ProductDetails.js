import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";

import DropWithSearch from "../../common/Dropdown/DropWithSearch";
import retailersData from "../../../data/Retailers/retailers";

const ProductDetails = ({ setDetails }) => {
  const handleSelect = (event) => {
    console.log("Product Selected:", event);
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

export default ProductDetails;
