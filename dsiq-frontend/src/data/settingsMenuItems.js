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
        route: "/billing",
        id: 4,
      },
      {
        text: "Invoices",
        route: "/billing",
        id: 5,
      },
      {
        text: "Upgrade Plan",
        route: "/billing",
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
