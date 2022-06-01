import React, { useRef, useEffect } from "react";
import { Power4 } from "gsap";

function Transition({ timeline }) {
  const trans = useRef(null);
  useEffect(() => {
    timeline.to(trans.current, {
      duration: 10,
      // delay: 0.5,
      x: 4000,
      ease: Power4.easeOut,
    });
  });
  return (
    <div>
      <div
        className="absolute z-200 w-full bg-black top-0 h-screen"
        ref={trans}
      ></div>
    </div>
  );
}

export default Transition;
