import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
// import { faker } from "@faker-js/faker";
ChartJS.register(ArcElement, Tooltip, Legend, Filler);
const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  layout: {
    padding: 0,
  },
  elements: {
    line: {
      tension: 0.2,
      borderWidth: 2,
      borderColor: "#d35400",
      fill: {
        target: "origin",
        above: "#f39c12", // Area will be red above the origin
      },
      backgroundColor: "rgba(47,97,68,0.5)",
    },
    point: {
      radius: 0,
      hitRadius: 0,
    },
  },
  scales: {
    y: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        display: false,
      },
    },
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        display: false,
      },
    },
  },
};

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      data: [0, 2, 2.5, 3, 4, 5, 5.3],
    },
  ],
};

export default function App() {
  return <Line options={options} data={data} />;
}
