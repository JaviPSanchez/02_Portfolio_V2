import { motion } from "framer-motion";
import { Navbar } from "@components";
import { useParams } from "react-router-dom";
import styles from "@styles";
import { TypingText, TitleText } from "@components";
import { ArticleData } from "@data";

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
      className={`${styles.innerWidth} ${styles.flexCenter} ${styles.paddings} ${styles.margings} flex-col`}
    >
      <Navbar links={"article"} />
      <TypingText
        title={`🦠 Article ${index}`}
        customStyles={`text-center dark:text-[#FFFFFF] mt-20`}
      />
      <TitleText
        title={articleData.title}
        customStyles={`${styles.customGradient} text-6xl font-Rubik font-bold text-start mt-16`}
      />
      <div className="relative w-2/3 max-h-96 mt-20 rounded-lg overflow-hidden border-[0.5px] border-grey4`">
        <img className="top-0 w-full h-[60rem]" src={articleData.image} />
      </div>
      <div className="w-5/6 flex flex-col mt-20">
        <h1 className="text-Rubik text-5xl text-primary dark:text-white font-bold">
          {articleData.subtitle}
        </h1>
        <p className="text-4xl text-primary dark:text-white w-full mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, vel
          temporibus doloremque, dicta corporis fugit, suscipit molestiae
          assumenda accusantium omnis quis maxime praesentium quas itaque illo
          possimus est nulla. Id. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eum, vel temporibus doloremque, dicta corporis
          fugit, suscipit molestiae assumenda accusantium omnis quis maxime
          praesentium quas itaque illo possimus est nulla. Id. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Eum, vel temporibus doloremque,
          dicta corporis fugit, suscipit molestiae assumenda accusantium omnis
          quis maxime praesentium quas itaque illo possimus est nulla. Id. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Eum, vel temporibus
          doloremque, dicta corporis fugit, suscipit molestiae assumenda
          accusantium omnis quis maxime praesentium quas itaque illo possimus
          est nulla. Id.
        </p>
      </div>
    </motion.div>
  );
};

export default Article;
