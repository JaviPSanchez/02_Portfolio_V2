import React from "react";
import { useNavigate } from "react-router";
import styles from "../../styles/Global";
import Header from "../../components/Header";
export default function DataEngineering() {
  const navigate = useNavigate();
  const handleBack = (e) => {
    e.preventDefault();
    navigate("/about");
  };
  return (
    <>
      <Header />
      <div className=" flex flex-col justify-center items-center">
        <button className={`${styles.button}`} onClick={handleBack}>
          Back
        </button>
        <div className="text-8xl">Data Engineering</div>
      </div>
    </>
  );
}
