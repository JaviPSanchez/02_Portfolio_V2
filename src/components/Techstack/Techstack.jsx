import { motion } from "framer-motion";
import { Front } from "./FrontStack";
import { Back } from "./BackStack";
import { DataStack } from "./DataStack";

export const Techstack = () => {
  return (
    <motion.div
      className="h-full w-2/3 flex justify-center items-center m-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <div className="grid grid-rows-3 grid-cols-3 gap-6 w-full h-full child:rounded-2xl drop-shadow-md">
        <div className="row-start-1 row-end-2 col-start-1 col-end-2 bg-white dark:bg-dark2 overflow-hidden">
          <Front />
        </div>
        <div className="row-start-2 row-end-3 col-start-3 col-end-4 bg-white dark:bg-dark2 overflow-hidden">
          <Back />
        </div>
        <div className="row-start-3 row-end-4 col-start-1 col-end-2 bg-white dark:bg-dark2 overflow-hidden">
          <DataStack />
        </div>
      </div>
    </motion.div>
  );
};
