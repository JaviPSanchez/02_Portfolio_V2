import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "@styles";
import { navVariants } from "@utils/motion";
import { Sun, Moon, Me, Bars, Close } from "@svg";
import { NavLinks } from "@data";

const Navbar = ({ links }) => {
  const [active, setActive] = useState(true);
  const [toggle, setToggle] = useState(false);
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.innerWidth} m-6 relative`}
    >
      <div className={`${styles.xPaddings} mx-auto flex justify-between gap-8`}>
        <div className="flex justify-center items-center">
          <Link
            to="/home"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <Me fillColor="#FFFFFF" width="3rem" height="3rem" />
          </Link>
        </div>
        <div className="flex flex-row justify-center items-center gap-10 w-full sm:hidden">
          {links === "home" ? (
            <Link to="/blog">
              <h2 className="font-Rubik font-extrabold text-5xl hover:text-[#ff5478] text-grey4">
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
                className={`${
                  active === nav.title ? "text-white" : "text-grey4"
                } hover:text-[#ff5478] font-Rubik font-extrabold text-5xl cursor-pointer list-none`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))
          ) : links === "blog" ? null : (
            <Link to="/blog">
              <h2 className="font-Rubik font-extrabold text-5xl hover:text-[#ff5478] text-grey4">
                Blog
              </h2>
            </Link>
          )}
        </div>
        <div className="flex flex-row gap-10">
          <div
            className="flex justify-center items-center hidden sm:flex hover:-rotate-270"
            onClick={() => setToggle(!toggle)}
          >
            {!toggle ? (
              <Bars fillColor="#FFFFFF" width="3rem" height="3rem" />
            ) : (
              <Close fillColor="#FFFFFF" width="3rem" height="3rem" />
            )}
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } flex-col p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl gap-4`}
            >
              <Link to="/blog">
                <h2 className="font-Rubik font-extrabold text-5xl hover:text-white text-dark2">
                  Blog
                </h2>
              </Link>
              <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                {NavLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`${
                      active === nav.title ? "text-white" : "text-dark2"
                    } hover:text-white font-Rubik font-extrabold text-5xl cursor-pointer list-none`}
                    onClick={() => setActive(nav.title)}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className="cursor-pointer transition-all"
            onClick={() => setActive(!active)}
          >
            {active ? (
              <Sun fillColor="#FFFFFF" width="3rem" height="3rem" />
            ) : (
              <Moon fillColor="#FFFFFF" width="3rem" height="3rem" />
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
