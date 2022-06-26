import React from "react";
import { motion } from "framer-motion";
import VerticalChart from "../components/Charts/VerticalChart";
// import {styles} from "../styles/Global"

export default function About() {
  return (
    <motion.div
      className="flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <div className="w-11/12 h-full flex my-60 bg-grey1 text-4xl drop-shadow-xl rounded-lg overflow-hidden">
        <div className="w-1/6 shrink flex  items-center bg-primary text-white rounded-lg">
          <div>
            <img src={"../../assets/images/javi.jpg"}></img>
          </div>
          Sidebar
        </div>
        <div className="w-full p-10 ">
          <div className="flex">
            <div className="w-1/2">
              <VerticalChart />
            </div>
            <div className="w-1/2">
              <VerticalChart />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2">
              <VerticalChart />
            </div>
            <div className="w-1/2">
              <VerticalChart />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
