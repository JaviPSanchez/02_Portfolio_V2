import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";
import Bars from "../../assets/svg/bars";
// import { faker } from "@faker-js/faker";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "Chart.js Horizontal Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 2",
      data: [400, 540, 290],
      backgroundColor: ["#9787FF", "#FF55B8", "#888888"],
    },
  ],
};

export default function App() {
  return (
    <>
      <Doughnut options={options} data={data} />
      {/* <canvas id="canvas" height="200"></canvas> */}
      {/* <canvas id="tooltip-canvas" width="150" height="100"></canvas> */}
      <button type="button" id="reload" class="btn-reload">
        <Bars fillColor={"#AAAAAA"} />
      </button>
    </>
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
