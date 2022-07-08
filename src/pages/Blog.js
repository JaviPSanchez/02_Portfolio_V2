import React from "react";
import { motion } from "framer-motion";
// import styles from "../../styles/Global";

export default function Blog() {
  return (
    <motion.div
      className="h-5/6 mx-10 flex flex-col justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <div className="w-11/12 h-screen my-10 flex flex-row bg-transparent">
        <div className="border-2 border-white w-2/3"></div>
        <div className="flex flex-col justify-start items-center border-2 border-white w-1/3 ml-10 child:p-4">
          <div className="bg-white h-1/3 w-full">Popular</div>
          <div className="bg-white h-full w-full mt-10">Topics</div>
        </div>
      </div>
    </motion.div>
  );
}
