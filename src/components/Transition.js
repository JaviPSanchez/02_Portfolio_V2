import React, { useRef, useEffect } from "react";
import { Power4 } from "gsap";

function Transition({ timeline }) {
  const trans = useRef(null);
  useEffect(() => {
    timeline.to(trans.current, {
      duration: 8,
      x: 4000,
      ease: Power4.easeOut,
    });
  });
  return (
    <div>
      <div
        className="absolute z-200 bg-[#f1f4f8] w-full top-0 h-screen"
        ref={trans}
      ></div>
    </div>
  );
}

export default Transition;
