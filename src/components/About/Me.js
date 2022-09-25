import React from "react";

import FrontStack from "./TechStack/FrontStack";
import BackStack from "./TechStack/BackStack";
import DataStack from "./TechStack/DataStack";
import Experience from "./TechStack/Experience";
import TotalProjects from "./TechStack/TotalProjects";

export default function Me() {
  return (
    <div className="grid grid-rows-5 grid-cols-9 gap-6 w-full h-full child:rounded-2xl drop-shadow-md">
      <FrontStack />
      <BackStack />
      <DataStack />
      <TotalProjects />
      <Experience />
    </div>
  );
}
