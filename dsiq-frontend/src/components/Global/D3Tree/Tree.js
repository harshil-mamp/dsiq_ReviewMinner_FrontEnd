import React from "react";
import Tree from "react-d3-tree";

const transformToHierarchy = (data) => {
  const hierarchyData = {
    name: "Root", // You can set a root node name here
    children: data.map((item) => ({
      name: item.label,
      children: item.days.map((dayItem) => ({
        name: dayItem.volume,
      })),
    })),
  };

  return hierarchyData;
};

const TreeChart = ({ selectedWordData }) => {
  const treeData =
    selectedWordData.length > 0
      ? transformToHierarchy(selectedWordData)
      : { name: "Single Node" };
  return (
    <div
      id="treeWrapper"
      style={{ width: "90%", margin: "0 auto", height: "100em" }}
    >
      <Tree data={treeData} />
    </div>
  );
};

export default TreeChart;
