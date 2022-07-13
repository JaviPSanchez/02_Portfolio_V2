import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
// import { faker } from "@faker-js/faker";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
      align: "start",
      labels: {
        boxWidth: 7,
        usePointStyle: true,
        pointStyle: "circle",
      },
      title: {
        text: "Sales",
        display: true,
        color: "#000",
        font: {
          size: 18,
        },
      },
    },
  },
  elements: {
    bar: {
      barPercentage: 0.3,
      categoryPercentage: 1,
    },
  },
  layout: {
    padding: 10,
  },

  scales: {
    yAxis: {
      max: 6,
    },
    y: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        display: false,
      },
    },
    xAxis: {
      display: false,
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

export const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Data1",

      borderRadius: 30,
      barThickness: 10,
      data: [1, 2, 2.5, 3, 4, 5, 5.3],
      backgroundColor: "rgba(47,97,68,0.5)",
    },
    {
      label: "Data2",

      borderRadius: 30,
      barThickness: 10,
      data: [0.5, 3, 2.5, 3, 4, 5, 5.3],
      backgroundColor: "rgba(50,20,80,0.5)",
    },
  ],
};

export default function App() {
  return <Bar data={data} options={options} />;
}
