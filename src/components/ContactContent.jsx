// import React, { useState } from "react";
import { db } from "@utils/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { Button, ButtonNormal } from "@components";
import { useFormik } from "formik";
import basicSchema from "@schemas";
import styles from "@styles";
import { TypingText } from "@components";
import { motion } from "framer-motion";
import { staggerContainer } from "@utils/motion";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);

  try {
    const docRef = await addDoc(collection(db, "contacts"), {
      name: values.name,
      email: values.email,
      message: values.message,
      created: Timestamp.now(),
    });

    alert("Your message has been submitted👍");
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  actions.resetForm();
};

const Content = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        message: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  return (
    <motion.form
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      autoComplete="off"
      className="flex flex-col justify-center items-center w-full h-5/6 font-Rubik"
      onSubmit={handleSubmit}
    >
      <TypingText
        title="Contact Me"
        customStyles={`${styles.customGradient} text-6xl font-Rubik font-bold text-center uppercase m-10`}
      />

      <label htmlFor="name" className="text-2xl w-full mb-2 p-4 text-grey4">
        Name
      </label>
      <input
        id="name"
        type="text"
        className={
          errors.name && touched.name
            ? `${styles.inputError}`
            : `${styles.inputCorrect}`
        }
        placeholder="Name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.name && touched.name && (
        <p className="text-error text-xl self-start ml-2">{errors.name}</p>
      )}

      <label htmlFor="email" className="text-2xl w-full mb-2 p-4 text-grey4">
        Email
      </label>
      <input
        id="email"
        type="email"
        className={
          errors.email && touched.email
            ? `${styles.inputError}`
            : `${styles.inputCorrect}`
        }
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.email && touched.email && (
        <p className="text-error text-xl self-start ml-2">{errors.email}</p>
      )}

      <label htmlFor="message" className="text-2xl text-grey4 w-full mb-2 p-4">
        Message
      </label>
      <textarea
        id="message"
        type="text"
        className={
          errors.message && touched.message
            ? `${styles.textareaError}`
            : `${styles.textareaCorrect}`
        }
        placeholder="Message"
        value={values.message}
        onChange={handleChange}
        onBlur={handleBlur}
      ></textarea>
      {errors.message && touched.message && (
        <p className="text-error text-xl self-start ml-2">{errors.message}</p>
      )}
      <Button text="Submit" />
    </motion.form>
  );
};

export default Content;
