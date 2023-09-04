import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";

import DropWithSearch from "../../common/Dropdown/DropWithSearch";
import retailersData from "../../../data/Retailers/retailers";

const ProductDetails = () => {
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
          />
        </Row>
      </Form>
    </div>
  );
};

export default ProductDetails;
