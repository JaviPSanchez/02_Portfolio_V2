import HomeHeader from "../components/HomeHeader";
import HomeCards from "../components/HomeCards";
import BackScreen from "../components/BackScreen";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <HomeHeader />
      <HomeCards />
      <BackScreen />
    </motion.div>
  );
}
