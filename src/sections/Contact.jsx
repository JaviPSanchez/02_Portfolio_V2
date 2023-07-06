import { ContactContent } from "@components";
import { PhoneCanvas } from "@components";
import { motion } from "framer-motion";
import { slideIn } from "@utils/motion";

export default function Contact() {
  return (
    <section
      className="flex flex-row sm:flex-col justify-center items-start w-full mt-[20rem] bg-grey3 dark:bg-[#100d25] border-[0.5px] border-grey4 rounded-2xl overflow-hidden"
      id="contact"
    >
      <div className="flex flex-col justify-center items-start sm:items-center w-1/2 sm:w-full p-20 sm:p-10 rounded-xl">
        <ContactContent />
      </div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="w-1/2 h-[800px] sm:w-full sm:h-[400px]"
      >
        <PhoneCanvas />
      </motion.div>
    </section>
  );
}
