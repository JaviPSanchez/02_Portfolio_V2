import React, { useEffect, useRef } from "react";
import { gsap, Power3 } from "gsap";

const Title = ({ lineContent, lineContent2 }) => {
  let line1 = useRef(null);
  // let line2 = useRef(null);
  // useEffect(() => {
  //   gsap.from([line1, line2], 0.8, {
  //     delay: 0.8,
  //     ease: Power3,
  //     y: 64,
  //     stagger: {
  //       amount: 0.15,
  //     },
  //   });
  // }, [line1, line2]);
  useEffect(() => {
    gsap.from(line1, {
      delay: 0.8,
      y: 64,
      ease: Power3,
    });
  }, []);
  return (
    <div className="absolute top-[20%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20 flex justify-center items-center">
      <h1
        ref={(element) => (line1 = element)}
        class="font-Rubik text-6xl uppercase font-normal"
      >
        {/* <div className=" h-16">
          <div></div>
        </div> */}
        {/* <div className="overflow-hidden h-16">
          <div ref={(element) => (line2 = element)}>{lineContent2}</div>
        </div> */}
        {lineContent}
      </h1>
    </div>
  );
};

export default Title;
