import React from "react";
import Card from "../(shared)/Card";

type Props = {
  techPost: Array<any>;
};

const Tech = ({ techPost }: Props) => {
  return (
    <section>
      <hr className="border-1" />
      <div className="flex items-center gap-3 my-8">
        <h4 className="bg-accent-orange py-2 px-5 text-wh-900 text-sm font-bold">
          HOT
        </h4>
        <p className="font-bold text-2xl">Latest News in Technology</p>
      </div>

      {/* flex */}

      {/* <div className="flex justify-between items-center gap-5">
        <div className="basis-1/2 bg-wh-500 h-96"></div>
        <div className="flex flex-col basis-1/2 gap-3 h-96">
          <div className="bg-wh-500 basis-1/3"></div>
          <div className="bg-wh-500 basis-1/3"></div>
          <div className="bg-wh-500 basis-1/3"></div>
        </div>
      </div> */}

      {/* grid */}
      <div className="sm:grid grid-cols-2 grid-rows-3 gap-x-8 gap-y-3 my-5">
        {/* large card */}
        <Card
          className="bg-wh-500 col-span-1 row-span-3"
          imageHeight="h-96"
          post={techPost[0]}
          isLongForm={true}
        />

        {/* small cards */}
        <Card
          className="bg-wh-500 col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
          imageHeight="h-48"
          post={techPost[1]}
          isSmallCard
        ></Card>

        <Card
          className="bg-wh-500 col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
          imageHeight="h-48"
          post={techPost[2]}
          isSmallCard
        ></Card>
        <Card
          className="bg-wh-500 col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
          imageHeight="h-48"
          post={techPost[3]}
          isSmallCard
        ></Card>

        <div className="bg-wh-500 col-span-1 row-span-1"></div>
        <div className="bg-wh-500 col-span-1 row-span-1"></div>
        <div className="bg-wh-500 col-span-1 row-span-1"></div>
      </div>
    </section>
  );
};

export default Tech;
