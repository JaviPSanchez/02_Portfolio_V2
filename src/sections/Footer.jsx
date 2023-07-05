import { motion } from "framer-motion";
import styles from "@styles";
import { footerVariants } from "@utils/motion";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative mt-[20rem]`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className={`${styles.customGradient} font-bold text-7xl mb-4 p-4`}>
          Thank you for visiting!
        </h4>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-center flex-wrap gap-4">
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2022 - 2023 javips. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
