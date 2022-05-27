import React from "react";
import { gsap } from "gsap";
import Transition from "./Transition";

export default function main() {
  const main = gsap.timeline();

  return (
    <>
      <Transition timeline={main} />
      <div className="w-full h-full bg-black">
        <h1 className="font-Rubik text-white text-8xl">Main Page</h1>
      </div>
    </>
  );
}
