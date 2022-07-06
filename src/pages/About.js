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
      <div className="w-11/12 h-5/6 flex bg-transparent">
        <Sidebar />
        <div className="w-full ml-8">
          <Outlet />
        </div>
      </div>
    </motion.div>
  );
}
