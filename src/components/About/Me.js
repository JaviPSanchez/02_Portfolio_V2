import React from "react";
import VerticalChart from "../Charts/VerticalChart";
import Doughnut from "../Charts/Doughnut";
import { badges } from "../../assets/data";
import styles from "../../styles/Global";

export default function Me() {
  return (
    <div className="grid grid-rows-4 grid-cols-8 gap-6 w-full h-full child:rounded-xl drop-shadow-md">
      <div className="relative row-start-1 row-end- col-start-1 col-end-3 bg-grey5 dark:bg-dark2">
        <div className={`${styles.title}`}>Front-Stack</div>
        <div className="p-8 h-full flex flex-wrap justify-start items-center child:m-2">
          {badges.map((items) => {
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
      </div>

      <div className="relative row-start-2 row-end-5 col-start-5 col-end-9 bg-grey5 dark:bg-dark2">
        <div className={`${styles.title}`}>Formation</div>
        <VerticalChart />
      </div>
      <div className="relative flex justify-center items-center row-start-2 row-end-5 col-start-1 col-end-5 bg-grey5 dark:bg-dark2">
        <div className={`${styles.title}`}>Experience</div>
        <div className="w-1/2 h-fit p-10">
          <Doughnut />
        </div>
      </div>
      <div className="relative row-start-1 row-end-2 col-start-3 col-end-5 bg-grey5 dark:bg-dark2">
        <div className={`${styles.title}`}>Back-Stack</div>
        <div className="p-8 h-full  flex flex-wrap justify-start items-center child:m-2">
          {badges.map((items) => {
            return (
              <div
                id={items.id}
                className="bg-grey4 rounded-full w-[45px] h-[45px] flex justify-center items-center"
              >
                {items.svg}
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative row-start-1 row-end-2 col-start-5 col-end-9 bg-grey5 dark:bg-dark2">
        <div className={`${styles.title}`}>Data Science</div>
        <div className="p-8 h-full  flex flex-wrap justify-start items-center child:m-2">
          {badges.map((items) => {
            return (
              <div
                id={items.id}
                className="bg-grey4 rounded-full w-[45px] h-[45px] flex justify-center items-center"
              >
                {items.svg}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
