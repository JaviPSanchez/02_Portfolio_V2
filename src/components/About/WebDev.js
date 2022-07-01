import React from "react";
import Card from "../Card";
import project1 from "../../assets/images/gallery1.jpg";
import project2 from "../../assets/images/gallery2.jpg";
import project3 from "../../assets/images/gallery3.jpg";
import project4 from "../../assets/images/gallery4.jpg";
import SearchIcon from "@mui/icons-material/Search";

const cards = [
  {
    id: 1,
    element: <Card image={project1} title={"1. Portfolio V1"} />,
  },
  {
    id: 2,
    element: <Card image={project2} />,
  },
  {
    id: 3,
    element: <Card image={project3} />,
  },
  {
    id: 4,
    element: <Card image={project4} />,
  },
];

export default function WebDev() {
  return (
    <div className="flex flex-col justify-start items-center w-full h-full p-2">
      <div className="flex flex-col w-full bg-grey1 rounded-xl p-4">
        <div className="w-1/2 bg-quaternary rounded-xl p-2 drop-shadow-md">
          <SearchIcon fontSize="large" />
        </div>
      </div>

      <div className="grid grid-rows-2 grid-cols-4 gap-10 w-full bg-grey1 rounded-xl mt-4 p-4 overflow-scroll overflow-x-hidden scrollbar-hide">
        {cards.map((item) => {
          return (
            <div className="p-2" key={item.id}>
              {item.element}
            </div>
          );
        })}
      </div>
    </div>
  );
}
