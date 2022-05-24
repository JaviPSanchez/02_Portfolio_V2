import React from "react";
import { useNavigate } from "react-router";
// import assets from "../assets";
import styles from "../styles/Global";

export default function Landing() {
  const navigate = useNavigate();
  const handleMain = (e) => {
    e.preventDefault();
    navigate("/main");
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-1/3 flex flex-col justify-center items-center">
        <h1 className="font-Rubik text-2xl uppercase">Javier Palomino</h1>
        <p className="font-Rubik text-4xl mt-6 uppercase">Data Developer</p>
        <buttom
          className={`${styles.button}`}
          type="button"
          onClick={handleMain}
        >
          Portfolio
        </buttom>
      </div>
    </div>
  );
}
