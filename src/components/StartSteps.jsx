import styles from "@styles";

const StartSteps = ({ number, text }) => (
  <div className={`flex flex-row justify-start items-center w-fit ml-20`}>
    <div
      className={`${styles.flexCenter} w-32 sm:w-44 h-32 rounded-[24px] sm:rounded-xl bg-dark3`}
    >
      <p className="font-Rubik font-bold w-fit text-grey4 text-6xl">{number}</p>
    </div>
    <p className="w-fit ml-12 font-bold text-5xl text-dark2 dark:text-grey4">
      {text}
    </p>
  </div>
);

export default StartSteps;
