import React from "react";
import Search from "../SearchBar";
import Card from "../Card";
import project1 from "../../assets/images/gallery1.jpg";
const dataCards = [
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
export default function Data() {
  return (
    <div className="flex flex-col justify-start items-center w-full h-full">
      <Search />

      <div className="w-full flex flex-wrap bg-grey1 rounded-xl mt-4 p-4 overflow-scroll overflow-x-hidden scrollbar-hide">
        {dataCards.map((item) => {
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
