import styles from "@styles";

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row w-full`}>
    <div
      className={`${styles.flexCenter} w-[80px] h-[80px] rounded-[24px] bg-[#323F5D]`}
    >
      <p className="font-Rubik font-bold w-full text-grey4 text-6xl text-center">
        {number}
      </p>
    </div>
    <p className="flex-1 ml-[30px] font-bold text-5xl text-[#B0B0B0] leading-[32.4px]">
      {text}
    </p>
  </div>
);

export default StartSteps;
