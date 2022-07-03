import React from "react";
import VerticalChart from "../Charts/VerticalChart";
import HorizontalChart from "../Charts/HorizontalChart";
import Doughnut from "../Charts/Doughnut";
export default function Me() {
  return (
    <div className="grid grid-rows-4 grid-cols-4 gap-6 w-full h-full child:rounded-xl drop-shadow-md">
      <div className="row-start-1 row-end-2 col-start-1 col-end-3 bg-grey5">
        1
      </div>
      <div className="row-start-1 row-end-3 col-start-3 col-end-5 bg-grey5">
        <HorizontalChart />
      </div>
      <div className="row-start-2 row-end-4 col-start-1 col-end-3 bg-grey5">
        <VerticalChart />
      </div>
      <div className="row-start-3 row-end-5 col-start-3 col-end-4 bg-grey5">
        <Doughnut />
      </div>
      <div className="row-start-3 row-end-5 col-start-4 col-end-5 bg-grey5">
        <Doughnut />
      </div>
      <div className="row-start-4 row-end-5 col-start-1 col-end-3 bg-grey5">
        6
      </div>
    </div>
  );
}
