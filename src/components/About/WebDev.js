import React from "react";
import { webProjects } from "../../assets/data";

export default function WebDev() {
  return (
    <div className="flex flex-col justify-start items-center w-full h-full">
      <div className="w-full flex flex-wrap bg-transparent rounded-xl overflow-scroll overflow-x-hidden scrollbar-hide">
        {webProjects.map((item) => {
          return (
            <div className="w-1/3 p-10" key={item.id}>
              {item.element}
            </div>
          );
        })}
      </div>
    </div>
  );
}
