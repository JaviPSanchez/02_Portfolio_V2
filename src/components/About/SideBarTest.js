import { useState } from "react";
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

const App = () => {
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

  return (
    <div
      className={` ${
        open ? "w-72" : "w-20"
      } bg-[#5555FF] h-full p-5 pt-8 relative duration-300 dark:bg-dark2 text-white rounded-lg text-4xl shadow-xl`}
    >
      <img
        src={pictureJavi}
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-[#FFFFFF]
           border-2 rounded-full ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
        alt="Not Found"
      />
      <div className="flex gap-x-4 items-center">
        <img
          src={pictureJavi}
          className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
          alt="Not Found"
        />
      </div>
      <div className="flex justify-center items-center mt-10">
        <ul className="mx-1 text-center child:font-Rubik child:mb-8 my-2">
          {navList.map(({ id, title, isActive, icon, path }) => (
            <li key={id}>
              <Link to={path}>
                <button
                  type="button"
                  className="flex flex-row mb-4"
                  onClick={() => isActiveHandler(id)}
                >
                  {icon(isActive ? "#9787FF" : "#ffffff")}

                  <span
                    className={`${
                      isActive ? "text-[#9787FF]" : "text-[#FFFFFF]"
                    } ${!open && "hidden duration-500"} ml-3`}
                  >
                    {title}
                  </span>
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default App;
