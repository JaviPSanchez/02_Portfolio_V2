import React from "react";
import Header from "../../components/Header";
import Title from "../../components/Title";
export default function about() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <div className="relative top-20 flex flex-col justify-between items-center w-[1280px] min-w-[1280px]">
        <Title lineContent="This is the" lineContent2=" About page" />
        <p className="absolute top-60 right-40 right w-1/3 text-4xl">
          A character his cache I succeed employed entire been it find the more
          and may the to his their five and towards in lay rippedup, what and so
          endure before for her been decades the few to than would was concept.
        </p>
      </div>
    </div>
  );
}

/*
.container {
  position: relative;
  width: 1280px;
  min-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  .page {
    position: absolute;
    .inner {
      display: flex;
      justify-content: center;
      h1 {
        font-family: "Bebas Neue";
        font-size: 52px;
        letter-spacing: 0.1rem;
        .line-wrap {
          overflow: hidden;
          height: 66px;
        }
      }
      p {
        font-family: "Poppins";
        margin-top: 200px;
        width: 340px;
        font-weight: 300;
        line-height: 24px;
        font-size: 14px;
      }
    }
  }
}

*/
