import { useState } from "react";
import { Link } from "react-router-dom";
import pictureJavi from "../../assets/images/javi.png";
import Me from "../../assets/svg/me";
import Web from "../../assets/svg/web";
import Data from "../../assets/svg/data";
import Github from "../../assets/svg/github";
import Codepen from "../../assets/svg/codepen";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

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
    title: "Data",
    path: "data",
    isActive: false,
    icon: (fillColor) => <Data fillColor={fillColor} />,
  },
];

const optionsData = [
  {
    id: 0,
    title: "GitHub",
    path: "https://github.com/JaviPSanchez",
    isActive: false,
    icon: (fillColor) => <Github fillColor={fillColor} />,
  },
  {
    id: 1,
    title: "CodePen",
    path: "https://codepen.io/your-work/",
    isActive: false,
    icon: (fillColor) => <Codepen fillColor={fillColor} />,
  },
  {
    id: 2,
    title: "Medium",
    path: "https://medium.com/@javipalosanchez/about",
    isActive: false,
    icon: (fillColor) => <Data fillColor={fillColor} />,
  },
  {
    id: 3,
    title: "LinkedIn",
    path: "https://www.linkedin.com/in/javierpalominosanchez/",
    isActive: false,
    icon: (fillColor) => <Data fillColor={fillColor} />,
  },
];

export default function SideBar() {
  const [open, setOpen] = useState(true);
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

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className={` relative ${
        open ? "w-96" : "w-20"
      } bg-[#5555FF] h-full p-5 pt-8 duration-300 dark:bg-dark2 text-white rounded-lg text-4xl shadow-xl`}
    >
      <ArrowCircleLeftIcon
        color="black"
        fontSize="large"
        className={`absolute cursor-pointer z-50 -right-4 top-3
           border-2 rounded-full hover:scale-110  ${!open && "rotate-180 "}`}
        onClick={() => setOpen(!open)}
      />

      <div className="flex gap-x-4 items-center mt-10">
        <img
          src={pictureJavi}
          className={`duration-500 ${open && "rotate-[360deg] p-4"}`}
          alt="Not Found"
        />
      </div>
      <div className="w-fit flex flex-col mt-10">
        <ul
          className={`flex flex-col child:font-Rubik child:mb-8  ${
            open ? "ml-8" : "ml-0"
          }`}
        >
          {navList.map(({ id, title, isActive, icon, path }) => (
            <li className="hover:scale-110 duration-300" key={id}>
              <Link to={path}>
                <button
                  type="button"
                  className="flex"
                  onClick={() => isActiveHandler(id)}
                >
                  {icon(isActive ? "#9787FF" : "#ffffff")}

                  <span
                    className={`${
                      isActive ? "text-[#9787FF]" : "text-[#FFFFFF]"
                    } ${!open && "hidden duration-500"} ml-6`}
                  >
                    {title}
                  </span>
                </button>
              </Link>
            </li>
          ))}
        </ul>

        <ul
          className={`flex flex-col child:font-Rubik child:mb-8 ${
            open ? "ml-8" : "ml-0"
          }`}
        >
          {optionsData.map(({ id, title, isActive, icon, path }) => (
            <li className="hover:scale-110 duration-300" key={id}>
              <button
                type="button"
                className="flex"
                onClick={() => openInNewTab(path)}
              >
                {icon(isActive ? "#9787FF" : "#ffffff")}
                <span
                  className={`ml-6 ${
                    isActive ? "text-[#9787FF]" : "text-[#FFFFFF]"
                  } ${!open && "hidden duration-500"}`}
                >
                  {title}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
