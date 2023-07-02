import { motion } from "framer-motion";
import { Calendar, Clock } from "@svg";
import { useNavigate } from "react-router-dom";

const ArticleCard = ({
  index,
  title,
  subtitle,
  time,
  image,
  topic,
  date,
  variants,
  customStyles,
}) => {
  const navigate = useNavigate();
  const handleClick = (index) => {
    navigate(`/blog/:${index}`);
  };
  return (
    <motion.div
      variants={variants}
      className={`${customStyles} flex flex-col bg-[#100d25] rounded-3xl h-fit overflow-hidden border-[0.5px] border-grey4`}
      onClick={() => handleClick(index)}
    >
      <div className="h-[250px] w-full">
        <img
          src={image}
          alt={`article_${index}`}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-row justify-start items-center gap-4">
        <Calendar fillColor="#1363DF" width="30px" height="30px" />
        <p className="text-secondary text-2xl font-bold">{date}</p>
        <Clock fillColor="#1363DF" width="30px" height="30px" />
        <p className="text-secondary text-2xl font-bold">{time}min</p>
      </div>

      <div className="h-[250px] w-full p-6">
        <p className="w-fit h-28 text-white font-bold text-5xl">{title}</p>

        <div className="mt-7 flex flex-col justify-center items-start">
          <p className="h-20 text-white text-2xl">{subtitle}</p>
        </div>
        <div className="mt-10 flex flex-wrap flex-row gap-2">
          {topic.map((item, index) => {
            return (
              <span
                className="text-grey4 border-[0.5px] border-grey4 text-2xl px-4 py-2 rounded-full mb-4"
                key={index}
              >
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default ArticleCard;
