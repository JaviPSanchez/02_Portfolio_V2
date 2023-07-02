import { motion } from "framer-motion";
import styles from "@styles";
import { fadeIn } from "@utils/motion";
import { react } from "@images";

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`relative group ${
      active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
    } flex items-center justify-center min-w-[170px] h-full transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt="imagen"
      className="absolute w-full h-full object-cover rounded-[24px] group-hover:scale-95 transition-all"
    />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {/* {title} */}
      </h3>
    ) : (
      <div className="group-hover:scale-95 transition-all absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <div className="flex flex-row justify-start items-center">
          <div
            className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism`}
          >
            <img
              src={react}
              alt="headset"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <h2 className=" font-semibold sm:text-[32px] text-4xl text-white ml-6">
            {title}
          </h2>
        </div>

        <button className="text-black text-center uppercase font-bold hover:scale-105 text-4xl self-center p-4 bg-white rounded-lg w-1/3 mt-4">
          Go
        </button>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
