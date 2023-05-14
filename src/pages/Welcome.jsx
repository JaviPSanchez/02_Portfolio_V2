import BackGround from "../components/Background";
import { BackgroundCards } from "../components/BackgroundCards";
import { BackgroundText } from "../components/BackgroundText";
import { motion } from "framer-motion";

export const Welcome = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <BackGround />
      <BackgroundText />
      <BackgroundCards />
    </motion.div>
  );
};
