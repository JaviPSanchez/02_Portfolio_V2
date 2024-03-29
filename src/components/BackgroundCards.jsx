import { WelcomeCards } from "@data";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cardsWelcome } from "@utils/motion";
import styles from "@styles";

const BackgroundCards = () => {
  return (
    <div
      className={`${styles.welcomeCardsPosition} sm:h-2/3 h-fit sm:overflow-x-hidden sm:mt-10 hide-scrollbar overflow-x-hidden`}
    >
      <div className=" sm:flex sm:flex-col flex flex-row justify-center items-center gap-12">
        {WelcomeCards.map((item) => {
          return (
            <div key={item.id}>
              <Link to="/home">
                <motion.div
                  variants={cardsWelcome}
                  initial="hidden"
                  whileInView="show"
                  className={`${styles.flexCenter} group mirror-effect sm:min-h-[350px] h-fit hover:bg-white flex-col font-Rubik text-center`}
                >
                  <div
                    className={`w-2/3 md:w-1/2 sm:w-1/3 ${styles.customGradientBadge} p-14 sm:p-5 rounded-full mb-12 shadow-2xl shadow-gray-500`}
                  >
                    <img src={item.image} alt="Not found" />
                  </div>

                  <div
                    className={`${styles.customGradient} sm:text-5xl min-h-[50px] max-w-min font-Rubik uppercase text-5xl font-bold mb-4`}
                  >
                    {item.title}
                  </div>
                  <div className="flex flex-row justify-center items-start p-4 mt-4">
                    <span className="h-full text-6xl text-[#5555ff] font-bold mr-4">
                      +{item.years}
                    </span>
                    <p className="sm:text-xl font-Rubik text-2xl dark:text-[#FFFFFF] text-left tracking-normal group-hover:text-black">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BackgroundCards;
