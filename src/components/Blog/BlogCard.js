import React from "react";
import { motion } from "framer-motion";

export default function BlogCard({ title }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      layout
      className="w-full h-[350px] bg-grey1 dark:bg-dark2 h-1/4 p-2 rounded-xl"
    >
      <h1 className="font-Rubik text-8xl">{title}</h1>
      <p className="font-Rubik text-xl">Lorem ipsum omocdso</p>
    </motion.div>
  );
}
