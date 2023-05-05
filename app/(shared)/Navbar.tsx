import Link from "next/link";
import React from "react";
import Image from "next/image";
import SocialLinks from "./SocialLinks";
import Banner from "public/assets/ad-1.jpg";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="mb-5">
      <nav className="flex justify-between items-center w-full bg-wh-900 text-wh-10 px-10 py-4 ">
        <div className="hidden sm:block">
          <SocialLinks />
        </div>
        <div className="flex justify-between items-center gap-10">
          <Link href="/">Home</Link>
          <Link href="/">Trending</Link>
          <Link href="/">About</Link>
        </div>
        <div>
          <p>Sign in</p>
        </div>
      </nav>
      <div className="flex justify-between gap-8 mb-4 mt-5 mx-10">
        <div className="basis-2/3 md:mt-3">
          <h1 className="font-bold text-3xl md:5xl">BLOG OF THE FUTURE</h1>
          <p className="text-sm mt-3">Blog to warn about the danger of AI</p>
        </div>
        <div className="basis-full relative w-auto h-auto bg-wh-500">
          <Image
            className="object-cover overflow-hidden"
            alt="tech"
            src={Banner}
            fill
          />
        </div>
      </div>
      <hr className="border-1 mx-10 " />
    </header>
  );
};

export default Navbar;
