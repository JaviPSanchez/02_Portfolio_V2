import {
  js,
  react,
  sass,
  tail,
  three,
  data1,
  data2,
  data4,
  front,
  software,
  science,
  node,
  postgre,
  firebase,
  mongo,
  sql,
  python,
  aws,
} from "@images";
import { Card } from "@components";

const BadgesFront = [
  {
    id: 1,
    image: <img src={js} alt="html" />,
  },
  {
    id: 2,
    image: <img src={js} alt="css" />,
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
const BadgesBack = [
  {
    id: 1,
    image: <img src={node} alt="node" />,
  },
  {
    id: 2,
    image: <img src={node} alt="flask" />,
  },
  {
    id: 3,
    image: <img src={node} alt="fastAPI" />,
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
const BadgesData = [
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

const BlogPosts = [
  {
    id: 1,
    element: <Card image={data1} title="Post 1" />,
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

const WelcomeCards = [
  {
    id: 1,
    title: "Digital Development",
    image: front,
    years: 5,
    text: "years trying to find the best way to communicate",
  },
  {
    id: 2,
    title: "Software Engineering",
    image: software,
    years: 2,
    text: "years giving life and shape to my apps",
  },
  {
    id: 3,
    title: "Data Development",
    image: science,
    years: 1,
    text: "years making predictions and trying to find the right data",
  },
];

export { BadgesFront, BadgesBack, BadgesData, BlogPosts, WelcomeCards };
