import React from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "./Logo";
import styles from "../styles/Global";
export default function Header() {
  return (
    <>
      <div className="fixed z-20 left-[50%] translate-x-[-50%] flex items-center text-4xl">
        <div className="mx-10">
          <Logo />
        </div>
        <div className="flex child:my-10 child:mx-10">
          <Link className={`${styles.button}`} to="/">
            Home
          </Link>
          <Link className={`${styles.button}`} to="/about/me">
            About
          </Link>
          <Link className={`${styles.button}`} to="/projects">
            Projects
          </Link>
          <Link className={`${styles.button}`} to="/blog">
            Blog
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}
