import React from "react";
import Search from "../SearchBar";
export default function Data() {
  return (
    <div className="flex flex-col justify-start items-center w-full h-full p-2">
      <Search />

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
