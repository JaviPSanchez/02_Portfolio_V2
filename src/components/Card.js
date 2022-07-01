import React from "react";
import styles from "../styles/Global";

export default function Example({ image, title }) {
  return (
    <div className="flex flex-col justify-center items-center bg-quaternary hover:bg-red-200 w-full h-full rounded-lg p-2 overflow-hidden drop-shadow-md">
      <div className="w-full h-5/6 rounded-lg overflow-hidden">
        <img src={image} alt="picture1"></img>
      </div>
      <div className="w-fit mb-10">
        <button onClick={() => "Click"} className={`${styles.button}`}>
          {title}
        </button>
      </div>
    </div>
  );
}
