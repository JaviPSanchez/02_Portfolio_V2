import { useEffect } from "react";
import styles from "@styles";

export default function ExploreTags({
  popular,
  setFiltered,
  activeTopic,
  setActiveTopic,
}) {
  console.log(popular);

  useEffect(() => {
    if (activeTopic === "All") {
      setFiltered(popular);
      return;
    }
    const filtered = popular.filter((item) => item.topic.includes(activeTopic));
    console.log(filtered);

    setFiltered(filtered);
  }, [activeTopic]);

  return (
    <div className="flex flex-wrap w-full">
      <button
        className={
          activeTopic === "All"
            ? `${styles.buttonTagsActive}`
            : `${styles.buttonTagsInactive}`
        }
        onClick={() => setActiveTopic("All")}
      >
        All
      </button>
      <button
        className={
          activeTopic === "Machine Learning"
            ? `${styles.buttonTagsActive}`
            : `${styles.buttonTagsInactive}`
        }
        onClick={() => setActiveTopic("Machine Learning")}
      >
        Machine Learning
      </button>
      <button
        className={
          activeTopic === "Natural language Processing"
            ? `${styles.buttonTagsActive}`
            : `${styles.buttonTagsInactive}`
        }
        onClick={() => setActiveTopic("Natural language Processing")}
      >
        Natural language Processing
      </button>
      <button
        className={
          activeTopic === "Deployment"
            ? `${styles.buttonTagsActive}`
            : `${styles.buttonTagsInactive}`
        }
        onClick={() => setActiveTopic("Deployment")}
      >
        Deployment
      </button>
      <button
        className={
          activeTopic === "Deep Learning"
            ? `${styles.buttonTagsActive}`
            : `${styles.buttonTagsInactive}`
        }
        onClick={() => setActiveTopic("Deep Learning")}
      >
        Deep Learning
      </button>
      <button
        className={
          activeTopic === "CSS"
            ? `${styles.buttonTagsActive}`
            : `${styles.buttonTagsInactive}`
        }
        onClick={() => setActiveTopic("CSS")}
      >
        CSS
      </button>
      <button
        className={
          activeTopic === "JS"
            ? `${styles.buttonTagsActive}`
            : `${styles.buttonTagsInactive}`
        }
        onClick={() => setActiveTopic("JS")}
      >
        JS
      </button>
    </div>
  );
}
