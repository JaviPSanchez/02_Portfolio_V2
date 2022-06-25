import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="fixed z-40 ">
      <div className="text-4xl flex justify-center items-center my-10 ">
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
  );
}
