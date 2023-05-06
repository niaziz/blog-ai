import Link from "next/link";
import React from "react";
import Image from "next/image";

type Props = {
  className?: string;
  imageHeight?: string;
  isSmallCard?: boolean;
  isLongForm?: boolean;
};

const Card = ({
  className,
  post,
  imageHeight,
  isSmallCard = false,
  isLongForm = false,
}: Props) => {
  const { id, title, author, createdAt, snippet, image } = post || {};
  const date = new Date(createdAt);

  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <div className={className}>
      <Link
        className="basis-full hover:opacity-70"
        href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}
      >
        <div className={`relative w-auto mb-3 ${imageHeight}`}>
          <Image
            fill
            alt="tech"
            sizes="(max-width:480p) 100vw, (max-width:768px) 75vw, 50vw), 33vw"
            style={{ objectFit: "cover" }}
            src={post?.image}
          />
        </div>
      </Link>
      <div className="basis-full">
        <Link href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}>
          <h4
            className={`font-bold hover:text-accent-green
          ${isSmallCard ? "text-base" : "text-lg"}
          ${isSmallCard ? "line-clamp-2" : ""}
          `}
          >
            {title}
          </h4>
        </Link>

        <div className={`${isSmallCard ? "my-2" : "flex my-3"}`}>
          <h5 className="font-semibold text-xs">{author}</h5>
          <h6 className="text-wh-300 text-xs">{formattedDate}</h6>
        </div>
        <p
          className={`text-wh-500 ${
            isLongForm ? "line-clamp-5" : "line-clamp-3"
          } `}
        >
          {snippet}
        </p>
      </div>
    </div>
  );
};

export default Card;
