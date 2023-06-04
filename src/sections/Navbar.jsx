import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "@styles";
import { navVariants } from "@utils/motion";
import { Me } from "@svg";

export default function Navbar() {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.innerWidth} py-8 relative mb-40`}
    >
      {/* <div className="absolute w-[50%] inset-0 gradient-01" /> */}
      <div className="mx-auto flex justify-between gap-8">
        <Link to="/home">
          <Me fillColor="#FFFFFF" />
        </Link>
        <Link to="/blog">
          <h2 className="font-Rubik font-extrabold text-[24px] leading-[30.24px] text-white">
            Blog
          </h2>
        </Link>
        <img
          src="/menu.svg"
          alt="menu"
          className="w-[24px] h-[24px] object-contain"
        />
      </div>
    </motion.nav>
  );
}
