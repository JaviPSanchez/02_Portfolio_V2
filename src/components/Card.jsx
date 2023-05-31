import { Button } from "@components";

export default function Example({ image, title }) {
  return (
    <div className="w-full max-w-[350px] h-[350px] flex flex-col justify-start items-center bg-grey4 rounded-lg p-2 shadow-xl">
      <div className="relative">
        <div className="rounded-lg overflow-hidden">
          <img
            className="w-full max-h-[250px] object-contain"
            src={image}
            alt="picture1"
          />
        </div>
      </div>
      <div className="w-fit mb-10">
        <Button text={title} />
      </div>
    </div>
  );
}
