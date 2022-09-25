import React from "react";
import { badgesBack } from "../../../assets/data";
import Area from "../../Charts/Area";

export default function Back() {
  return (
    <div className="row-start-1 row-end-3 col-start-4 col-end-7 bg-white dark:bg-dark2 overflow-hidden">
      <div className="card--item-2 w-full flex flex-col just justify-start items-center hover:scale-105 duration-300">
        <div className="w-full flex justify-between p-2">
          <h1 className="font-Rubik font-bold text-6xl p-6 text-white">
            Back-Stack
          </h1>
        </div>
        <div className="py-2 px-6 w-full h-full flex flex-wrap justify-start items-center child:m-2">
          {badgesBack.map((items) => {
            return (
              <div
                key={items.id}
                className="bg-transparent overflow-hidden rounded-full w-[38px] h-[38px] flex justify-center items-center hover:scale-125 duration-300"
              >
                {items.image}
              </div>
            );
          })}
        </div>
        <div className="w-full h-1/2 mb-6 p py-4">
          <Area gradientColor={["#FF55B8", "#FF8787"]} />
        </div>
      </div>
    </div>
  );
}
