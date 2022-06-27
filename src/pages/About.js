import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, Outlet } from "react-router-dom";
import VerticalChart from "../components/Charts/VerticalChart";
import pictureJavi from "../assets/images/javi.jpg";
import DashboardSVG from "../assets/svg/dashboard";
import EmailSVG from "../assets/svg/mail";
import PsySVG from "../assets/svg/psychologues";
import MarketingSVG from "../assets/svg/leaderboard";
import PieChartSVG from "../assets/svg/pie_chart";

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
    title: "Skills",
    path: "skills",
    isActive: false,
    icon: (fillColor) => <MarketingSVG fillColor={fillColor} />,
  },
  // {
  //   id: 2,
  //   title: "Patients",
  //   path: "patients",
  //   isActive: false,
  //   icon: (fillColor) => <PsySVG fillColor={fillColor} />,
  // },
  // {
  //   id: 3,
  //   title: "Psychologues",
  //   path: "psychologues",
  //   isActive: false,
  //   icon: (fillColor) => <EmailSVG fillColor={fillColor} />,
  // },
  // {
  //   id: 4,
  //   title: "Contenus",
  //   path: "contenus",
  //   isActive: false,
  //   icon: (fillColor) => <PieChartSVG fillColor={fillColor} />,
  // },
];

export default function About() {
  const [navList, setNavList] = useState(initialData);
  const isActiveHandler = (id) => {
    const arr = [...navList];
    const inxOfActive = arr.find((item) => item.isActive === true).id;
    arr[inxOfActive].isActive = false;
    arr[id].isActive = true;
    setNavList(arr);
  };

  return (
    <motion.div
      className="flex h-full pt-48 pb-10 justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <div className="w-11/12 h-full flex my-60 bg-grey1 text-4xl drop-shadow-xl rounded-lg overflow-hidden">
        <div className="w-1/6 shrink flex-col items-center bg-primary text-white rounded-lg drop-shadow-xl">
          <div className="overflow-hidden w-1/2 rounded-full mx-auto mt-10">
            <img height={60} width={100} src={pictureJavi} alt="" />
          </div>
          <div className="flex justify-center items-center">
            <ul className="mx-1 text-center child:font-Rubik child:mb-6 my-2">
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
        <div className="w-1/2 p-10">
          <Outlet />
        </div>
      </div>
    </motion.div>
  );
}
