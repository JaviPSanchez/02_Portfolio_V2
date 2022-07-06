import React, { useState } from "react";
import { Link } from "react-router-dom";
import pictureJavi from "../../assets/images/javi.png";
import Me from "../../assets/svg/me";
import Web from "../../assets/svg/web";
import Mobile from "../../assets/svg/mobile";
import Data from "../../assets/svg/data";

const initialData = [
  {
    id: 0,
    title: "Me",
    path: "me",
    isActive: true,
    icon: (fillColor) => <Me fillColor={fillColor} />,
  },
  {
    id: 1,
    title: "Web",
    path: "web",
    isActive: false,
    icon: (fillColor) => <Web fillColor={fillColor} />,
  },
  {
    id: 2,
    title: "Apps",
    path: "apps",
    isActive: false,
    icon: (fillColor) => <Mobile fillColor={fillColor} />,
  },
  {
    id: 3,
    title: "Data",
    path: "data",
    isActive: false,
    icon: (fillColor) => <Data fillColor={fillColor} />,
  },
];

export default function SideBar() {
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
    <div className="w-1/6 shrink bg-dark1 dark:dark1 text-white rounded-lg text-4xl ">
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
                    {icon(isActive ? "#e3ac1b" : "#ffffff")}
                    <span
                      className={
                        isActive ? "text-[#e3ac1b] ml-3" : "text-white ml-3"
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
  );
}
