import React from "react";
// import Doughnut from "../Charts/Doughnut";
export default function Apps() {
  return (
    <div className="flex flex-col justify-start items-center w-full h-full p-2">
      <div className="flex flex-col w-full bg-grey1 rounded-xl p-4">
        <div className="w-1/2  bg-quaternary rounded-xl p-2 drop-shadow-md">
          Search bar
        </div>
      </div>

      <div className="flex flex-col w-full h-full bg-grey1 rounded-xl mt-4 p-4 overflow-scroll overflow-x-hidden scrollbar-hide">
        <div className="w-1/2 h-2/3 bg-quaternary mb-10 p-10 drop-shadow-md">
          Project1
        </div>
        <div className="w-1/2 h-2/3 bg-quaternary mb-10 p-10 drop-shadow-md">
          Project1
        </div>
        <div className="w-1/2 h-2/3 bg-quaternary mb-10 p-10 drop-shadow-md">
          Project1
        </div>
        <div className="w-1/2 h-2/3 bg-quaternary mb-10 p-10 drop-shadow-md">
          Project1
        </div>
        <div className="w-1/2 h-2/3 bg-quaternary mb-10 p-10 drop-shadow-md">
          Project1
        </div>
        <div className="w-1/2 h-2/3 bg-quaternary mb-10 p-10 drop-shadow-md">
          Project1
        </div>
      </div>
    </div>
  );
}
