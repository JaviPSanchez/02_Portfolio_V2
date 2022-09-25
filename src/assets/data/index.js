import {
  html,
  css,
  js,
  react,
  sass,
  tail,
  three,
  motion,
  web1,
  web2,
  web3,
  web4,
  data1,
  data2,
  data3,
  data4,
  front,
  software,
  science,
  node,
  flask,
  fastAPI,
  postgre,
  firebase,
  mongo,
  sql,
  python,
  spark,
  databricks,
  aws,
  azure,
  powerbi,
} from "../../assets/images";
import Card from "../../components/Card";

const badgesFront = [
  {
    id: 1,
    image: <img src={html} alt="html" />,
  },
  {
    id: 2,
    image: <img src={css} alt="css" />,
  },
  {
    id: 3,
    image: <img src={js} alt="js" />,
  },
  {
    id: 4,
    image: <img src={react} alt="react" />,
  },
  {
    id: 5,
    image: <img src={sass} alt="sass" />,
  },
  {
    id: 6,
    image: <img src={tail} alt="tail" />,
  },
  {
    id: 7,
    image: <img src={three} alt="three" />,
  },
];
const badgesBack = [
  {
    id: 1,
    image: <img src={node} alt="node" />,
  },
  {
    id: 2,
    image: <img src={flask} alt="flask" />,
  },
  {
    id: 3,
    image: <img src={fastAPI} alt="fastAPI" />,
  },
  {
    id: 4,
    image: <img src={postgre} alt="postgres" />,
  },
  {
    id: 5,
    image: <img src={firebase} alt="firebase" />,
  },
  {
    id: 6,
    image: <img src={mongo} alt="mongo" />,
  },
];
const badgesData = [
  {
    id: 1,
    image: <img src={sql} alt="sql" />,
  },
  {
    id: 2,
    image: <img src={python} alt="python" />,
  },
  {
    id: 5,
    image: <img src={aws} alt="aws" />,
  },
];

const webProjects = [
  {
    id: 1,
    element: <Card image={web1} title={"1. Landing Page"} />,
  },
  {
    id: 2,
    element: <Card image={web2} title={"2. Portfolio V1"} />,
  },
  {
    id: 3,
    element: <Card image={web3} title={"3. Beer Web"} />,
  },
  {
    id: 4,
    element: <Card image={web4} title={"4. Crypto"} />,
  },
];

const dataProjects = [
  {
    id: 1,
    element: <Card image={data1} title={"1. Portfolio V1"} />,
  },
  {
    id: 2,
    element: <Card image={data2} title={"2. Beer"} />,
  },
  {
    id: 3,
    element: <Card image={data3} title={"3. Crypto"} />,
  },
  {
    id: 4,
    element: <Card image={data4} title={"4. Landing Page V1"} />,
  },
];

const blogPosts = [
  {
    id: 1,
    element: <Card image={data1} title={"Post 1"} />,
    topic: ["All", "Machine Learning"],
  },
  {
    id: 2,
    element: <Card image={data1} title={"Post 2"} />,
    topic: ["All", "Machine Learning", "Deep Learning"],
  },
  {
    id: 3,
    element: <Card image={data1} title={"Post 3"} />,
    topic: ["All", "Machine Learning", "Deep Learning", "Deployment"],
  },
  {
    id: 4,
    element: <Card image={data1} title={"Post 4"} />,
    topic: ["All", "Natural language Processing"],
  },
  {
    id: 5,
    element: <Card image={data1} title={"Post 5"} />,
    topic: [
      "All",
      "Machine Learning",
      "Natural language Processing",
      "Deployment",
    ],
  },
  {
    id: 6,
    element: <Card image={data2} title={"Post 6"} />,
    topic: ["All", "Machine Learning", "Natural language Processing"],
  },
  {
    id: 7,
    element: <Card image={data4} title={"Post 7"} />,
    topic: [
      "All",
      "Machine Learning",
      "Natural language Processing",
      "Deployment",
    ],
  },
];

const HomeCards = [
  {
    id: 1,
    title: "Front Development",
    image: front,
    years: 2,
    text: "years trying to find the best way to communicate",
  },
  {
    id: 2,
    title: "Software Engineering",
    image: software,
    years: 1,
    text: "years giving life and shape to my apps",
  },
  {
    id: 3,
    title: "Data Science Development",
    image: science,
    years: 1,
    text: "years making predictions and trying to find the right data",
  },
];

export {
  badgesFront,
  badgesBack,
  badgesData,
  webProjects,
  dataProjects,
  blogPosts,
  HomeCards,
};
