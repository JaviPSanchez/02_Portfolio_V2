export const Button = ({ text }) => {
  return (
    <button
      type="submit"
      className="w-fit text-white hover:scale-110 text-4xl uppercase mt-10 skew-y-[-3deg] rounded-md p-6 border-2 border-black border-none bg-gradient-to-br from-[#ff00c6] via-[#ff5478] to-[#ff8a05] transition-all"
    >
      {text}
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
