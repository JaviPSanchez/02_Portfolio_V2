import React from "react";
import Card from "../Card";
import project1 from "../../assets/images/project1.jpg";
import project2 from "../../assets/images/project2.jpg";
import project3 from "../../assets/images/project3.jpg";
import project4 from "../../assets/images/project4.jpg";
import Search from "../SearchBar";

const cards = [
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

export default function WebDev() {
  return (
    <div className="flex flex-col justify-start items-center w-full h-full">
      <Search />

      <div className="w-full flex flex-wrap bg-grey1 dark:bg-dark2 rounded-xl mt-4 p-4 overflow-scroll overflow-x-hidden scrollbar-hide">
        {cards.map((item) => {
          return (
            <div className="w-1/3 p-10" key={item.id}>
              {item.element}
            </div>
          );
        })}
      </div>
    </div>
  );
}
