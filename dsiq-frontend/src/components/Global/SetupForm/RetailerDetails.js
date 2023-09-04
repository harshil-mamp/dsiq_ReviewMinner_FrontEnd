import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";

import DropWithSearch from "../../common/Dropdown/DropWithSearch";
import retailersData from "../../../data/Retailers/retailers";

const RetailerDetails = () => {
  const [filteredRetailers, setFilteredRetailers] = useState([]);
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
          />
        </Row>
      </Form>
    </div>
  );
};

export default RetailerDetails;
