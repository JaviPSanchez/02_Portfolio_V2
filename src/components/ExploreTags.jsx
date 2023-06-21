import { useEffect } from "react";
import styles from "@styles";

export default function ExploreTags({
  popular,
  setFiltered,
  activeTopic,
  setActiveTopic,
}) {
  useEffect(() => {
    if (activeTopic === "All") {
      setFiltered(popular);
    } else {
      const filtered = popular.filter((item) =>
        item.topic.includes(activeTopic)
      );
      setFiltered(filtered);
    }
  }, [activeTopic, popular, setFiltered]);

  return (
    <div className="flex flex-wrap w-full">
      {popular
        .flatMap((item) => item.topic)
        .filter((value, index, self) => self.indexOf(value) === index)
        .map((topic) => (
          <button
            key={topic}
            className={
              activeTopic === topic
                ? `${styles.buttonTagsActive}`
                : `${styles.buttonTagsInactive}`
            }
            onClick={() => setActiveTopic(topic)}
          >
            {topic}
          </button>
        ))}
    </div>
  );
}
