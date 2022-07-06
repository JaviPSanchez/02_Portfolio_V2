import React from "react";
import VerticalChart from "../Charts/VerticalChart";
import Polar from "../Charts/PolarChart";
import badges from "./DataAbout";

export default function Me() {
  return (
    <div className="grid grid-rows-4 grid-cols-4 gap-6 w-full h-full child:rounded-xl drop-shadow-md">
      <div className="row-start-1 row-end-2 col-start-1 col-end-3 bg-grey5 dark:bg-dark2">
        <div className="p-8 h-full  flex flex-wrap justify-start items-center child:m-2">
          {badges.map((items) => {
            return (
              <div
                id={items.id}
                className="bg-grey4 rounded-full w-[45px] h-[45px] flex justify-center items-center"
              >
                {items.svg}
              </div>
            );
          })}
        </div>
      </div>

      <div className="row-start-2 row-end-4 col-start-3 col-end-5 bg-grey5 dark:bg-dark2">
        <VerticalChart />
      </div>
      <div className="row-start-2 row-end-5 col-start-1 col-end-3 bg-grey5 dark:bg-dark2">
        <div className="w-5/6 p-10 flex justify-center items-center">
          <Polar />
        </div>
      </div>
      <div className="row-start-1 row-end-2 col-start-3 col-end-4 bg-grey5 dark:bg-dark2"></div>
      <div className="row-start-1 row-end-2 col-start-4 col-end-5 bg-grey5 dark:bg-dark2"></div>
      <div className="row-start-4 row-end-5 col-start-3 col-end-5 bg-grey5 dark:bg-dark2"></div>
    </div>
  );
}
