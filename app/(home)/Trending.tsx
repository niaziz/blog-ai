import Link from "next/link";
import React from "react";

type TrendingCardProps = {
  className?: string;
  src?: string;
  post: any;
};

const TrendingCard = ({ post, className }: TrendingCardProps) => {
  return (
    <Link
      href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}
      className={`${className} sm:mt-0 mt-7 sm:h-auto block h-96 relative hover:opacity-70`}
    >
      <div className="z-0 relative w-full h-full">image</div>
      <div className="absolute z-1 top-0 left-0 w-full h-full bg-gradient-gradual"></div>
      <div className="absolute z-2 bottom-0 left-0 p-3">
        <h4 className="inline-block px-5 py-1 font-semibold bg-accent-orange">
          {post?.category}
        </h4>
        <div className="text-wh-100 mt-2">{post?.title}</div>
      </div>
    </Link>
  );
};

type Props = {
  trendingPost: Array<any>;
};

const Trending = ({ trendingPost }) => {
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
          className="col-span-2 row-span-2 bg-wh-500"
          post={trendingPost[0]}
        />
        <TrendingCard
          className="col-span-2 row-span-1 bg-wh-500"
          post={trendingPost[1]}
        />
        <TrendingCard
          className="col-span-1 row-span-1 bg-wh-500"
          post={trendingPost[2]}
        />
        <TrendingCard
          className="col-span-1 row-span-1 bg-wh-500"
          post={trendingPost[3]}
        />
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
