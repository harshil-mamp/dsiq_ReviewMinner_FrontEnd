import React from "react";
import Tree from "react-d3-tree";

const orgChart = {
  name: "CEO",
  children: [
    {
      name: "Manager",
      attributes: {
        department: "Production",
      },
      children: [
        {
          name: "Foreman1",
          attributes: {
            department: "Fabrication",
          },
          children: [
            {
              name: "Worker",
              children: [
                {
                  name: "Worker1",
                },
                {
                  name: "Worker2",
                },
                {
                  name: "Worker3",
                },
              ],
            },
          ],
        },
        {
          name: "Foreman2",
          attributes: {
            department: "Assembly",
          },
          children: [
            {
              name: "Worker21",
            },
          ],
        },
      ],
    },
    {
      name: "Manager",
      attributes: {
        department: "Production",
      },
      children: [
        {
          name: "Foreman3",
          attributes: {
            department: "Fabrication",
          },
          children: [
            {
              name: "Worker31",
              children: [
                {
                  name: "Worker311",
                },
                {
                  name: "Worker312",
                  children: [
                    {
                      name: "Worker3121",
                    },
                    {
                      name: "Worker3122",
                    },
                    {
                      name: "Worker3123",
                    },
                  ],
                },
                {
                  name: "Worker313",
                },
              ],
            },
          ],
        },
        {
          name: "Foreman",
          attributes: {
            department: "Assembly",
          },
          children: [
            {
              name: "Worker41",
            },
          ],
        },
      ],
    },
    {
      name: "Manager",
      attributes: {
        department: "Production",
      },
      children: [
        {
          name: "Foreman",
          attributes: {
            department: "Fabrication",
          },
          children: [
            {
              name: "Worker",
            },
          ],
        },
        {
          name: "Foreman",
          attributes: {
            department: "Assembly",
          },
          children: [
            {
              name: "Worker",
            },
          ],
        },
      ],
    },
  ],
};

const TreeChart = () => {
  return (
    <div
      id="treeWrapper"
      style={{ width: "90%", margin: "0 auto", height: "100em" }}
    >
      <Tree data={orgChart} />
    </div>
  );
};

export default TreeChart;
