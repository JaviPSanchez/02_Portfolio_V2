import React from "react";
import { motion } from "framer-motion";
import Content from "../components/Contact/Content";
export default function Contact() {
  return (
    <motion.div
      className="h-5/6 mx-10 flex flex-col justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <div className="flex flex-col justify-center items-center bg-grey5 dark:bg-dark2 h-screen w-1/3 my-10 rounded-xl">
        <Content />
      </div>
    </motion.div>
  );
}
