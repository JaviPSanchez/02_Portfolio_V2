import { motion } from "framer-motion";
import { Navbar } from "@components";
import { Articles, Footer } from "@sections";
import styles from "@styles";

export default function Home() {
  return (
    <motion.div
      className={`${styles.innerWidth} ${styles.flexCenter} ${styles.paddings} flex-col`}
    >
      <Navbar />
      <Articles />
      {/* <Footer /> */}
    </motion.div>
  );
}
