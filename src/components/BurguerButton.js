import { useState } from "react";
import { Link } from "react-router-dom";

export default function BurguerButton() {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-10 my-1 rounded-full bg-black transition-all ease duration-300`;
  const bubble1 = `bg-white rounded-full h-20 w-20 font-Rubik text-4xl font-bold text-black p-4 flex justify-center items-center transition-all ease duration-300`;

  return (
    <button
      className="relative flex flex-col h-20 w-20 bg-white rounded-full justify-center items-center"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "rotate-45 translate-y-3 bg-black" : "bg-black"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "opacity-0" : "bg-black"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "-rotate-45 -translate-y-3 bg-black" : "bg-black"
        }`}
      />
      <Link
        className={`${bubble1} ${
          isOpen
            ? "absolute z-50 translate-y-20 bg-black mt-6 justify-center items-center p-2"
            : "hidden bg-black"
        }`}
        to={"/"}
      >
        <span>H</span>
      </Link>
      <Link
        className={`${bubble1} ${
          isOpen
            ? "absolute z-50 translate-y-40 bg-black mt-10 justify-center items-center p-2"
            : "hidden bg-black"
        }`}
        to={"/about/me"}
      >
        <span>M</span>
      </Link>
      <Link
        className={`${bubble1} ${
          isOpen
            ? "absolute z-50 translate-y-60 bg-black mt-12 justify-center items-center p-2"
            : "hidden bg-black"
        }`}
        to={"/blog"}
      >
        <span>B</span>
      </Link>
      <Link
        className={`${bubble1} ${
          isOpen
            ? "absolute z-50 translate-y-80 bg-black mt-14 justify-center items-center p-2"
            : "hidden bg-black"
        }`}
        to={"/contact"}
      >
        <span>C</span>
      </Link>
    </button>
  );
}
