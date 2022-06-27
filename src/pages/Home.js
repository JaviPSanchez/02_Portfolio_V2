import React from "react";
import HomeHeader from "../components/HomeHeader";
import { motion } from "framer-motion";
import BackScreen from "../components/BackScreen";

export default function Home() {
  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <HomeHeader />
      <BackScreen />
    </motion.div>
  );
}
