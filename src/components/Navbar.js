import React from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "./Logo";
import styles from "../styles/Global";
import Toggle from "./Toggle";
export default function Header() {
  return (
    <>
      <div className="w-full flex justify-around items-center">
        <div>
          <Logo />
        </div>
        <div className="flex child:my-10 child:mx-6 child:shadow-lg">
          <Link className={`${styles.button}`} to="/">
            Home
          </Link>
          <Link className={`${styles.button}`} to="/about/me">
            About
          </Link>
          <Link className={`${styles.button}`} to="/academy/login">
            Academy
          </Link>
          <Link className={`${styles.button}`} to="/blog">
            Blog
          </Link>
          <Link className={`${styles.button}`} to="/contact">
            Contact
          </Link>
        </div>
        <div>
          <Toggle />
        </div>
      </div>

      <Outlet />
    </>
  );
}
