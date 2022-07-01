import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, Outlet } from "react-router-dom";
import pictureJavi from "../assets/images/javi.png";
import DashboardSVG from "../assets/svg/dashboard";
import MarketingSVG from "../assets/svg/leaderboard";
import PsySVG from "../assets/svg/psychologues";

const initialData = [
  {
    id: 0,
    title: "Me",
    path: "me",
    isActive: true,
    icon: (fillColor) => <DashboardSVG fillColor={fillColor} />,
  },
  {
    id: 1,
    title: "Web",
    path: "web",
    isActive: false,
    icon: (fillColor) => <MarketingSVG fillColor={fillColor} />,
  },
  {
    id: 2,
    title: "Apps",
    path: "apps",
    isActive: false,
    icon: (fillColor) => <MarketingSVG fillColor={fillColor} />,
  },
  {
    id: 3,
    title: "Data",
    path: "data",
    isActive: false,
    icon: (fillColor) => <PsySVG fillColor={fillColor} />,
  },
];

export default function About() {
  const [navList, setNavList] = useState(initialData);
  const isActiveHandler = (id) => {
    const arr = [...navList];
    console.log(navList);

    const inxOfActive = arr.find((item) => item.isActive === true).id;
    console.log(inxOfActive);

    arr[inxOfActive].isActive = false;
    arr[id].isActive = true;
    setNavList(arr);
  };

  return (
    <motion.div
      className="h-full flex justify-center my-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <div className="w-11/12 h-5/6 flex bg-grey1 text-4xl drop-shadow-xl rounded-lg">
        <div className="w-1/6 shrink bg-primary text-white rounded-lg">
          <div className="overflow-hidden w-full rounded-lg p-6 mt-6">
            <img src={pictureJavi} alt="pictureJavi" />
          </div>
          <div className="flex justify-center items-center mt-10">
            <ul className="mx-1 text-center child:font-Rubik child:mb-8 my-2">
              {navList.map(({ id, title, isActive, icon, path }) => {
                return (
                  <li key={id}>
                    <Link to={path}>
                      <button
                        type="button"
                        className="flex flex-row mb-6"
                        onClick={() => isActiveHandler(id)}
                      >
                        {icon(isActive ? "#0CC1A7" : "#ffffff")}
                        <span
                          className={
                            isActive ? "text-[#0CC1A7] ml-3" : "text-white ml-3"
                          }
                        >
                          {title}
                        </span>
                      </button>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="w-full p-10">
          <Outlet />
        </div>
      </div>
    </motion.div>
  );
}
