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
          className="bg-white p-2 rounded-full cursor-pointer"
        >
          <Sun fillColor={"#000000"} />
        </button>
      ) : (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="bg-white p-2 rounded-full cursor-pointer"
        >
          <Moon fillColor={"#000000"} />
        </button>
      )}
    </div>
  );
};

export default Toggle;
