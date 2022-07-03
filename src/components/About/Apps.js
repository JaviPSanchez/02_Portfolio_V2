import React from "react";
import Search from "../SearchBar";
import mobileFrame from "../../assets/images/mobileFrame.png";
export default function Apps() {
  return (
    <div className="flex flex-col justify-start items-center w-full h-full p-2">
      <Search />

      <div className="flex flex-rows bg-grey1 rounded-xl mt-4 p-4 overflow-scroll overflow-x-hidden scrollbar-hide">
        <img
          className="max-w-full object-contain"
          src={mobileFrame}
          alt="picture1"
        />
        <img
          className="max-w-full object-contain"
          src={mobileFrame}
          alt="picture1"
        />
      </div>
    </div>
  );
}
