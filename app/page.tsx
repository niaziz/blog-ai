import Image from "next/image";
import { Inter } from "next/font/google";
import Trending from "app/(home)/Trending";
import Tech from "app/(home)/Tech";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="px-10 leading-7">
      <Trending />
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          <Tech />
          {/* <Travel />
          <Other /> */}
          <div className="hidden md:block">{/* <Subscribe /> */}</div>
        </div>
        <div className="1/4">{/* <SideBar /> */}</div>
      </div>
    </main>
  );
}
