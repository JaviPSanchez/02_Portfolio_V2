import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="">
      <div className="text-4xl flex justify-center items-center my-10 ">
        <Link className="mx-10" to="/">
          Back
        </Link>
        <Link className="mx-10" to="/about">
          About
        </Link>
        <Link className="mx-10" to="/da">
          Data Analytics
        </Link>
        <Link className="mx-10" to="/de">
          Data Engineer
        </Link>
      </div>
    </div>
  );
}
