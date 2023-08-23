import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  MultiSelectTree,
  getMultiSelectTreeValue,
} from "@progress/kendo-react-dropdowns";
import {
  processMultiSelectTreeData,
  expandedState,
} from "./multiselecttree-data-operations";
const dataItemKey = "id";
const checkField = "checkField";
const checkIndeterminateField = "checkIndeterminateField";
const subItemsField = "items";
const expandField = "expanded";
const textField = "text";
const fields = {
  dataItemKey,
  checkField,
  checkIndeterminateField,
  expandField,
  subItemsField,
};
const TreeMultiSelect = ({ searchData }) => {
  const [value, setValue] = React.useState([]);
  const [expanded, setExpanded] = React.useState([searchData[0][dataItemKey]]);
  const [filter, setFilter] = React.useState(null);
  const onChange = (event) =>
    setValue(
      getMultiSelectTreeValue(searchData, {
        ...fields,
        ...event,
        value,
      })
    );
  const onExpandChange = React.useCallback(
    (event) => setExpanded(expandedState(event.item, dataItemKey, expanded)),
    [expanded]
  );
  const treeData = React.useMemo(
    () =>
      processMultiSelectTreeData(searchData, {
        expanded,
        value,
        filter,
        ...fields,
      }),
    [expanded, value, filter]
  );
  const onFilterChange = (event) => setFilter(event.filter);
  return (
    <div>
      <div>Categories:</div>
      <MultiSelectTree
        style={{
          width: "300px",
        }}
        data={treeData}
        value={value}
        onChange={onChange}
        placeholder="Please select ..."
        textField={textField}
        dataItemKey={dataItemKey}
        checkField={checkField}
        checkIndeterminateField={checkIndeterminateField}
        expandField={expandField}
        subItemsField={subItemsField}
        onExpandChange={onExpandChange}
        filterable={true}
        onFilterChange={onFilterChange}
      />
    </div>
  );
};
export default TreeMultiSelect;
