import React from "react";
import { motion } from "framer-motion";
// import styles from "../../styles/Global";

export default function Projects() {
  return (
    <motion.div
      className="h-5/6 mx-10 flex flex-col justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <div className="bg-white h-full w-full">Container</div>
    </motion.div>
  );
}
