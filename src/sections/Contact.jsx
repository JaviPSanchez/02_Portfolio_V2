import { motion } from "framer-motion";
import { ContactContent } from "@components";
import { slideIn } from "@utils/motion";

export default function Contact() {
  return (
    <motion.section
      className="mt-[20rem] flex flex-col justify-center items-center"
      id="contact"
      variants={slideIn("left", "tween", 0.2, 1)}
    >
      <div className="flex flex-col justify-center items-center bg-grey4 w-1/3 min-w-[600px] md:min-w-[500px] p-20 rounded-xl shadow-xl">
        <ContactContent />
      </div>
    </motion.section>
  );
}
