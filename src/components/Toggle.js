import React from "react";
import Sun from "../assets/svg/sun";
import Moon from "../assets/svg/moon";
import { ThemeContext } from "../styles/ThemeContext";
const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);
  return (
    <div>
      {theme === "dark" ? (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-gray-500 dark:text-gray-400 bg-white shadow-none p-2 focus:outline-none text-lg rounded-full outline-none ring-transparent cursor-pointer"
        >
          <Sun
            className="absolute transition-all delay-150 ease-linear"
            fillColor={"#000000"}
          />
        </button>
      ) : (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-gray-500 dark:text-gray-400 bg-white focus:outline-none shadow-none p-2 text-lg rounded-full outline-none ring-transparent cursor-pointer"
        >
          <Moon fillColor={"#000000"} />
        </button>
      )}
    </div>
  );
};

export default Toggle;
