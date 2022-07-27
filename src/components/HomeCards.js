import Cards from "./Home/Cards";

export default function HomeCards() {
  return (
    <div className="max-w-[1200px] md:max-w-[900px] absolute z-20 top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <div className="flex flex-row justify-center items-center child:m-10 md:child:m-10 child:p-10 md:child:p-2">
        <Cards />
      </div>
    </div>
  );
}
