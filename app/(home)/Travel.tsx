import React from "react";
import Card from "../(shared)/Card";

type Props = {
  travelPost: Array<any>;
};

const Travel = ({ travelPost }: Props) => {
  return (
    <section className="mt-10">
      <hr className="border-1" />
      <div className="flex items-center gap-3 my-8">
        <h4 className="bg-accent-green py-2 px-5 text-wh-900 text-sm font-bold">
          TRAVEL
        </h4>
        <p className="font-bold text-2xl">NEW TRAVEL EXPEREIENCS</p>
      </div>

      <div className="sm:flex justify-between gap-8">
        <Card
          className="bg-wh-500 mt-5 sm:mt-0 basis-1/3"
          imageHeight="h-80"
          post={travelPost[0]}
        />
        <Card
          className="bg-wh-500 mt-5 sm:mt-0 basis-1/3"
          imageHeight="h-80"
          post={travelPost[1]}
        />
        <Card
          className="bg-wh-500 mt-5 sm:mt-0 basis-1/3"
          imageHeight="h-80"
          post={travelPost[2]}
        />
      </div>
      <Card
        className="bg-wh-500 flex justify-between items-center gap-3 mt-7 mb-5"
        imageHeight="h-80"
      />
    </section>
  );
};

export default Travel;
