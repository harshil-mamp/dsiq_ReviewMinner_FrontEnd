const menuItems = [
  {
    title: "Ratings and Reviews",
    route: "/reviews",
    children: [
      { title: "Dashboard", route: "/dashboard" },
      {
        title: "Features",
        route: "/settings",
        children: [
          { title: "Ratings & Reviews", route: "/reviews" },
          { title: "ReviewMedia", route: "/" },
          { title: "ReviewMiner", route: "/" },
          { title: "Category Insights", route: "/" },
        ],
      },
    ],
  },
  {
    title: "ReviewMiner AI",
    route: "/users",
  },
  {
    title: "Take Action",
    route: "/",
    children: [
      { title: "Add Retailers", route: "/" },
      { title: "Add Products", route: "/" },
      { title: "Missing Reviews", route: "/" },
    ],
  },
  {
    title: "Help & Support",
    route: "/",
  },
];

export default menuItems;
