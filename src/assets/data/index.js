import {
  html,
  css,
  js,
  react,
  sass,
  tail,
  three,
  motion,
  gsap,
  web1,
  web2,
  web3,
  web4,
  data1,
  data2,
  data3,
  data4,
} from "../../assets/images";
import Card from "../../components/Card";

const badges = [
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
    image: <img src={motion} alt="motion" />,
  },
  {
    id: 8,
    image: <img src={three} alt="three" />,
  },
  {
    id: 9,
    image: <img src={gsap} alt="gsap" />,
  },
];

const webProjects = [
  {
    id: 1,
    element: <Card image={web1} title={"1. Portfolio V1"} />,
  },
  {
    id: 2,
    element: <Card image={web2} title={"2. Beer"} />,
  },
  {
    id: 3,
    element: <Card image={web3} title={"3. Crypto"} />,
  },
  {
    id: 4,
    element: <Card image={web4} title={"4. Other"} />,
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

export { badges, webProjects, dataProjects, blogPosts };
