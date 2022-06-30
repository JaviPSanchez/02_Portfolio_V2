import React from "react";
import { motion } from "framer-motion";
import HeaderForm from "../components/Academy/HeaderForm";
import Login from "../components/Academy/Login";

export default function Projects() {
  return (
    <motion.div
      className="h-5/6 mx-10 flex flex-col justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <div className="bg-white min-h-full h-screen w-1/2 flex flex-col py-12 px-4 sm:px-6 items-center justify-center text-xl text-center rounded-xl p-2 drop-shadow-md">
        <div className="max-w-md w-full space-y-8">
          <HeaderForm
            heading="Login to your account"
            paragraph="Don't have an account yet? "
            linkName="Signup"
            linkUrl="/academy/signup"
          />
          <Login />
        </div>
      </div>
    </motion.div>
  );
}
