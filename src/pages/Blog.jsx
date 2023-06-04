import { motion } from "framer-motion";
import { Navbar, LatestArticles } from "@sections";
import styles from "@styles";

export default function Home() {
  return (
    <motion.div
      className={`${styles.innerWidth} ${styles.flexCenter} ${styles.paddings} flex-col`}
    >
      <Navbar />
      <LatestArticles />
    </motion.div>
  );
}
