import React, { useState } from "react";
import { db } from "../../utils/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import Button from "../Button";

const Content = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "contacts"), {
        name: name,
        email: email,
        message: message,
        created: Timestamp.now(),
      });

      alert("Your message has been submitted👍");
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form
      className="flex flex-col justify-center items-center w-5/6 h-5/6 font-Rubik"
      onSubmit={handleSubmit}
    >
      <h1 className="text-6xl mb-14 font-bold uppercase">Contact Me 🚀</h1>

      <label className="text-2xl w-full mb-2 p-4">Name</label>
      <input
        className="text-2xl w-full mb-4 rounded-xl p-4"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label className="text-2xl w-full mb-2 p-4">Email</label>
      <input
        className="text-2xl w-full mb-4 p-4 rounded-xl"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label className="text-2xl w-full mb-2 p-4">Message</label>
      <textarea
        className="text-2xl w-full h-1/2 mb-20 rounded-xl p-4"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <Button text={"Submit"} />
    </form>
  );
};

export default Content;
