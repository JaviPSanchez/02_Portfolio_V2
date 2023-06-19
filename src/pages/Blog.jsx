import { motion } from "framer-motion";
import { Navbar } from "@components";
import { Articles } from "@sections";
import styles from "@styles";

const Home = () => {
  return (
    <motion.div
      className={`${styles.innerWidth} ${styles.flexCenter} ${styles.paddings} flex-col`}
    >
      <Navbar links={"blog"} />
      <Articles />
    </motion.div>
  );
};

export default Home;
