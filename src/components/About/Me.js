import React from "react";
import Bar from "../Charts/Bar";
import Doughnut from "../Charts/Doughnut";
import { badgesFront, badgesBack, badgesData } from "../../assets/data";
import styles from "../../styles/Global";
import Area from "../Charts/Area";

export default function Me() {
  return (
    <div className="grid grid-rows-4 grid-cols-8 gap-6 w-full h-full child:rounded-xl drop-shadow-md">
      <div className="relative row-start-1 row-end- col-start-1 col-end-5 bg-grey5 dark:bg-dark2">
        <div className={`${styles.title}`}>Front-Stack</div>
        <div className="relative z-100 w-ful h-full flex flex-row just justify-start items-center overflow-hidden">
          <div className="p-8 w-1/2 h-full flex flex-wrap justify-start items-center child:m-2">
            {badgesFront.map((items) => {
              return (
                <div
                  id={items.id}
                  className="bg-transparent overflow-hidden rounded-full w-[45px] h-[45px] flex justify-center items-center"
                >
                  {items.image}
                </div>
              );
            })}
          </div>
          <div className="absolute right-0 -bottom-5 w-2/3 h-full">
            <Area />
          </div>
        </div>
      </div>

      <div className="relative row-start-2 row-end-5 col-start-5 col-end-9 bg-grey5 dark:bg-dark2">
        <div className={`${styles.title}`}>Formation</div>
        <Bar />
      </div>
      <div className="relative flex justify-center items-center row-start-3 row-end-5 col-start-1 col-end-4 bg-grey5 dark:bg-dark2">
        <div className={`${styles.title}`}>Experience</div>
        <div className="w-full h-full p-10">
          <Doughnut />
        </div>
      </div>
      <div className="relative row-start-2 row-end-3 col-start-1 col-end-5 bg-grey5 dark:bg-dark2">
        <div className={`${styles.title}`}>Back-Stack</div>
        <div className="relative z-100 w-full h-full flex flex-row just justify-start items-center overflow-hidden">
          <div className="p-8 h-full  flex flex-wrap justify-start items-center child:m-2">
            {badgesBack.map((items) => {
              return (
                <div
                  id={items.id}
                  className="bg-transparent overflow-hidden rounded-full w-[45px] h-[45px] flex justify-center items-center"
                >
                  {items.image}
                </div>
              );
            })}
          </div>
          <div className="absolute right-0 -bottom-5 w-2/3 h-full">
            <Area />
          </div>
        </div>
      </div>

      <div className="relative row-start-1 row-end-2 col-start-5 col-end-9 bg-grey5 dark:bg-dark2">
        <div className={`${styles.title}`}>Data Science</div>
        <div className="relative z-100 w-full h-full flex flex-row just justify-start items-center overflow-hidden">
          <div className="p-8 w-1/2 h-full flex flex-wrap justify-start items-center child:m-2">
            {badgesData.map((items) => {
              return (
                <div
                  id={items.id}
                  className="bg-transparent overflow-hidden rounded-full w-[45px] h-[45px] flex justify-center items-center"
                >
                  {items.image}
                </div>
              );
            })}
          </div>
          <div className="absolute z-2 right-0 -bottom-5 w-2/3 h-full">
            <Area />
          </div>
        </div>
      </div>
    </div>
  );
}
