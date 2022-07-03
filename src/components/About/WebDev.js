import React from "react";
import Card from "../Card";
import project1 from "../../assets/images/gallery1.jpg";
import Search from "../SearchBar";

const cards = [
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

export default function WebDev() {
  return (
    <div className="flex flex-col justify-start items-center w-full h-full p-2">
      <Search />

      <div className="grid grid-rows-2 grid-cols-4 gap-10 w-full bg-grey1 rounded-xl mt-4 p-4 overflow-scroll overflow-x-hidden scrollbar-hide">
        {cards.map((item) => {
          return <div key={item.id}>{item.element}</div>;
        })}
      </div>
    </div>
  );
}
