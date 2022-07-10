import React from "react";

export default function Button({ text }) {
  return (
    <button
      type="submit"
      className="relative mt-10 skew-y-[-3deg] p-4 inline-flex items-center justify-center overflow-hidden group rounded-md"
    >
      <span class="absolute w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05]"></span>
      <span class="relative py-3 transition-all ease-out bg-grey5 rounded-md group-hover:bg-opacity-0 duration-200">
        <span class="font-Rubik p-6 text-black text-4xl hover:text-white uppercase">
          {text}
        </span>
      </span>
    </button>
  );
}
