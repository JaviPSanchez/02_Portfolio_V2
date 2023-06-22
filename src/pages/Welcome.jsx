import {
  BackgroundCards,
  BackgroundText,
  Background,
  Navbar,
} from "@components";
import { motion } from "framer-motion";
import { pageMotion } from "../utils/motion";

const Welcome = () => {
  return (
    <motion.div className="h-screen overflow-hidden" variants={pageMotion}>
      <Navbar links={"welcome"} />
      <Background />
      <BackgroundText />
      <BackgroundCards />
    </motion.div>
  );
};

export default Welcome;
