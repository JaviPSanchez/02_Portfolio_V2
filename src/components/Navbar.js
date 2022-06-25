import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div className="text-4xl flex justify-center items-center my-10 ">
        <Link className="mx-10" to="/home">
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
      <section className="h-screen">
        <Outlet />
      </section>
    </div>
  );
}
