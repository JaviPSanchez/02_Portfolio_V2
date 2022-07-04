import React from "react";

export default function Container({ children, styles }) {
  return (
    <div className="absolute z-20 top-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center">
      {children}
    </div>
  );
}
