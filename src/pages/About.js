import React from "react";
import Title from "../components/Title";
import { motion } from "framer-motion";
export default function About() {
  return (
    <motion.div
      className="relative top-40 flex flex-col justify-between items-center w-[1280px] min-w-[1280px]"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <Title lineContent="This is the" lineContent2=" About page" />
      <p className="absolute top-60 right-40 right w-1/3 text-4xl">
        A character his cache I succeed employed entire been it find the more
        and may the to his their five and towards in lay rippedup, what and so
        endure before for her been decades the few to than would was concept.
      </p>
    </motion.div>
  );
}