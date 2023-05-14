import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <header className="w-full h-[450px] bg-blue-400">Header</header>
      <section className="w-full h-[450px] bg-blue-200">About</section>
      <section className="w-full h-[450px] bg-pink-400">Projects</section>
      <footer className="w-full h-[450px] bg-red-400">Footer</footer>
    </motion.div>
  );
}
