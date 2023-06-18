import {
  js,
  react,
  next,
  tail,
  three,
  front,
  software,
  science,
  node,
  postgres,
  firebase,
  mongo,
  python,
  web1,
  web2,
  web3,
  web4,
  project1,
  project2,
  project3,
} from "@images";

const Badges = [
  {
    id: 1,
    image: <img src={js} alt="javascript" />,
  },
  {
    id: 2,
    image: <img src={react} alt="react" />,
  },
  {
    id: 3,
    image: <img src={next} alt="next" />,
  },
  {
    id: 4,
    image: <img src={node} alt="node" />,
  },
  {
    id: 5,
    image: <img src={firebase} alt="firebase" />,
  },
  {
    id: 6,
    image: <img src={tail} alt="tail" />,
  },
  {
    id: 7,
    image: <img src={three} alt="three" />,
  },
  {
    id: 8,
    image: <img src={python} alt="python" />,
  },
  {
    id: 9,
    image: <img src={postgres} alt="postgres" />,
  },
  {
    id: 10,
    image: <img src={mongo} alt="mongo" />,
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

const NavLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const ExploreProjects = [
  {
    id: "project-1",
    imgUrl: web1,
    title: "The Hogwarts",
  },
  {
    id: "project-2",
    imgUrl: web2,
    title: "The Upside Down",
  },
  {
    id: "project-3",
    imgUrl: web3,
    title: "Kadirojo Permai",
  },
  {
    id: "project-4",
    imgUrl: web4,
    title: "Paradise Island",
  },
  {
    id: "project-5",
    imgUrl: web1,
    title: "Hawkins Labs",
  },
];

const StartingFeatures = [
  "Software-Development",
  "Data-Driven Decisions",
  "Digital Development",
];

const ArticleData = [
  {
    id: 1,
    title: "Styling Techniques",
    subtitle: "Some awesome styling techniques to learn",
    time: 5,
    topic: [
      "All",
      "Machine Learning",
      "Natural language Processing",
      "Deployment",
    ],
    image: project1,
    date: "June 16, 2023",
  },
  {
    id: 2,
    title: "React Arquichecture",
    subtitle: "Lorem ipsun y mas cositas interesantes",
    time: 10,
    topic: ["All", "CSS", "Machine Learning", "Deployment"],
    image: project2,
    date: "Janvier 23, 2023",
  },
  {
    id: 3,
    title: "Some coding",
    subtitle: "Como organizar el codigo con las ultimas tecnicas de software",
    time: 2,
    topic: ["All", "JS", "Machine Learning"],
    image: project3,
    date: "May 06, 2023",
  },
  {
    id: 4,
    title: "Some coding",
    subtitle: "Como organizar el codigo con las ultimas tecnicas de software",
    time: 2,
    topic: ["JS"],
    image: project3,
    date: "May 06, 2023",
  },
  {
    id: 5,
    title: "Some coding",
    subtitle: "Como organizar el codigo con las ultimas tecnicas de software",
    time: 2,
    topic: ["JS"],
    image: project3,
    date: "May 06, 2023",
  },
  {
    id: 6,
    title: "Some coding",
    subtitle: "Como organizar el codigo con las ultimas tecnicas de software",
    time: 2,
    topic: ["CSS"],
    image: project3,
    date: "May 06, 2023",
  },
  {
    id: 7,
    title: "Some coding",
    subtitle: "Como organizar el codigo con las ultimas tecnicas de software",
    time: 2,
    topic: ["All"],
    image: project3,
    date: "May 06, 2023",
  },
  {
    id: 8,
    title: "Some coding",
    subtitle: "Como organizar el codigo con las ultimas tecnicas de software",
    time: 2,
    topic: ["Machine Learning"],
    image: project3,
    date: "May 06, 2023",
  },
];

export {
  Badges,
  WelcomeCards,
  NavLinks,
  ExploreProjects,
  StartingFeatures,
  ArticleData,
};
