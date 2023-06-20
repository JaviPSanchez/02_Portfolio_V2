import { motion } from "framer-motion";
import { Navbar } from "@components";
import { useParams } from "react-router-dom";
import styles from "@styles";
import { TypingText, TitleText } from "@components";
import { ArticleData } from "@data";

console.log(ArticleData);

const getArticleData = (index) => {
  console.log(index);
  return ArticleData.find((article) => article.id === index);
};

const Article = () => {
  const params = useParams();
  const index = Number(params.id.substring(1));
  const articleData = getArticleData(index);
  console.log(articleData);

  if (!articleData) {
    return null;
  }

  return (
    <motion.div
      className={`${styles.innerWidth} ${styles.flexCenter} ${styles.paddings} flex-col`}
    >
      <Navbar links={"article"} />
      <TypingText title={`| Article ${index}`} textStyles="text-center mt-20" />
      <TitleText title={articleData.title} textStyles="w-2/3 text-center" />
    </motion.div>
  );
};

export default Article;