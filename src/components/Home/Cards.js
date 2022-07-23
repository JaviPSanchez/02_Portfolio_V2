import { HomeCards } from "../../assets/data";
import { motion } from "framer-motion";

export default function Cards() {
  return (
    <>
      {HomeCards.map((item) => {
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            key={item.id}
            className="mirror-effect flex flex-col justify-center items-center font-Rubik text-4xl text-black text-center"
          >
            <div className="bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] p-14 w-2/3 rounded-full mb-12 shadow-2xl shadow-gray-500">
              <img src={item.image} alt="Not found" />
            </div>
            <h2 className="font-Rubik uppercase text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6]">
              {item.title}
              {item.id === 3 ? <br /> : null}
              {item.id === 3 ? <br /> : null}
            </h2>
            <p className="font-Rubik text-2xl mt-10 dark:text-white">
              <span className="text-4xl text-[#5555ff] font-bold">
                +{item.years}&nbsp;
              </span>
              {item.text}
              {item.id === 3 ? <br /> : null}
              {item.id === 3 ? <br /> : null}
            </p>
          </motion.div>
        );
      })}
    </>
  );
}
