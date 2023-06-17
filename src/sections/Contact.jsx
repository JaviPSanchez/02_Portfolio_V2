import { ContactContent } from "@components";
import { PhoneCanvas } from "@components";
import { motion } from "framer-motion";
import { slideIn } from "@utils/motion";

export default function Contact() {
  return (
    <section
      className="flex flex-row justify-center items-start w-full mt-[20rem] bg-[#100d25] rounded-2xl overflow-hidden"
      id="contact"
    >
      <div className="flex flex-col justify-center items-start w-1/2 p-20 rounded-xl">
        <ContactContent />
      </div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="w-1/2 h-[800px]"
      >
        <PhoneCanvas />
      </motion.div>
    </section>
  );
}
