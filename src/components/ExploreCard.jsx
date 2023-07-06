import { motion } from "framer-motion";
import styles from "@styles";
import { fadeIn } from "@utils/motion";
import { react } from "@images";

const ExploreCard = ({
  id,
  imgUrl,
  title,
  index,
  active,
  handleClick,
  href,
}) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`relative group ${
      active === id
        ? "lg:flex-[3.5] sm:flex-[5.5] flex-[10]"
        : "lg:flex-[0.5] sm:flex-[0.5] flex-[1]"
    } flex items-center justify-center min-w-[170px] h-full transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt="imagen"
      className="absolute w-full h-full object-cover rounded-xl group-hover:scale-95 transition-all border-[0.5px] dark:border-none border-[#CCDBE0] drop-shadow-xl"
    />
    {active !== id ? (
      <h3 className="">{/* {title} */}</h3>
    ) : (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="group-hover:scale-95 transition-all absolute p-8 flex justify-start w-full h-full flex-col bg-[rgba(0,0,0,0.5)] rounded-xl"
      >
        <h2 className="font-semibold sm:text-[32px] text-5xl text-white m-8 glassmorphism w-fit p-6 rounded-[24px]">
          {title}
        </h2>
        <div className="flex flex-row justify-start items-center gap-6 m-8">
          <div
            className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism`}
          >
            <img
              src={react}
              alt="headset"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <div
            className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism`}
          >
            <img
              src={react}
              alt="headset"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </a>
    )}
  </motion.div>
);

export default ExploreCard;
