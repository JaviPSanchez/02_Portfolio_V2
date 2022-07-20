import React from "react";
import { front } from "../assets/images/index";

export default function HomeCards() {
  return (
    <div className="absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20 flex justify-center items-center">
      <div className="flex flex-row justify-center items-center child:m-20 child:p-10">
        <div className="card--item-4 flex flex-col justify-center items-center font-Rubik text-4xl text-black text-center">
          <img width={200} src={front} alt="Not found" />
          <h2 className="font-Rubik uppercase text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6]">
            Front Development
          </h2>
          <p className="font-Rubik text-2xl mt-10 dark:text-white">
            <span className="text-4xl text-[#5555ff] font-bold">+3 </span>years
            trying to find the best way to communicate
          </p>
        </div>
        <div className="card--item-4 flex flex-col justify-center items-center font-Rubik text-4xl text-black text-center">
          <img width={200} src={front} alt="Not found" />
          <h2 className="font-Rubik uppercase text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6]">
            Software Engineering
          </h2>
          <p className="font-Rubik text-2xl mt-10 dark:text-white">
            +2 years giving life and shape to my apps
          </p>
        </div>
        <div className="card--item-4 flex flex-col justify-center items-center font-Rubik text-4xl text-black text-center">
          <img width={200} src={front} alt="Not found" />
          <h2 className="font-Rubik uppercase text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6]">
            Data Science
          </h2>
          <p className="font-Rubik text-2xl mt-10 dark:text-white">
            +2 years predicting the future...
          </p>
        </div>
      </div>
    </div>
  );
}
