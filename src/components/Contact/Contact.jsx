import { motion } from "framer-motion";
import Content from "./ContactContent";

export default function Contact() {
  return (
    <motion.div
      className="h-5/6 mx-10 flex flex-col justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <div className="flex flex-col justify-center items-center bg-grey4 h-screen w-1/3 min-w-[600px] md:min-w-[500px] my-10 rounded-xl shadow-xl">
        <Content />
      </div>
    </motion.div>
  );
}
