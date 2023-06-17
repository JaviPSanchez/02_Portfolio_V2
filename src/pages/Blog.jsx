import { motion } from "framer-motion";
import { Navbar } from "@components";
import { Articles } from "@sections";
import styles from "@styles";

export default function Home() {
  return (
    <motion.div
      className={`${styles.innerWidth} ${styles.flexCenter} ${styles.paddings} w-2/3 flex-col`}
    >
      <Navbar />
      <Articles />
    </motion.div>
  );
}
