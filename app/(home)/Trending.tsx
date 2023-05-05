import Link from "next/link";
import React from "react";
import Image from "next/image";

type TrendingCardProps = {
  className?: string;
  src?: string;
  // post: Post;
};

const TrendingCard = ({ src, className }: TrendingCardProps) => {
  return (
    <Link
      href="/"
      className={`${className} sm:mt-0 mt-7 sm:h-auto block h-96 relative hover:opacity-70`}
    >
      {src}
      <div className="z-0 relative w-full h-full"></div>
      <div className="absolute z-1 top-0 left-0 w-full h-full bg-gradient-gradual"></div>
      <div className="absolute z-2 bottom-0 left-0 p-3">
        <h4 className="inline-block px-5 py-1 font-semibold bg-accent-orange">
          catergory
        </h4>
        <div className="text-wh-100 mt-2">Post Type</div>
      </div>
    </Link>
  );
};

const Trending = () => {
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
        <TrendingCard
          src="Hello"
          className="col-span-2 row-span-2 bg-wh-500"
        ></TrendingCard>
        <TrendingCard className="col-span-2 row-span-1 bg-wh-500"></TrendingCard>
        <TrendingCard className="col-span-1 row-span-1 bg-wh-500"></TrendingCard>
        <TrendingCard className="col-span-1 row-span-1 bg-wh-500"></TrendingCard>
      </div>

      <div className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
        repellat tenetur culpa cum vitae soluta reprehenderit, deserunt, enim
        beatae praesentium libero tempore veritatis nemo dolorum nobis.
        Recusandae modi labore sapiente?
      </div>
    </section>
  );
};

export default Trending;
