import { useEffect, useRef, useState } from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(...registerables);

export default function DoughnutChart() {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({
    datasets: [],
  });

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
      },
      tooltip: {
        enabled: false,
      },
    },

    cutout: "80%",
  };

  const showValueHover = {
    id: "showValueHover",
    afterDraw: function (chart, args, options) {
      const {
        ctx,
        chartArea: { left, right, top, bottom, width, height },
      } = chart;
      ctx.save();
      // console.log(ctx);

      if (chart._active.length > 0) {
        const textLabel = chart.config.data.labels[chart._active[0].index];
        const numberLabel =
          chart.config.data.datasets[chart._active[0].datasetIndex].data[
            chart._active[0].index
          ];
        const color =
          chart.config.data.datasets[chart._active[0].datasetIndex]
            .backgroundColor[chart._active[0].index];

        ctx.font = `bolder ${0.002 * window.innerWidth}rem Rubik`;
        ctx.textAlign = "center";
        ctx.fillStyle = color;
        // ctx.fillText("Test", left = x, top = y);
        ctx.fillText(`${textLabel}`, width / 2, height / 1.6 + top);
        ctx.fillText(`${numberLabel}`, width / 2, height / 1.4 + top);
      }
      ctx.restore();
    },
  };

  const stackedText = {
    id: "stackedText",
    afterDatasetDraw(chart, args, options) {
      const {
        ctx,
        data,
        chartArea: { left, right, top, bottom, width, height },
      } = chart;
      console.log(window.innerWidth);

      // console.log(data.datasets[0].data[0]);
      ctx.save();
      ctx.font = `bolder ${0.002 * window.innerWidth}rem Rubik`;
      ctx.textAlign = "center";
      ctx.fillStyle = `white`;
      ctx.fillText("Total projects", width / 2, height / 2.5);
      ctx.restore();

      ctx.beginPath();
      ctx.lineWidth = 8;
      ctx.lineCap = "round";
      ctx.moveTo(left + width / 4, height / 2 + top);
      ctx.lineTo(right - width / 4, height / 2 + top);
      ctx.stroke();
      ctx.restore();
    },
  };

  const plugins = [showValueHover, stackedText];

  useEffect(function () {
    const chart = chartRef.current;
    if (!chart) {
      return;
    }
    // console.log(chart);

    function createGradientColor(color) {
      const ctx = chart.ctx;
      const gradientFront = ctx.createLinearGradient(0, 0, 0, 150);
      gradientFront.addColorStop(0, "#5555FF");
      gradientFront.addColorStop(1, "#9787FF");

      const gradientRed = ctx.createLinearGradient(0, 0, 0, 150);
      gradientRed.addColorStop(0, "#FF55B8");
      gradientRed.addColorStop(1, "#FF8787");

      const gradientGrey = ctx.createLinearGradient(0, 0, 0, 150);
      gradientGrey.addColorStop(0, "#888888");
      gradientGrey.addColorStop(1, "#AAAAAA");

      return [gradientFront, gradientRed, gradientGrey];
    }

    setChartData({
      labels: ["Front-end", "Back-end", "Data Science"],
      datasets: [
        {
          label: "Skills",
          data: [4, 2, 6],
          hoverOffset: 10,
          backgroundColor: createGradientColor(),
          borderWidth: 10,
          borderColor: "transparent",
          borderRadius: {
            outerStart: 50,
            outerEnd: 50,
            innerStart: 50,
            innerEnd: 50,
          },
        },
      ],
    });
  }, []);

  return (
    <Doughnut
      ref={chartRef}
      options={options}
      data={chartData}
      plugins={plugins}
    />
  );
}
