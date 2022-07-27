import { useEffect, useRef } from "react";
import { gsap, Power3 } from "gsap";

export default function Header() {
  let nameItem = useRef(null);
  let sectorItem = useRef(null);

  useEffect(() => {
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
  }, []);

  return (
    <div className="absolute top-[25%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20 flex flex-col justify-center items-center">
      <h1
        ref={(element) => {
          nameItem = element;
        }}
        className="font-Rubik text-3xl font-normal text-black dark:text-white translate-y-12 opacity-0 text-center"
      >
        Hi, glad to see you here!
      </h1>

      <p
        ref={(element) => {
          sectorItem = element;
        }}
        className="bg-clip-text bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] mt-12 translate-y-12 opacity-0 font-Rubik text-center font-bold uppercase text-transparent text-8xl"
      >
        Things I do
      </p>
    </div>
  );
}
