import { useState, useRef, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "@styles";
import { navVariants } from "@utils/motion";
import { Sun, Moon, Bars } from "@svg";
import { NavLinks } from "@data";
import { javi } from "@images";
import { ThemeContext } from "@context";

const Navbar = ({ links }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [active, setActive] = useState(true);
  const [toggle, setToggle] = useState(false);
  const toggleRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (toggleRef.current && !toggleRef.current.contains(event.target)) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.innerWidth} ${styles.yPaddings} ${styles.xPaddings} z-40`}
    >
      <div
        className={`${styles.xPaddings} mx-auto flex justify-between items-center gap-12`}
      >
        <div className="flex flex-row justify-center items-center hover:scale-110 transition-all">
          {links !== "welcome" ? (
            <Link
              to="/"
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
            >
              <img
                src={javi}
                alt="logo"
                width={`${links !== "welcome" ? "50rem" : "60rem"} `}
                height={`${links !== "welcome" ? "50rem" : "60rem"} `}
              />
            </Link>
          ) : null}
        </div>
        <div className="flex flex-row justify-center items-center gap-16 w-full sm:hidden">
          {links === "home" ? (
            <Link to="/blog">
              <h2 className="font-Rubik font-extrabold text-5xl text-[#ff5478] dark:text-grey4 dark:hover:text-[#ff5478] hover:text-[#ff8a05]">
                Blog
              </h2>
            </Link>
          ) : links === "blog" ? (
            <Link to="/home">
              <h2 className="font-Rubik font-extrabold text-5xl hover:text-[#ff5478] text-grey4">
                Home
              </h2>
            </Link>
          ) : null}
          {links === "home" ? (
            NavLinks.map((nav) => (
              <li
                key={nav.id}
                className={`text-[#ff5478] dark:text-grey4 dark:hover:text-[#ff5478] hover:text-[#ff8a05] font-Rubik font-extrabold text-5xl cursor-pointer list-none`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))
          ) : links === "article" ? (
            <Link to="/blog">
              <h2 className="font-Rubik font-extrabold text-5xl hover:text-[#ff5478] text-grey4">
                Blog
              </h2>
            </Link>
          ) : null}
        </div>
        <div className="relative flex flex-row gap-10">
          <div
            className="relative flex justify-center items-center hidden sm:flex"
            onClick={() => setToggle(!toggle)}
          >
            {!toggle ? (
              <Bars
                fillColor={theme === "dark" ? "#FFFFFF" : "#ff5478"}
                width="3rem"
                height="3rem"
              />
            ) : null}
            <div
              ref={toggleRef}
              className={`${
                !toggle ? "hidden" : "flex"
              }  h-[650px] w-[650px] absolute -top-[350px] -right-[450px] z-40 flex-col justify-center items-center gap-4 bg-black dark:bg-[#FFFFFF] rounded-full transition-all`}
            >
              <ul
                className={`absolute ${
                  links !== "welcome"
                    ? "top-[350px] right-[420px] gap-4"
                    : "top-[390px] right-[420px] gap-6"
                }  flex flex-col justify-center items-center list-none`}
              >
                <Link to="/blog">
                  <h2 className="font-Rubik font-extrabold text-5xl hover:text-white text-white dark:text-[#ff5478]">
                    Blog
                  </h2>
                </Link>
                {links !== "welcome" ? (
                  NavLinks.map((nav) => (
                    <li
                      key={nav.id}
                      className={`${
                        active === nav.title ? "text-white" : "text-dark2"
                      } hover:text-white font-Rubik font-extrabold text-5xl cursor-pointer list-none`}
                      onClick={() => setActive(nav.title)}
                    >
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                  ))
                ) : (
                  <Link to="/home">
                    <h2 className="font-Rubik font-extrabold text-5xl hover:text-[#ff5478] hover:text-white text-white dark:text-[#ff5478]">
                      Home
                    </h2>
                  </Link>
                )}
              </ul>
            </div>
          </div>
          <div
            className="cursor-pointer transition-all"
            onClick={() => setActive(!active)}
          >
            {active ? (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <Sun
                  fillColor={theme === "dark" ? "#FFFFFF" : "#ff5478"}
                  width="3rem"
                  height="3rem"
                />
              </button>
            ) : (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <Moon
                  fillColor={theme === "dark" ? "#FFFFFF" : "#ff5478"}
                  width="3rem"
                  height="3rem"
                />
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

// const PropTypes = {
//   links(props, propLink, componentName) {
//     if (typeof props[propLink] !== "string") {
//       return new Error(
//         `String type required for ${propLink} in ${componentName} but you passed a ${props[propLink]}`
//       );
//     }
//   },
// };

Navbar.propTypes = {
  links: PropTypes.string.isRequired,
};

export default Navbar;
