import Cards from "./Home/Cards";

export default function HomeCards() {
  return (
    <div className="absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20 flex justify-center items-center">
      <div className="flex flex-row justify-center items-center child:m-20 child:p-10">
        <Cards />
      </div>
    </div>
  );
}
