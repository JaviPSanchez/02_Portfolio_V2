import Bars from "../../assets/svg/bars";
import { useEffect, useRef, useState } from "react";
import { Chart, registerables } from "chart.js";
import { Doughnut } from "react-chartjs-2";
Chart.register(...registerables);

export default function Test() {
  const chartRef = useRef(null);
  const toolTipRef = useRef(null);
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  //   const [toolTip, setToolTip] = useState();

  useEffect(function () {
    const scores = [400, 540, 290];
    const labels = ["Pink", "Grey", "Blue"];
    const chart = chartRef.current;
    if (!chart | !toolTipRef) {
      return;
    }
    const toolTip = toolTipRef.current;
    console.log(chart);
    console.log(toolTip);

    // Chart nos permite acceder al object ctx "contexto"

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

    function textInCenter(value, label) {
      const ctx = toolTip.ctx;
      ctx.clearRect(0, 0, toolTip.width, toolTip.height);

      ctx.restore();

      // Draw value
      ctx.fillStyle = "#333333";
      ctx.font = "24px sans-serif";
      ctx.textBaseline = "middle";

      // Define text position
      var textPosition = {
        x: Math.round((toolTip.width - ctx.measureText(value).width) / 2),
        y: toolTip.height / 2,
      };

      ctx.fillText(value, textPosition.x, textPosition.y);

      // Draw label
      ctx.fillStyle = "#AAAAAA";
      ctx.font = "8px sans-serif";

      // Define text position
      var labelTextPosition = {
        x: Math.round((toolTip.width - ctx.measureText(label).width) / 2),
        y: toolTip.height / 2,
      };

      ctx.fillText(label, labelTextPosition.x, labelTextPosition.y - 20);
      ctx.save();
    }

    setChartData({
      labels,
      datasets: [
        {
          label: "Mis datos (Gradient)",
          data: scores,
          tension: 0.3,
          backgroundColor: createGradientColor(),
        },
      ],
      options: {
        elements: {
          arc: {
            outerStart: 50,
            outerEnd: 50,
            innerStart: 50,
            innerEnd: 50,
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
              var line = tooltip.body[0].lines[0],
                parts = line.split(": ");
              textInCenter(
                parts[1],
                parts[0].split("").join(" ").toUpperCase()
              );
              window.segmentHovered = true;
            } else {
              window.segmentHovered = false;
            }
          },
        },
      },
    });
  }, []);

  return (
    <div className="p-2 max-w-[300px] m-0 h-[375px] rounded-xl bg-[#fff] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] overflow-hidden shadow-lg">
      {/* Custom information */}
      <div className="h-[150px] p-2">
        <h3 className="font-Rubik text-2xl text-[#aaa]">Chart.js</h3>
        <p className="font-Rubik text-xl text-[#aaa]">Smooth doughnut</p>
      </div>

      {/* Canvas for Chart.js */}
      <Doughnut ref={chartRef} data={chartData}></Doughnut>

      {/* Custom tooltip canvas*/}
      <canvas
        ref={toolTipRef}
        className="absolute top-[200px] left-[75px]"
        width="150"
        height="100"
      ></canvas>

      {/*  Reload button */}
      <button type="button" id="reload" class="btn-reload">
        <Bars fillColor={"#CCDBE0"} />
      </button>
    </div>
  );
}

/*
#tooltip-canvas {
  position: absolute;
  top: 200px;
  left: 75px;
}

.btn-reload {
  position: absolute;
  top: 280px;
  left: 50%;
  width: 30px;
  margin-left: -15px;
  -webkit-appearance: none;
  appearance: none;
  border: 0;
  background: transparent;
  outline: none;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s;
}

.btn-reload:hover {
  opacity: 1;
}

*/
