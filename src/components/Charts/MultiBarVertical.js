import { useEffect, useRef, useState } from "react";
import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

Chart.register(...registerables);

export default function App() {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const options = {
    responsive: true,
    scales: {
      x: {
        display: true, // show/ hide x-axis
        grid: {
          display: false, // show/hide grid line in x-axis
        },
      },
      y: {
        display: false, // same as x-axis
        grid: {
          display: false,
        },
      },
    },

    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Bar Chart",
      },
    },
  };

  // const plugins = [];

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) {
      return;
    }
    console.log(chart);

    function createGradientColor(color) {
      const ctx = chart.ctx;
      const gradientBlue = ctx.createLinearGradient(0, 0, 0, 150);
      gradientBlue.addColorStop(0, "#5555FF");
      gradientBlue.addColorStop(1, "#9787FF");

      const gradientRed = ctx.createLinearGradient(0, 0, 0, 150);
      gradientRed.addColorStop(0, "#FF55B8");
      gradientRed.addColorStop(1, "#FF8787");

      const gradientGrey = ctx.createLinearGradient(0, 0, 0, 150);
      gradientGrey.addColorStop(0, "#888888");
      gradientGrey.addColorStop(1, "#AAAAAA");

      return [gradientBlue, gradientRed, gradientGrey];
    }

    const labels = ["Formation", "Experience", "Certification"];

    setChartData({
      labels,
      datasets: [
        {
          label: "Weekly Sales",
          data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
          backgroundColor: createGradientColor(),
          borderColor: "#FFFFFF",
          borderWidth: 1,
          borderRadius: 100,
          barThickness: 20,
        },
        {
          label: "Weekly Sales",
          data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
          backgroundColor: createGradientColor(),
          borderColor: "#FFFFFF",
          borderWidth: 1,
          borderRadius: 20,
          barThickness: 20,
        },
        {
          label: "Weekly Sales",
          data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
          backgroundColor: createGradientColor(),
          borderColor: "#FFFFFF",
          borderWidth: 1,
          borderRadius: 20,
          barThickness: 20,
        },
      ],
    });
  }, []);

  return <Bar ref={chartRef} options={options} data={chartData} />;
}
