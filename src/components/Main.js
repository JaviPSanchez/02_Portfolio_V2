import React from "react";
import { gsap } from "gsap";
import MainHeader from "./MainHeader";
import Transition from "./Transition";

export default function main() {
  const main = gsap.timeline();

  return (
    <>
      <Transition timeline={main} />
      <MainHeader />
      <div className="w-full h-full bg-red-200 pt-10 overflow-y-auto">
        <section className="h-1/2 bg-white mx-20 my-auto py-20">
          <div>
            <h1 className="font-Rubik text-black text-8xl">Main Page</h1>
          </div>
        </section>
        <section className="h-1/2 bg-white mx-20 my-auto mt-20">
          <div>
            <h1 className="font-Rubik text-black text-8xl">Main Page</h1>
          </div>
        </section>
        <section className="h-1/2 bg-white mx-20 my-auto mt-20">
          <div>
            <h1 className="font-Rubik text-black text-8xl">Main Page</h1>
          </div>
        </section>
      </div>
    </>
  );
}
