import React from "react";

export default function BlogCard({ title }) {
  return (
    <div className="w-full h-[300px] bg-grey1 dark:bg-dark2 h-1/4 p-2 rounded-xl">
      <h1 className="font-Rubik text-8xl">{title}</h1>
      <p className="font-Rubik text-xl">Lorem ipsum omocdso</p>
    </div>
  );
}
