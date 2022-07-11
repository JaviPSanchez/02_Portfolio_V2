import React from "react";

import mobileFrame from "../../assets/images/mobileFrame.png";
export default function Apps() {
  return (
    <div className="flex flex-col justify-start items-center w-full h-full">
      <div className="w-full flex flex-wrap justify-center items-center bg-transparent dark:bg-dark2 rounded-xl mt-4 p-4 overflow-scroll overflow-x-hidden scrollbar-hide">
        <div className="bg-dark2 w-1/3 rounded-xl">
          <img
            className="max-w-1/2 h-2/3 drop-shadow-md"
            src={mobileFrame}
            alt="picture1"
          />
          <h1 className="text-6xl text-white">Health App</h1>
        </div>
      </div>
    </div>
  );
}
