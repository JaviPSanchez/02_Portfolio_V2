import React from "react";
import Search from "../SearchBar";
export default function Data() {
  return (
    <div className="flex flex-col justify-start items-center w-full h-full p-2">
      <Search />

      <div className="grid grid-rows-8 grig-cols-6 gap-6 w-full h-full rounded-xl mt-4 p-4 overflow-scroll overflow-hidden scrollbar-hide">
        <button
          onClick={() => console.log("Click")}
          className="rounded-xl row-start-1 row-end-2 col-start-1 col-end-5 bg-gradient-to-br from-pink-500 to-orange-400 mb-10 p-10 shadow-xl clip-paralelipedo hover:scale-[1.01] ease-in duration-200"
        >
          <div className="flex justify-start items-center">
            <span className="ml-20 font-Rubik text-8xl w-fit text-white">
              #1
            </span>
            <span className="ml-10 text-6xl text-white">NLP</span>
          </div>
        </button>
        <div className="row-start-2 row-end-3 col-start-2 col-end-6 bg-quaternary mb-10 p-10 drop-shadow-md">
          <div className="font-Rubik text-8xl">#2</div>
        </div>
        <div className="row-start-3 row-end-4 col-start-1 col-end-5 bg-quaternary mb-10 p-10 drop-shadow-md">
          <div className="font-Rubik text-8xl">#3</div>
        </div>
        <div className="row-start-4 row-end-5 col-start-2 col-end-6 bg-quaternary mb-10 p-10 drop-shadow-md">
          Project4
        </div>
        <div className="row-start-6 row-end-7 col-start-1 col-end-5 bg-quaternary mb-10 p-10 drop-shadow-md">
          Project5
        </div>
        <div className="row-start-7 row-end-8 col-start-2 col-end-6 bg-quaternary mb-10 p-10 drop-shadow-md">
          Project6
        </div>
      </div>
    </div>
  );
}

/*
<button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Pink to orange
</span>

</button>

*/
