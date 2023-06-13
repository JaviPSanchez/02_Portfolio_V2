import { motion } from "framer-motion";
import styles from "@styles";
import { fadeIn } from "@utils/motion";
import { Testimonials } from "@data";
import { TypingText, TitleText } from "@components";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="flex flex-row bg-black p-10 rounded-3xl xs:w-[320px] w-5/6"
  >
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-[20rem] bg-black-100 rounded-[20px]">
      <div
        className={`rounded-2xl ${styles.padding} min-h-[150px] text-center`}
      >
        <TypingText title="| Latest Articles" textStyles="text-center" />
        <TitleText title={<>Let me show some of the newest articles</>} />
      </div>
      <div className={`pb-14 ${styles.paddingX} flex flex-row gap-7`}>
        {Testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;
