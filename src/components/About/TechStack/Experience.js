import React from "react";
import Doughnut from "../../Charts/Doughnut";
export default function Experience() {
  return (
    <div className="relative flex justify-center items-center row-start-3 row-end-6 col-start-1 col-end-4 bg-white dark:bg-dark2">
      <div className="w-full h-full p-10">
        <Doughnut />
      </div>
    </div>
  );
}
