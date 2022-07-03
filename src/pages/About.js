import React from "react";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/About/SideBar";

export default function About() {
  return (
    <motion.div
      className="h-full flex justify-center my-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <div className="w-11/12 h-5/6 flex bg-grey1 text-4xl drop-shadow-xl rounded-lg">
        <Sidebar />
        <div className="w-full p-10">
          <Outlet />
        </div>
      </div>
    </motion.div>
  );
}
