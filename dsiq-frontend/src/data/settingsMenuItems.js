const settingsMenuItems = [
  {
    text: "Manage Users",
    id: 1,
    route: "/manage-users",
  },
  {
    text: "Retailers",
    id: 2,
    route: "/manage-retailers",
  },
  {
    text: "Billing",
    id: 3,
    route: "/billing",
    items: [
      {
        text: "Current Subscription",
        route: "/manage-users",
        id: 4,
      },
      {
        text: "Invoices",
        route: "/manage-retailers",
        id: 5,
      },
      {
        text: "Upgrade Plan",
        route: "/users",
        id: 6,
      },
      {
        text: "Payment Method",
        route: "/billing",
        id: 7,
      },
    ],
  },
];

export default settingsMenuItems;
