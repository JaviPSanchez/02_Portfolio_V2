import { DataStack } from "@components";

const DataDev = () => {
  return (
    <section className="h-full w-5/6 flex justify-center items-center m-60">
      <div className="flex w-full h-full">
        <div className="w-2/3 px-10">
          <p class="font-Rubik text-12xl text-grey4 font-bold">02</p>
          <h3 class="font-Rubik font-bold w-full text-grey4 text-6xl mt-6">
            IA Data Driven
          </h3>
          <p class="font-Rubik text-3xl text-white mt-10 text-justify">
            To extract, transform, and load information into dashboards, I
            utilize Python and JavaScript. This involves processing the data,
            modifying its structure as needed, and then loading it into the
            dashboards.
          </p>
        </div>
        <div className="w-1/3 overflow-hidden rounded-lg">
          <DataStack />
        </div>
      </div>
    </section>
  );
};

export default DataDev;
