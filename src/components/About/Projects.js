import React from "react";

export default function projects() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full p-2">
      <div className="flex flex-col w-full bg-grey1 rounded-xl mt-2 p-4">
        <div className="w-1/2 mb-10 bg-quaternary rounded-xl p-2 drop-shadow-md">
          Navbar
        </div>
      </div>

      <div className="flex flex-col w-full h-2/3 bg-grey1 rounded-xl mt-2 p-4 overflow-scroll overflow-x-hidden scrollbar-hide">
        <div className="w-1/2 h-1/2 bg-quaternary mb-10 p-10 drop-shadow-md">
          Project1
        </div>
        <div className="w-1/2 h-1/2 bg-quaternary mb-10 p-10 drop-shadow-md">
          Project1
        </div>
        <div className="w-1/2 h-1/2 bg-quaternary mb-10 p-10 drop-shadow-md">
          Project1
        </div>
        <div className="w-1/2 h-1/2 bg-quaternary mb-10 p-10 drop-shadow-md">
          Project1
        </div>
        <div className="w-1/2 h-1/2 bg-quaternary mb-10 p-10 drop-shadow-md">
          Project1
        </div>
        <div className="w-1/2 h-1/2 bg-quaternary mb-10 p-10 drop-shadow-md">
          Project1
        </div>
      </div>
    </div>
  );
}
