import { motion } from "framer-motion";
import { Front } from "./Front";
import { Back } from "./Back";
import { DataStack } from "./DataStack";
import DoughnutChart from "../Charts/Doughnut";
import MultiVerticalBar from "../Charts/MultiVerticalBar";

export const About = () => {
  return (
    <motion.div
      className="h-full w-5/6 flex justify-center items-center m-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <div className="grid grid-rows-5 grid-cols-9 gap-6 w-full h-full child:rounded-2xl drop-shadow-md">
        <div className="row-start-1 row-end-3 col-start-1 col-end-4 bg-white dark:bg-dark2 overflow-hidden">
          <Front />
        </div>
        <div className="row-start-1 row-end-3 col-start-4 col-end-7 bg-white dark:bg-dark2 overflow-hidden">
          <Back />
        </div>
        <DataStack />
        <div className="row-start-3 row-end-6 col-start-1 col-end-4 bg-white dark:bg-dark2">
          <DoughnutChart />
        </div>
        <div className="row-start-3 row-end-6 col-start-4 col-end-10 bg-white dark:bg-dark2">
          <div className="w-full h-full p-10">{/* <MultiVerticalBar /> */}</div>
        </div>
      </div>
    </motion.div>
  );
};
