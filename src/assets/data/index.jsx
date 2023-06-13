import {
  js,
  react,
  next,
  tail,
  three,
  data1,
  data2,
  data4,
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
} from "@images";
import { GitHub } from "@svg";
import { Card } from "@components";

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

const Socials = [
  // {
  //   name: "twitter",
  //   url: "/twitter.svg",
  // },
  // {
  //   name: "linkedin",
  //   url: "/linkedin.svg",
  // },
  {
    name: "Github",
    url: <GitHub fillColor={"#FFFFFF"} />,
  },
  // {
  //   name: "facebook",
  //   url: "/facebook.svg",
  // },
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
  "Data Development",
  "Digital Management",
];

const Testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export {
  Badges,
  BlogPosts,
  WelcomeCards,
  Socials,
  NavLinks,
  ExploreProjects,
  StartingFeatures,
  Testimonials,
};
