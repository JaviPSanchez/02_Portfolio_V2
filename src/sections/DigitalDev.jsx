import { BackStack } from "@components";

const DigitalDev = () => {
  return (
    <section className="h-full w-5/6 flex justify-center items-center m-60">
      <div className="flex w-full h-full">
        <div className="w-1/3 overflow-hidden rounded-lg">
          <BackStack />
        </div>
        <div className="w-2/3 px-10">
          <p class="font-Rubik text-12xl text-grey4 font-bold">03</p>
          <h3 class="font-Rubik font-bold w-full text-grey4 text-6xl mt-6">
            Digital Development
          </h3>
          <p class="font-Rubik text-3xl text-white mt-10 text-justify">
            In addition to managing and developing projects, it is crucial for
            success to lead and guide our teams effectively. Effective
            communication plays a pivotal role in achieving this. By fostering
            clear and efficient communication channels, we ensure that our team
            members are aligned, motivated, and empowered to perform their best.
            This ultimately contributes to the overall success of the projects
            we undertake.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DigitalDev;
