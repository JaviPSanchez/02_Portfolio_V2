import { useEffect, useRef, useState } from "react";
import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

Chart.register(...registerables);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
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
        color: "#000000",
        font: {
          size: 18,
        },
      },
    },
  },
  elements: {
    line: {
      fill: true,
      tension: 0.2,
      borderWidth: 3,
      borderColor: "#ffffff",
    },
    point: {
      radius: 4,
      pointBackgroundColor: "#ffffff",
    },
  },
  layout: {
    padding: 0,
  },

  scales: {
    yAxis: {
      display: false,
    },
    xAxis: {
      display: false,
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

    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        display: false,
        // stepSize: 100,
      },
    },
  },
};

export default function AreaChart({ gradientColor }) {
  const color1 = gradientColor[0];
  const color2 = gradientColor[1];

  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  useEffect(function () {
    // gracias al segundo renderizado creado por el hook useEffect podemos acceder
    //al chart
    const chart = chartRef.current;
    if (!chart) {
      return;
    }
    console.log(chart);

    // Chart nos permite acceder al object ctx "contexto"

    function createGradientColor(color) {
      const ctx = chart.ctx;
      const gradient = ctx.createLinearGradient(0, 0, 0, 200);
      gradient.addColorStop(0.5, color1);
      gradient.addColorStop(1, color2);
      return gradient;
    }
    const labels = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
    ];

    setChartData({
      labels,
      datasets: [
        {
          label: "Mis datos (Gradient)",
          data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
          tension: 0.3,
          backgroundColor: createGradientColor(),
        },
      ],
    });
  }, []);

  return <Line data={chartData} options={options} ref={chartRef} />;
}
