import React, { useEffect, useRef } from "react";
import { gsap, Power3 } from "gsap";

const Title = ({ lineContent, lineContent2 }) => {
  let line1 = useRef(null);
  let line2 = useRef(null);
  useEffect(() => {
    gsap.from([line1, line2], 0.8, {
      delay: 0.8,
      ease: Power3,
      y: 64,
      stagger: {
        amount: 0.15,
      },
    });
  }, [line1, line2]);
  return (
    <h1 class="font-Rubik text-6xl uppercase font-normal">
      <div className=" h-16">
        <div ref={(el) => (line1 = el)}>{lineContent}</div>
      </div>
      <div className="h-16">
        <div ref={(el) => (line2 = el)}>{lineContent2}</div>
      </div>
    </h1>
  );
};

export default Title;
