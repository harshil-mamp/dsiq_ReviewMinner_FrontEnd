import * as React from "react";
import { DropDownTree } from "@progress/kendo-react-dropdowns";
import { processTreeData, expandedState } from "./tree-data-operations";
const selectField = "selected";
const expandField = "expanded";
const dataItemKey = "id";
const textField = "text";
const subItemsField = "items";
const fields = {
  selectField,
  expandField,
  dataItemKey,
  subItemsField,
};
const TreeDropdown = ({ searchData }) => {
  const [value, setValue] = React.useState(null);
  const [expanded, setExpanded] = React.useState([searchData[0][dataItemKey]]);
  const [filter, setFilter] = React.useState({
    value: "",
    operator: "contains",
  });
  const onChange = (event) => setValue(event.value);
  const onExpandChange = React.useCallback(
    (event) => setExpanded(expandedState(event.item, dataItemKey, expanded)),
    [expanded]
  );
  const treeData = React.useMemo(
    () =>
      processTreeData(
        searchData,
        {
          expanded,
          value,
          filter,
        },
        fields
      ),
    [expanded, value, filter]
  );
  const onFilterChange = (event) => setFilter(event.filter);
  return (
    <div>
      <div>Categories:</div>
      <DropDownTree
        style={{
          width: "300px",
        }}
        placeholder="Please select ..."
        data={treeData}
        value={value}
        onChange={onChange}
        textField={textField}
        dataItemKey={dataItemKey}
        selectField={selectField}
        expandField={expandField}
        onExpandChange={onExpandChange}
        filterable={true}
        onFilterChange={onFilterChange}
        filter={filter.value}
      />
    </div>
  );
};
export default TreeDropdown;
