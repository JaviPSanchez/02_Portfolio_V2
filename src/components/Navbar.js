import React from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "./Logo";
// import styles from "../styles/Global";
import Toggle from "./Toggle";

const pages = [
  {
    id: 1,
    name: "Home",
    to: "/",
  },
  {
    id: 2,
    name: "About & Projects",
    to: "/about/me",
  },
  // {
  //   id: 3,
  //   name: "Academy",
  //   to: "/academy",
  // },
  {
    id: 3,
    name: "Blog",
    to: "/blog",
  },
  {
    id: 4,
    name: "Contact",
    to: "/contact",
  },
];

export default function Header() {
  return (
    <>
      <div className="w-full flex justify-around items-center">
        <div>
          <Logo />
        </div>
        <div className="flex child:my-10 child:mx-6">
          {pages.map((item) => {
            return (
              <Link
                key={item.id}
                className="relative skew-y-[-3deg] p-1 inline-flex items-center justify-center overflow-hidden group rounded-md"
                to={item.to}
              >
                <span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                <span class="relative  py-3 transition-all ease-out bg-grey5 rounded-md group-hover:bg-opacity-0 duration-200">
                  <span class="font-Rubik p-6 text-black text-4xl hover:text-white uppercase">
                    {item.name}
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
        <div>
          <Toggle />
        </div>
      </div>

      <Outlet />
    </>
  );
}
