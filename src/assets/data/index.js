import Bell from "../../assets/svg/bell";
import Card from "../../components/Card";
import project1 from "../../assets/images/project1.jpg";
import project2 from "../../assets/images/project2.jpg";
import project3 from "../../assets/images/project3.jpg";
import project4 from "../../assets/images/project4.jpg";

const badges = [
  {
    id: 1,
    svg: <Bell />,
  },
  {
    id: 2,
    svg: <Bell />,
  },
  {
    id: 3,
    svg: <Bell />,
  },
  {
    id: 4,
    svg: <Bell />,
  },
  {
    id: 5,
    svg: <Bell />,
  },
  {
    id: 5,
    svg: <Bell />,
  },
  {
    id: 5,
    svg: <Bell />,
  },
  {
    id: 5,
    svg: <Bell />,
  },
  {
    id: 5,
    svg: <Bell />,
  },
  {
    id: 5,
    svg: <Bell />,
  },
  {
    id: 5,
    svg: <Bell />,
  },
  {
    id: 5,
    svg: <Bell />,
  },
  {
    id: 5,
    svg: <Bell />,
  },
];

const webProjects = [
  {
    id: 1,
    element: <Card image={project1} title={"1. Portfolio V1"} />,
  },
  {
    id: 2,
    element: <Card image={project1} title={"2. Beer"} />,
  },
  {
    id: 3,
    element: <Card image={project1} title={"3. Crypto"} />,
  },
  {
    id: 4,
    element: <Card image={project1} title={"4. Other"} />,
  },
];

const dataProjects = [
  {
    id: 1,
    element: <Card image={project1} title={"1. Portfolio V1"} />,
  },
  {
    id: 2,
    element: <Card image={project2} title={"2. Beer"} />,
  },
  {
    id: 3,
    element: <Card image={project3} title={"3. Crypto"} />,
  },
  {
    id: 4,
    element: <Card image={project4} title={"4. Landing Page V1"} />,
  },
];

const blogPosts = [
  {
    id: 1,
    element: <Card image={project4} title={"Post 1"} />,
    topic: ["All", "Machine Learning"],
  },
  {
    id: 2,
    element: <Card image={project4} title={"Post 2"} />,
    topic: ["All", "Machine Learning", "Deep Learning"],
  },
  {
    id: 3,
    element: <Card image={project4} title={"Post 3"} />,
    topic: ["All", "Machine Learning", "Deep Learning", "Deployment"],
  },
  {
    id: 4,
    element: <Card image={project4} title={"Post 4"} />,
    topic: ["All", "Natural language Processing"],
  },
  {
    id: 5,
    element: <Card image={project4} title={"Post 5"} />,
    topic: [
      "All",
      "Machine Learning",
      "Natural language Processing",
      "Deployment",
    ],
  },
  {
    id: 6,
    element: <Card image={project4} title={"Post 6"} />,
    topic: ["All", "Machine Learning", "Natural language Processing"],
  },
  {
    id: 7,
    element: <Card image={project4} title={"Post 7"} />,
    topic: [
      "All",
      "Machine Learning",
      "Natural language Processing",
      "Deployment",
    ],
  },
];

export { badges, webProjects, dataProjects, blogPosts };
