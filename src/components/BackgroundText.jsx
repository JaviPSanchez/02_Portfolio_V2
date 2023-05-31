const BackgroundText = () => {
  return (
    <div className="w-2/3 absolute top-[25%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20 flex flex-col justify-center items-center">
      <h1 className="font-Rubik text-3xl font-normal text-black text-center">
        Hi, glad to see you here!
      </h1>
      <p className="bg-clip-text bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] mt-12 font-Rubik text-center font-bold uppercase text-transparent text-8xl">
        Things I do
      </p>
    </div>
  );
};

export default BackgroundText;
