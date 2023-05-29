import { WelcomeCards } from "../assets/data/data";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cardsWelcome } from "../utils/motion";
export const BackgroundCards = () => {
  return (
    <div className="max-w-[1200px] md:max-w-[900px] absolute z-20 top-[60%] xs:top-[65%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <div className="w-[1200px] md:max-w-[900px] sm:max-w-[700px] xs:max-w-[450px] xxs:max-w-[390px] flex flex-wrap justify-center child:m-10 md:child:m-10 sm:child:m-4 child:p-10 md:child:p-2">
        {WelcomeCards.map((item) => {
          return (
            <>
              <Link to={"/home"}>
                <motion.div
                  variants={cardsWelcome}
                  initial="hidden"
                  whileInView="show"
                  key={item.id}
                  className="mirror-effect hover:bg-white hover:scale-105 transition-all w-full md:max-w-[20rem] sm:max-w-[20rem] xxs:max-w-[16rem] md:h-[30rem] sm:h-[26rem] xs:h-[20rem] flex flex-col justify-start items-center font-Rubik text-black text-center"
                >
                  <div className="w-2/3 md:w-1/2 sm:w-1/3 bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] p-14 md:p-9 sm:p-5 rounded-full mb-12 xs:mb-6 shadow-2xl shadow-gray-500">
                    <img src={item.image} alt="Not found" />
                  </div>

                  <h2 className="font-Rubik uppercase text-4xl md:text-3xl sm:text-2xl xs:text-xl sm:max-w-[150px] font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6]">
                    {item.title}
                  </h2>

                  <p className="font-Rubik text-2xl sm:text-xl mt-10 xs:mt-6 dark:text-white">
                    <span className="text-4xl sm:text-2xl xxs:text-xl text-[#5555ff] dark:text-[#000000] font-bold">
                      +{item.years}&nbsp;
                    </span>
                    {item.text}
                  </p>
                </motion.div>
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
};
