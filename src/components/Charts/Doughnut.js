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
    indexAxis: "y",
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

        ctx.font = `bolder ${0.02 * window.innerWidth}px Rubik`;
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
      ctx.font = ctx.font = `bolder ${0.03 * window.innerWidth}px Rubik`;
      ctx.textAlign = "center";
      ctx.fillStyle = "black";
      ctx.fillText("Total", width / 2, height / 2.5);
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

/*

const chartRef = useRef();

  useEffect(() => {
    const canvas = document.getElementById("canvas").getContext("2d");
    console.log(canvas);

    const tooltipCanvas = document
      .getElementById("tooltip-canvas")
      .getContext("2d");

    const gradientBlue = canvas.createLinearGradient(0, 0, 0, 150);
    gradientBlue.addColorStop(0, "#5555FF");
    gradientBlue.addColorStop(1, "#9787FF");

    const gradientRed = canvas.createLinearGradient(0, 0, 0, 150);
    gradientRed.addColorStop(0, "#FF55B8");
    gradientRed.addColorStop(1, "#FF8787");

    const gradientGrey = canvas.createLinearGradient(0, 0, 0, 150);
    gradientGrey.addColorStop(0, "#888888");
    gradientGrey.addColorStop(1, "#AAAAAA");

    window.arcSpacing = 0.15;
    window.segmentHovered = false;

    function textInCenter(value, label) {
      const ctx = tooltipCanvas.getContext("2d");
      ctx.clearRect(0, 0, tooltipCanvas.width, tooltipCanvas.height);

      ctx.restore();

      // Draw value
      ctx.fillStyle = "#333333";
      ctx.font = "24px sans-serif";
      ctx.textBaseline = "middle";

      // Define text position
      const textPosition = {
        x: Math.round((tooltipCanvas.width - ctx.measureText(value).width) / 2),
        y: tooltipCanvas.height / 2,
      };

      ctx.fillText(value, textPosition.x, textPosition.y);

      // Draw label
      ctx.fillStyle = "#AAAAAA";
      ctx.font = "8px sans-serif";

      // Define text position
      const labelTextPosition = {
        x: Math.round((tooltipCanvas.width - ctx.measureText(label).width) / 2),
        y: tooltipCanvas.height / 2,
      };

      ctx.fillText(label, labelTextPosition.x, labelTextPosition.y - 20);
      ctx.save();
    }

    ChartJS.elements.Arc.prototype.draw = function () {
      const ctx = this._chart.ctx;
      const vm = this._view;
      const sA = vm.startAngle;
      const eA = vm.endAngle;

      ctx.beginPath();
      ctx.arc(
        vm.x,
        vm.y,
        vm.outerRadius,
        sA + window.arcSpacing,
        eA - window.arcSpacing
      );
      ctx.strokeStyle = vm.backgroundColor;
      ctx.lineWidth = vm.borderWidth;
      ctx.lineCap = "round";
      ctx.stroke();
      ctx.closePath();
    };

    chartRef.current = new ChartJS(canvas, {
      type: "doughnut",
      data: {
        labels: ["Pink", "Grey", "Blue"],
        datasets: [
          {
            data: [400, 540, 290],
            backgroundColor: [gradientRed, gradientGrey, gradientBlue],
          },
        ],
      },
      cutoutPercentage: 80,
      elements: {
        arc: {
          borderWidth: 12,
        },
      },
      legend: {
        display: false,
      },
      animation: {
        onComplete: function (animation) {
          if (!window.segmentHovered) {
            const value = this.config.data.datasets[0].data.reduce(function (
              a,
              b
            ) {
              return a + b;
            },
            0);
            const label = "T O T A L";

            textInCenter(value, label);
          }
        },
      },
      tooltips: {
        enabled: false,
        custom: function (tooltip) {
          if (tooltip.body) {
            const line = tooltip.body[0].lines[0],
              parts = line.split(": ");
            textInCenter(parts[1], parts[0].split("").join(" ").toUpperCase());
            window.segmentHovered = true;
          } else {
            window.segmentHovered = false;
          }
        },
      },
    });

    function addData(chart, label, data) {
      chart.data.labels.push(label);
      chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
      });
      ChartJS.update();
    }

    document.getElementById("reload").addEventListener("click", function () {
      addData(window.chart, "TEST", 300);
    });

    return () => chartRef.current.destroy();
  }, []);
*/
