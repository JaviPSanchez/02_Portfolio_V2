import { useContext } from "react";
import { motion } from "framer-motion";
import styles from "@styles";
import { footerVariants } from "@utils/motion";
import { ThemeContext } from "@context";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative mt-[20rem] sm:mt-[10rem]`}
    >
      <div
        className={
          theme === "dark" ? "footer-gradient--dark" : "footer-gradient--light"
        }
      />
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className="flex items-center justify-between flex-wrap gap-5">
          <h4
            className={`${styles.customGradient} font-bold text-7xl mb-4 p-4 sm:text-center`}
          >
            Thank you for visiting!
          </h4>
        </div>

        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-black dark:bg-white opacity-10" />

          <div className="flex items-center justify-center flex-wrap gap-4">
            <p className="font-normal text-[14px] text-black dark:text-white opacity-50">
              Copyright © 2022 - 2023 javips. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
