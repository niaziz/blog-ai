import React from "react";
import SocialLinks from "./SocialLinks";
import Subscribe from "./Subscribe";
import Ad2 from "public/assets/ad-2.png";
import Image from "next/image";
import Profile from "public/assets/about-profile.jpg";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <section>
      <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-center font-bold">
        Subscribe and follow
      </h4>
      <div className="my-5 mx-5">
        <SocialLinks isDark />
      </div>
      <Subscribe />
      <div className="my-8">
        <Image
          height={1000}
          width={500}
          className="hidden md:block w-full"
          alt="advertise"
          sizes="(max-width:480p) 100vw, (max-width:768px) 75vw, 50vw), 33vw"
          style={{ objectFit: "cover" }}
          src={Ad2}
        />
      </div>
      <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-center font-bold">
        About the Blog
      </h4>
      <div className="bg-wh-900 my-8 h-auto w-[500px]">
        <Image
          alt="tech"
          sizes="(max-width:480p) 100vw, (max-width:768px) 75vw, 50vw), 33vw"
          style={{ objectFit: "cover" }}
          src={Profile}
        />
      </div>
      <h4 className="py-3 px-5 text-wh-500 text-center font-bold">
        Martha way
      </h4>
      <p className="text-wh-500 text-center text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing consectetur
        consectetur .
      </p>
    </section>
  );
};

export default Sidebar;
