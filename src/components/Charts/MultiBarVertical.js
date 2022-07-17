import { useEffect, useRef, useState } from "react";
import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
// import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(...registerables);

const labels = ["Formation", "Experience", "Certification"];

export default function App() {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const options = {
    categoryPercentage: 0.5,
    barPercentage: 1,
    responsive: true,
    scales: {
      x: {
        display: true, // show/ hide x-axis
        grid: {
          display: true, // show/hide grid line in x-axis
        },
      },
      y: {
        display: true, // same as x-axis
        beginAtZero: true,
        //Evita llegar hasta arriba del grafico
        grace: "20%",
        grid: {
          display: true,
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

  const multiBarlogo = {
    id: "multiBarLogo",
    afterDatasetDraw(chart, args, options) {
      const { ctx } = chart;
      ctx.save();
      // console.log(chart);
      // console.log(chart.getDatasetMeta(0).data[0].x);

      const image = new Image();
      image.src = require("../../assets/images/html.png");

      for (let i = 0; i <= labels.length - 1; i++) {
        ctx.drawImage(
          image,
          chart.getDatasetMeta(0).data[i].x - 35 / 2,
          chart.getDatasetMeta(0).data[i].y - 35,
          35,
          35
        );
        ctx.drawImage(
          image,
          chart.getDatasetMeta(1).data[i].x - 35 / 2,
          chart.getDatasetMeta(1).data[i].y - 35,
          35,
          35
        );
        ctx.drawImage(
          image,
          chart.getDatasetMeta(2).data[i].x - 35 / 2,
          chart.getDatasetMeta(2).data[i].y - 35,
          35,
          35
        );
      }

      ctx.restore();
    },
  };

  const plugins = [multiBarlogo];

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

    setChartData({
      labels,
      datasets: [
        {
          label: "Weekly Sales",
          data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
          backgroundColor: createGradientColor(),
          borderColor: "transparent",
          borderWidth: 5,
          borderRadius: 100,
          barThickness: 30,
        },
        {
          label: "Weekly Sales",
          data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
          backgroundColor: createGradientColor(),
          borderColor: "transparent",
          borderWidth: 5,
          borderRadius: 100,
          barThickness: 30,
        },
        {
          label: "Weekly Sales",
          data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
          backgroundColor: createGradientColor(),
          borderColor: "transparent",
          borderWidth: 5,
          borderRadius: 100,
          barThickness: 30,
        },
      ],
    });
  }, []);

  return (
    <Bar ref={chartRef} options={options} data={chartData} plugins={plugins} />
  );
}
