import Link from "next/link";
import React from "react";
Link;

type TrendingPropsCardProps = {
  className?: string;
};

const TrendingCard = ({ className }: TrendingPropsCardProps) => {
  return <Link></Link>;
};

const Trending = (props: Props) => {
  return (
    <section className="pt-3 pb-10 ">
      <div className="flex items-center gap-3">
        <div className="bg-wh-900 py-2 px-8 text-wh-10 text-sm font-bold">
          TRENDING
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam atque
          ab repudiandae. Quia quam,
        </p>
      </div>

      {/* FLEX */}

      {/* <div className="flex justify-between gap-3 my-3">
        <div className="basis-1/2 bg-wh-500 h-96"></div>
        <div className="flex flex-col basis-1/2 h-96 gap-3">
          <div className="basis-1/2 bg-wh-500 gap-3"></div>
          <div className="flex basis-1/2 gap-3">
            <div className="basis-1/2 bg-wh-500"></div>
            <div className="basis-1/2 bg-wh-500"></div>
          </div>
        </div>
      </div> */}

      {/* GRID */}

      <div className="sm:grid gap-5 grid-cols-4 grid-rows-2 sm:h-[600px] my-3">
        <div className="col-span-2 row-span-2 bg-wh-500"></div>
        <div className="col-span-2 row-span-1 bg-wh-500"></div>
        <div className="col-span-1 row-span-1 bg-wh-500"></div>
        <div className="col-span-1 row-span-1 bg-wh-500"></div>
      </div>
    </section>
  );
};

export default Trending;
