import React from "react";
import { webProjects } from "../../assets/data";

export default function WebDev() {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
      <div className="w-full flex flex-wrap bg-white dark:bg-dark2 rounded-xl overflow-scroll overflow-x-hidden scrollbar-hide">
        {webProjects.map((item) => {
          return (
            <div
              className="w-1/3 p-10 hover:scale-105 duration-500 cursor-pointer"
              key={item.id}
            >
              {item.element}
            </div>
          );
        })}
      </div>
    </div>
  );
}
