// import React, { useState } from "react";
import { db } from "../../utils/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { Button } from "../Button";
import { useFormik } from "formik";
import basicSchema from "../../schemas";
import styles from "../../styles/Global";

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
    <form
      autoComplete="off"
      className="flex flex-col justify-center items-center w-5/6 h-5/6 font-Rubik"
      onSubmit={handleSubmit}
    >
      <h1 className="text-6xl mb-14 font-bold uppercase dark:text-white">
        Contact Me 🚀
      </h1>

      <label htmlFor="name" className="text-2xl w-full mb-2 p-4">
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

      <label htmlFor="email" className="text-2xl w-full mb-2 p-4">
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

      <label htmlFor="message" className="text-2xl w-full mb-2 p-4">
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
    </form>
  );
};

export default Content;
