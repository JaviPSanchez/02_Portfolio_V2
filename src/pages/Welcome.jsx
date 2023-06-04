import { BackgroundCards, BackgroundText, Background } from "@components";
import { motion } from "framer-motion";

const Welcome = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <Background />
      <BackgroundText />
      <BackgroundCards />
    </motion.div>
  );
};

export default Welcome;
