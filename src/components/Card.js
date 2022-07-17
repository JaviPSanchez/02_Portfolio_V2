import React from "react";
import Tag from "./Tag";
import { ButtonNormal } from "./Button";

export default function Example({ image, title }) {
  return (
    <div className="card--item-1 flex flex-col justify-center items-center  dark:bg-dark2 w-full h-full rounded-lg p-2 shadow-xl">
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
        <ButtonNormal text={title} />
      </div>
    </div>
  );
}
