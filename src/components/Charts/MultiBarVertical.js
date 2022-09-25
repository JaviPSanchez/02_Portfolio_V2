import { useEffect, useRef, useState } from "react";
import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(...registerables);

export default function App() {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      xAxes: {
        display: true, // show/hide x-axis
        position: "top",
        grid: {
          display: false, // show/hide grid line in x-axis
          // color: "red",
          borderColor: "transparent",
        },
        ticks: {
          font: {
            size: 18,
            family: "Rubik",
            weight: "bold",
          },
          color: (localStorage["current-theme"] = "light" ? "white" : "black"),
        },
      },
      yAxes: {
        display: true,
        ticks: {
          font: {
            size: 18,
            family: "Rubik",
            weight: "bold",
          },
          color: "white",

          stepSize: 1,
          maxTicksLevel: 16,
          callback: (context, index) => {
            // console.log(context);
            return context;
          },
        },
        grace: "20%",
        beginAtZero: true,
        min: 2007,
        max: 2023,
        grid: {
          display: true,
          color: "white",
          borderColor: "transparent",
          borderDash: [12],
          lineWidth: 1.5,
          tickColor: "transparent",
        },
      },
    },
    plugins: {
      tooltip: {
        enabled: false,
        // yAlign: "bottom",
        callbacks: {
          label: (context) => {
            console.log(context.parsed.x);
          },
        },
      },
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

  const multiBarlogo1 = {
    id: "multiBarLogo",
    afterDatasetDraw(chart, args, options) {
      const { ctx } = chart;
      ctx.save();
      // console.log(chart);
      console.log(chart.getDatasetMeta(0));

      const image1 = new Image();
      const image2 = new Image();
      const image3 = new Image();
      const image4 = new Image();
      const image5 = new Image();
      image1.src = require("../../assets/images/html.png");
      image2.src = require("../../assets/images/css.png");
      image3.src = require("../../assets/images/js.png");
      image4.src = require("../../assets/images/three.png");
      image5.src = require("../../assets/images/python.png");

      ctx.drawImage(
        image1,
        chart.getDatasetMeta(0).data[0].x - 35 / 2,
        chart.getDatasetMeta(0).data[0].y - 35,
        35,
        35
      );
      ctx.drawImage(
        image2,
        chart.getDatasetMeta(0).data[1].x - 35 / 2,
        chart.getDatasetMeta(0).data[1].y - 35,
        35,
        35
      );
      ctx.drawImage(
        image3,
        chart.getDatasetMeta(0).data[2].x - 35 / 2,
        chart.getDatasetMeta(0).data[2].y - 35,
        35,
        35
      );
      ctx.drawImage(
        image4,
        chart.getDatasetMeta(1).data[0].x - 35 / 2,
        chart.getDatasetMeta(1).data[0].y - 35,
        35,
        35
      );
      ctx.drawImage(
        image5,
        chart.getDatasetMeta(1).data[1].x - 35 / 2,
        chart.getDatasetMeta(1).data[1].y - 35,
        35,
        35
      );

      ctx.restore();
    },
  };

  const plugins = [multiBarlogo1];

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) {
      return;
    }
    console.log(chart);

    function createGradientColor() {
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
      labels: ["Formation", "Experience", "Certification"],
      datasets: [
        {
          data: [
            [2007, 2009], //FP2
            [2015, 2016], //CT
            [2020, 2021], // FRONTEND1
          ],
          backgroundColor: createGradientColor(),
          borderColor: "transparent",
          borderWidth: 5,
          borderRadius: 100,
          barThickness: 30,
          borderSkipped: false,
        },
        {
          data: [
            [2009, 2014], //BAC+3
            [2016, 2018], //AIRBUS
            [2020, 2021], // FRONTEND2
          ],
          backgroundColor: createGradientColor(),
          borderColor: "transparent",
          borderWidth: 5,
          borderRadius: 100,
          barThickness: 30,
          borderSkipped: false,
        },
        {
          data: [
            [2015, 2016], //MSC+1
            [2016, 2017], //UPMRACING
            [2022, 2023], //Datacamp
          ],
          backgroundColor: createGradientColor(),
          borderColor: "transparent",
          borderWidth: 5,
          borderRadius: 100,
          barThickness: 30,
          borderSkipped: false,
        },
        {
          data: [
            [2016, 2017], //MSC+1
            [2017, 2017], //NETEX
            [2022, 2023], //LEARNINGENGINEERING
          ],
          backgroundColor: createGradientColor(),
          borderColor: "transparent",
          borderWidth: 5,
          borderRadius: 100,
          barThickness: 30,
          borderSkipped: false,
        },
        {
          data: [
            [2021, 2022], //FULLSTACK
            [2017, 2021], //RENAULT
            [2022, 2023], //LEARNINGENGINEERING
          ],
          backgroundColor: createGradientColor(),
          borderColor: "transparent",
          borderWidth: 5,
          borderRadius: 100,
          barThickness: 30,
          borderSkipped: false,
        },
      ],
    });
  }, []);

  return (
    <Bar ref={chartRef} options={options} data={chartData} plugins={plugins} />
  );
}
