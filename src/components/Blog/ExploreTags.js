import React from "react";
import styles from "../../styles/Global";

export default function ExploreTags({
  title,
  popular,
  setFiltered,
  activeTopic,
  setActiveTopic,
}) {
  return (
    <div className="flex flex-wrap w-full mt-10">
      <button
        className={`${styles.buttonTags}`}
        onClick={() => setActiveTopic(0)}
      >
        All
      </button>
      <button
        className={`${styles.buttonTags}`}
        onClick={() => setActiveTopic(1)}
      >
        Machine Learning
      </button>
      <button
        className={`${styles.buttonTags}`}
        onClick={() => setActiveTopic(2)}
      >
        Natural language Processing
      </button>
      <button
        className={`${styles.buttonTags}`}
        onClick={() => setActiveTopic(3)}
      >
        Deployment
      </button>
      <button
        className={`${styles.buttonTags}`}
        onClick={() => setActiveTopic(4)}
      >
        Deep Learning
      </button>
    </div>
  );
}
