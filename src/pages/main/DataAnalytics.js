import React from "react";
// import styles from "../../styles/Global";
import Header from "../../components/Header";
import Title from "../../components/Title";
export default function DataAnalytics() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <div className="relative top-20 flex flex-col justify-between items-center w-[1280px] min-w-[1280px]">
        <Title lineContent="This is the" lineContent2=" Data Analytics page" />
        <p className="absolute top-60 right-40 right w-1/3 text-4xl">
          A character his cache I succeed employed entire been it find the more
          and may the to his their five and towards in lay rippedup, what and so
          endure before for her been decades the few to than would was concept.
        </p>
      </div>
    </div>
  );
}
