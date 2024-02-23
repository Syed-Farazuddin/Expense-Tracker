// import { enabled } from "express/lib/application";
// import { type } from "express/lib/response";
// import { colours } from "nodemon/lib/config/defaults";
// import React from "react";
// import ReactApexChart from "react-apexcharts";
// function Charts({ expense = 100, income = 100 }) {
//   const series = [income, expense];
//   const options = {
//     chart: {
//       width: 380,
//       type: "pie",
//     },
//     labels: ["Income", "Expense"],
//   };

//   return (
//     <ReactApexChart
//       options={options}
//       series={series}
//       width={"500"}
//       type="pie"
//     />
//   );
// }

// export default Charts;

import { enabled } from "express/lib/application";
import React from "react";
import { ReactApexChart } from "react-apexcharts";
const options = {
  labels: ["Expense", "Income"],
  colors: ["#0000", "#FD5E53"],
  chart: {
    width: "50px",
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      labels: {
        show: false,
      },
    },
  },
};
function ChartSummary({ expense, income }) {
  return (
    <div>
      <Chart
        options={options}
        series={[expense, income]}
        type="pie"
        width={"100%"}
        height={"auto"}
      ></Chart>
    </div>
  );
}

export default ChartSummary;
