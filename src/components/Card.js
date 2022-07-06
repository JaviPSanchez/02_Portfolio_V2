import React from "react";
import styles from "../styles/Global";
import Tag from "./Tag";

export default function Example({ image, title }) {
  return (
    <div className="flex flex-col justify-center items-center bg-quaternary hover:bg-grey5 w-full h-full rounded-lg p-2 drop-shadow-md">
      <div className="relative">
        <div className="rounded-lg overflow-hidden">
          <img
            width={800}
            className="max-w-full max-h-full object-contain"
            src={image}
            alt="picture1"
          />
          <Tag tagTitle={"Html"} />
        </div>
      </div>
      <div className="w-fit mb-10">
        <button onClick={() => "Click"} className={`${styles.button}`}>
          {title}
        </button>
      </div>
    </div>
  );
}
