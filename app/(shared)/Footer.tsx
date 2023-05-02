import React from "react";

type Props = {};

const Footer = () => {
  return (
    <footer className="bg-wh-900 text-wh-50 py-10 px-10">
      <div className="justify-between sm:flex gap-16 mx-auto">
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">BLOG OF THE FUTURE</h4>
          <p className="my-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            laborum magnam ut debitis quasi culpa quod ad vel consequatur
            dignissimos nemo porro, sequi amet maxime sed a temporibus quidem
            commodi.
          </p>
          <p>All right are only for me</p>
        </div>
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">To lade adoe</h4>
          <p className="my-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            laborum magnam ut debitis quasi culpa quod ad vel consequatur
            dignissimos nemo porro, sequi amet maxime sed a temporibus quidem
            commodi.
          </p>
        </div>
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">Contact us</h4>
          <p className="my-16">
            Dispacito I mean the address is here, 21, New York City, Mars
          </p>
          <p>(333) 0700123151 NOW SPAM PLEASE</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
