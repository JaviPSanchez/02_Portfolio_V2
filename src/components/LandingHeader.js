import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import styles from "../styles/Global";
import { gsap, Power3 } from "gsap";

export default function Header() {
  const navigate = useNavigate();
  let nameItem = useRef(null);
  let sectorItem = useRef(null);
  let buttomItem = useRef(null);
  useEffect(() => {
    // nameItem.style.display = "none";
    gsap.to(nameItem, {
      opacity: 1,
      duration: 1,
      y: 0,
      ease: Power3,
    });
    gsap.to(sectorItem, {
      opacity: 1,
      duration: 1,
      delay: 0.5,
      y: 0,
      ease: Power3,
    });
    gsap.to(buttomItem, {
      opacity: 1,
      duration: 1,
      delay: 1,
      y: 0,
      ease: Power3,
    });
  }, []);

  const handleMain = (e) => {
    e.preventDefault();
    navigate("/about");
  };

  return (
    <div className="absolute top-[20%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20 flex justify-center items-center">
      <div className=" flex flex-col justify-center items-center">
        <h1
          ref={(element) => {
            nameItem = element;
          }}
          className="font-Rubik text-3xl font-normal uppercase text-black translate-y-12 opacity-0"
        >
          Javier Palomino
        </h1>
        <p
          ref={(element) => {
            sectorItem = element;
          }}
          className="font-Rubik text-6xl font-bold uppercase text-black mt-12 translate-y-12 opacity-0"
        >
          Data Developer
        </p>
        <buttom
          ref={(element) => {
            buttomItem = element;
          }}
          className={`${styles.button}, translate-y-10 opacity-0`}
          type="button"
          onClick={handleMain}
        >
          Portfolio
        </buttom>
      </div>
    </div>
  );
}
