import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "@styles";
import { navVariants } from "@utils/motion";
import { Sun, Moon, Me, Bars, Close } from "@svg";
import { NavLinks } from "@data";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.innerWidth} py-8 relative`}
    >
      {/* <div className="absolute w-[50%] inset-0 gradient-01" /> */}
      <div className="mx-auto flex justify-between gap-8">
        <Link
          to="/home"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Me fillColor="#FFFFFF" width="3rem" height="3rem" />
        </Link>
        <div className="flex flex-row justify-center items-center gap-10 w-full sm:hidden">
          <Link to="/blog">
            <h2 className="font-Rubik font-extrabold text-5xl hover:text-white text-dark2">
              Blog
            </h2>
          </Link>

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
        </div>
        <div className="flex justify-center items-center hidden sm:inline-block">
          {toggle ? (
            <Bars
              fillColor="#FFFFFF"
              width="3rem"
              height="3rem"
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <Close
              fillColor="#FFFFFF"
              width="6rem"
              height="6rem"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>

        {active ? (
          <Sun fillColor="#FFFFFF" width="6rem" height="6rem" />
        ) : (
          <Moon fillColor="#FFFFFF" width="6rem" height="6rem" />
        )}
      </div>
    </motion.nav>
  );
}
