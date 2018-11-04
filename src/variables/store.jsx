// ##############################
// // // table head data and table body data for Tables view
// #############################

const thead = [
  {
    name: "Name",
    width: "30%"
  },
  {
    name: "All",
    width: "20%"
  },
  {
    name: "Amount",
    width: "30%"
  },
  {
    name: "#",
    width: "20%"
  }
];

const tbody = [
  {
    className: "table-success",
    data: ["Pepsi", 3, 1]
  },
  {
    className: "",
    data: ["Donut", 6, 4]
  },
  {
    className: "",
    data: ["Eggs", 12, 6]
  },
  {
    className: "",
    data: ["Bacon", 1, 1]
  },
  {
    className: "",
    data: ["Pen", 10, 10]
  }
];

// data for <thead> of table in TableList view
// data for <tbody> of table in TableList view
export { thead, tbody };
