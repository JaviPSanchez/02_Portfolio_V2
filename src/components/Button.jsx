export const Button = ({ text }) => {
  return (
    <button
      type="submit"
      className="relative mt-10 skew-y-[-3deg] p-4 inline-flex items-center justify-center overflow-hidden group rounded-md"
    >
      <span className="absolute w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05]"></span>
      <span className="relative py-3 transition-all ease-out bg-grey5 rounded-md group-hover:bg-opacity-0 duration-200">
        <span className="font-Rubik p-6 text-black text-4xl hover:text-white uppercase">
          {text}
        </span>
      </span>
    </button>
  );
};

export const ButtonNormal = ({ text }) => {
  return (
    <button
      type="submit"
      className="font-Rubik skew-y-[-3deg] bg-grey5 text-black hover:text-white hover:bg-black text-center py-4 px-6 mt-12  left-2 drop-shadow-md border-solid border border-black uppercase text-4xl duration-200"
    >
      {text}
    </button>
  );
};
