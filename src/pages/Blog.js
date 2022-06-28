import React from "react";
// import Title from "../components/Title";
import { motion } from "framer-motion";
// import styles from "../../styles/Global";

export default function Blog() {
  return (
    <motion.div
      className="flex flex-col justify-between items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      {/* <Title lineContent="This is the" lineContent2=" Blog page" /> */}
      <p className="w-1/3 text-4xl">
        A character his cache I succeed employed entire been it find the more
        and may the to his their five and towards in lay rippedup, what and so
        endure before for her been decades the few to than would was concept.
      </p>
    </motion.div>
  );
}
