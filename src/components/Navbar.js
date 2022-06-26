import React from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "./Logo";
export default function Header() {
  return (
    <>
      <div className="sticky w-full flex justify-between items-center text-4xl">
        <div className="flex justify-items-start mx-10">
          <Logo />
        </div>
        <div className="flex child:my-10 child:mx-10">
          <Link className="mx-10" to="/">
            Home
          </Link>
          <Link className="mx-10" to="/about">
            About
          </Link>
          <Link className="mx-10" to="/projects">
            Projects
          </Link>
          <Link className="mx-10" to="/blog">
            Blog
          </Link>
        </div>
      </div>
      <section className="h-screen">
        <Outlet />
      </section>
    </>
  );
}
